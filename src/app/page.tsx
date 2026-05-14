import Link from 'next/link';
import { Inter } from 'next/font/google';
import {
  ChevronRight,
  PlusCircle,
  ClipboardList,
  BarChart2,
  Lock,
  ArrowRightRight,
  CheckCircle,
  ChartPie,
  Users,
  Database,
  LineChart,
  Workflow,
  Store,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Returns Triage Desk — Streamline E-commerce Returns & Boost Profit',
  description: 'The Returns Triage Desk transforms chaotic return requests into a structured, prioritized queue, enabling e-commerce operations managers to efficiently process returns and generate immediate ROI reports.',
};

export default function HomePage() {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      {/* Navbar */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-lg font-bold">R</div>
            <span className="text-xl font-bold text-zinc-900">Returns Triage Desk</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#features" className="text-zinc-600 hover:text-zinc-900 transition-colors">Features</Link>
            <Link href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors">Pricing</Link>
            <Link href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2 font-medium hover:bg-zinc-700 transition-colors flex items-center space-x-2">
              <span>Open Dashboard</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20 mb-6">
          AI-Powered E-commerce Triage
        </span>
        <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none max-w-4xl">
          Stop losing margin on messy returns.
        </h1>
        <p className="text-zinc-400 text-xl mt-4 max-w-3xl">
          The Returns Triage Desk transforms chaotic return requests into a structured, prioritized queue, enabling e-commerce operations managers to efficiently process returns and preserve profitability.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all flex items-center space-x-2">
            <span>Start Free Today</span>
            <ChevronRight size={18} />
          </Link>
          <Link href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800 transition-colors flex items-center space-x-2">
            <span>See It Live</span>
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Hero Visual (CSS-only UI mockup) */}
        <div className="relative w-full max-w-4xl mx-auto mt-20 p-8 bg-zinc-800/50 border border-zinc-700 rounded-2xl shadow-xl flex flex-col space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-700">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="w-1/3 h-4 bg-zinc-700 rounded-md"></div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/4 h-64 bg-zinc-700 rounded-xl p-4 flex flex-col space-y-3">
              <div className="h-4 bg-zinc-600 rounded-sm w-3/4"></div>
              <div className="h-4 bg-zinc-600 rounded-sm w-1/2"></div>
              <div className="h-4 bg-zinc-600 rounded-sm w-2/3"></div>
              <div className="h-4 bg-zinc-600 rounded-sm w-1/3"></div>
            </div>
            <div className="w-3/4 h-64 bg-zinc-700 rounded-xl p-4 flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-indigo-500 rounded-sm w-1/4 animate-pulse"></div>
                <div className="h-4 bg-emerald-500 rounded-sm w-1/5"></div>
              </div>
              <div className="h-2 bg-zinc-600 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-4/5"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-3/4 animate-pulse"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-600 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-white">10,000+</p>
            <p className="text-zinc-400 text-sm">Return Requests Managed</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white">99.9%</p>
            <p className="text-zinc-400 text-sm">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white">₹50M+</p>
            <p className="text-zinc-400 text-sm">Value Processed Annually</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white">4.9★</p>
            <p className="text-zinc-400 text-sm">Average User Rating</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-900 font-black text-4xl md:text-5xl text-center tracking-tight">
            The 3 workflows that solve chaotic returns.
          </h2>
          <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto text-lg">
            Seamlessly intake, prioritize, and report on every return request, turning a cost center into a core operational strength for your Shopify store.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 p-3 flex items-center justify-center">
                <PlusCircle size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mt-6 tracking-tight">Returns Intake & Normalization</h3>
              <p className="text-zinc-600 mt-2">
                E-commerce operations managers cannot quickly turn messy intake, requests, or source material into a clean working queue.
              </p>
              <p className="text-zinc-500 text-sm mt-3">
                Input raw requests into a structured form, ensuring normalized, complete data ready for prioritization and reducing manual errors.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 p-3 flex items-center justify-center">
                <ClipboardList size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mt-6 tracking-tight">Triage Desk Dashboard</h3>
              <p className="text-zinc-600 mt-2">
                E-commerce operations managers lack a single dashboard to prioritize the highest-value work and see what needs action now.
              </p>
              <p className="text-zinc-500 text-sm mt-3">
                A real-time, prioritized list of all return requests, allowing quick identification, review, and action on the highest-value returns.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 p-3 flex items-center justify-center">
                <BarChart2 size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mt-6 tracking-tight">ROI Reporting & Exports</h3>
              <p className="text-zinc-600 mt-2">
                E-commerce operations managers need exportable, client-ready outputs that prove ROI without manual reporting or spreadsheet cleanup.
              </p>
              <p className="text-zinc-500 text-sm mt-3">
                Generate instant, exportable CSV reports on return volume, value, and resolution times, providing concrete evidence of ROI without manual spreadsheet work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locked Roadmap / Selling Points Section */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tight">Unlock the full roadmap in one click.</h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
            Ready to supercharge your return operations? Upgrade to unlock powerful automation, advanced analytics, team collaboration, and more.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ArrowRightRight, name: 'Triage Automation', value: 'Automate initial review for common reasons.' },
              { icon: CheckCircle, name: 'Approval Automation', value: 'Set rules for auto-approving or rejecting requests.' },
              { icon: ChartPie, name: 'Analytics Automation', value: 'Automated insights and trends without manual setup.' },
              { icon: Users, name: 'Team Roles & Permissions', value: 'Control who can view and action specific requests.' },
              { icon: Database, name: 'Real Database Persistence', value: 'Your data saved securely, across sessions and users.' },
              { icon: LineChart, name: 'Advanced Analytics Reports', value: 'Deep dive into return patterns and customer behavior.' },
              { icon: Workflow, name: 'Customizable Workflows', value: 'Tailor triage steps to your unique business logic.' },
              { icon: Store, name: 'Multi-Store Management', value: 'Manage returns across all your Shopify stores from one place.' },
            ].map((feature, index) => (
              <div key={index} className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col items-start text-left relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <Lock size={20} className="text-amber-500 mb-3 relative z-10" />
                <h3 className="text-xl font-bold tracking-tight text-white relative z-10">{feature.name}</h3>
                <p className="text-zinc-400 mt-2 text-sm relative z-10">{feature.value}</p>
                <div className="mt-4 flex items-center space-x-2 text-sm text-zinc-500 relative z-10">
                  <Lock size={14} />
                  <span>Available after upgrade</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="#pricing" className="inline-flex items-center mt-16 bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all">
            Unlock Full Roadmap
            <ChevronRight size={18} className="ml-2" />
          </Link>
          <p className="text-zinc-500 text-sm mt-4 max-w-lg mx-auto">
            After selecting a paid plan, a single button click will deliver these advanced features directly into your dashboard. No complex setup or additional configurations needed.
          </p>
        </div>
      </section>


      {/* How It Works */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-900 font-black text-4xl md:text-5xl text-center tracking-tight">
            How Returns Triage Desk works
          </h2>
          <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto text-lg">
            Transform your return process in three simple, powerful steps.
          </p>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12 lg:space-x-20">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">1</div>
              <h3 className="text-2xl font-bold text-zinc-900 mt-6 tracking-tight">Ingest Returns</h3>
              <p className="text-zinc-600 mt-2">
                Use our intuitive form to capture all messy return requests from any channel, automatically normalizing the data into a structured format.
              </p>
            </div>

            <ChevronRight size={48} className="text-zinc-400 rotate-90 md:rotate-0 flex-shrink-0" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">2</div>
              <h3 className="text-2xl font-bold text-zinc-900 mt-6 tracking-tight">Prioritize & Triage</h3>
              <p className="text-zinc-600 mt-2">
                View all requests in a single, smart dashboard, prioritized by value and urgency, so you know exactly what to tackle next.
              </p>
            </div>

            <ChevronRight size={48} className="text-zinc-400 rotate-90 md:rotate-0 flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">3</div>
              <h3 className="text-2xl font-bold text-zinc-900 mt-6 tracking-tight">Report & Optimize</h3>
              <p className="text-zinc-600 mt-2">
                Generate one-click ROI reports and export data to prove efficiency gains and continuously optimize your return process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-zinc-900 font-black text-4xl md:text-5xl tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your e-commerce operations. No hidden fees, cancel anytime.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Free Tier */}
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Starter</h3>
              <p className="text-zinc-600 mt-2">Perfect for individual sellers</p>
              <p className="mt-6 text-5xl font-bold text-zinc-900">₹0<span className="text-lg text-zinc-400 font-medium">/mo</span></p>
              <ul className="mt-8 space-y-4 text-left text-zinc-600 flex-grow">
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-500" /> 1 active store</li>
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-500" /> 5 return requests/month</li>
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-500" /> Basic reporting only</li>
              </ul>
              <Link href="/dashboard" className="mt-8 block w-full bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-700 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-zinc-900 text-white rounded-xl shadow-lg p-10 flex flex-col h-full transform scale-105 ring-2 ring-indigo-500 relative">
              <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-2xl font-bold tracking-tight">Pro</h3>
              <p className="text-zinc-300 mt-2">For growing e-commerce teams</p>
              <p className="mt-6 text-5xl font-bold">₹6,499<span className="text-lg text-zinc-400 font-medium">/mo</span></p>
              <ul className="mt-8 space-y-4 text-left text-zinc-200 flex-grow">
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-300" /> Up to 5 active stores</li>
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-300" /> Unlimited return requests</li>
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-300" /> Advanced reporting & analytics</li>
                <li><CheckCircle size={18} className="inline mr-2 text-emerald-300" /> Unlock full roadmap</li>
              </ul>
              <Link href="/dashboard" className="mt-8 block w-full bg-white text-zinc-900 rounded-lg px-6 py-3 font-bold hover:bg-zinc-200 transition-colors">
                Start 14-Day Free Trial
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Enterprise</h3>
              <p className="text-zinc-600 mt-2">Custom solutions for large businesses</p>
              <p className="mt-6 text-5xl font-bold text-zinc-900">Custom</p>
              <p className="text-lg text-zinc-400 font-medium">Quote</p>
              <ul className="mt-8 space-y-4 text-left text-zinc-600 flex-grow">