import { MOCK_RETURN_REQUESTS, STATS } from '@/lib/data';
import { ReturnRequest, StatCardData } from '@/lib/types';
import { NextRequest } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<Response> {
  const data: ReturnRequest[] = MOCK_RETURN_REQUESTS;
  const stats: typeof STATS = STATS;

  return new Response(JSON.stringify({
    ok: true,
    data: {
      returnRequests: data,
      stats: stats,
      total: data.length,
    },
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await request.json();
    return new Response(JSON.stringify({
      ok: true,
      message: 'Demo mode — data not persisted',
      received: body,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({
      ok: false,
      error: 'Invalid JSON body',
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}