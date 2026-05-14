import { MOCK_RETURN_REQUESTS } from '@/lib/data';
import { ReturnRequest } from '@/lib/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || ''; // Currently unused but part of spec for future expansion

  let results: ReturnRequest[] = [];

  if (!query) {
    // If query is empty, return the first 5 items
    results = MOCK_RETURN_REQUESTS.slice(0, 5);
  } else {
    const lowerCaseQuery = query.toLowerCase();

    results = MOCK_RETURN_REQUESTS.filter((item) => {
      const orderIdMatch = item.orderId.toLowerCase().includes(lowerCaseQuery);
      const customerNameMatch = item.customerName.toLowerCase().includes(lowerCaseQuery);
      const reasonMatch = item.reason.toLowerCase().includes(lowerCaseQuery);
      const requestedActionMatch = item.requestedAction.toLowerCase().includes(lowerCaseQuery);

      return orderIdMatch || customerNameMatch || reasonMatch || requestedActionMatch;
    });

    // Limit to max 20 results
    results = results.slice(0, 20);
  }

  return Response.json({
    ok: true,
    data: {
      results: results,
      total: results.length,
      query: query,
    },
  });
}