import { useApp } from '../context';
import { Btn } from '../components/ui';

const stats = [
  { v: '4.2M', l: 'Tonnes CO₂ Traded' },
  { v: '340+', l: 'Verified Suppliers' },
  { v: '28', l: 'Countries Active' },
  { v: '99.4%', l: 'Delivery Accuracy' },
];

const industries = [
  { icon: '🏭', label: 'Cement & Concrete', role: 'Seller / Buyer' },
  { icon: '⚙️', label: 'Steel & Metals', role: 'Seller' },
  { icon: '⚡', label: 'Power Generation', role: 'Seller' },
  { icon: '🛢️', label: 'Oil Refining', role: 'Seller' },
  { icon: '🌾', label: 'Food & Beverage', role: 'Buyer' },
  { icon: '🌿', label: 'Algae & Biotech', role: 'Buyer' },
  { icon: '🧪', label: 'Chemicals & Fuels', role: 'Buyer' },
  { icon: '🏠', label: 'Greenhouse Ops', role: 'Buyer' },
];

const features = [
  {
    title: 'Physical CO₂ Trade',
    desc: 'Source, negotiate and procure bulk industrial CO₂ — gas, liquid or supercritical — with full chain-of-custody documentation.',
    icon: '◎',
  },
  {
    title: 'Rules-Based Pricing',
    desc: 'Transparent, auditable pricing engine. Every cost component — capture, liquefaction, logistics, handling — is itemized. No black-box AI.',
    icon: '⊞',
  },
  {
    title: 'Digital CO₂ Passport',
    desc: 'Immutable batch-level records: purity, contaminants, pressure, temperature, certification, and custody chain from source to utilization site.',
    icon: '◈',
  },
  {
    title: 'KYB / KYC Compliance',
    desc: 'Automated counterparty verification, sanctions screening, and regulatory compliance checks for cross-border industrial transactions.',
    icon: '◇',
  },
  {
    title: 'MRV & Impact Reporting',
    desc: 'ISO 14064-compliant monitoring, reporting and verification. Quantified CO₂ utilization data ready for ESG disclosure and regulatory submissions.',
    icon: '◉',
  },
  {
    title: 'Logistics Orchestration',
    desc: 'End-to-end transport coordination: cryogenic tanker routing, ISO container logistics, and real-time shipment tracking across modes.',
    icon: '◫',
  },
];

export default function Landing() {
  const { navigate, setRole } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F8F6]">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#15572A] rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                <circle cx="7" cy="7" r="2" fill="white"/>
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Carbon<span className="text-[#15572A]">Connect</span>
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#sellers" className="hover:text-zinc-900 transition-colors">Industries that capture and store CO₂</a>
            <a href="#buyers" className="hover:text-zinc-900 transition-colors">Industries that need CO₂</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Btn variant="ghost" onClick={() => navigate('login')}>Sign in</Btn>
            <Btn onClick={() => navigate('role-selection')}>Get started</Btn>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>

            <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Industrial CO₂<br />
              <span className="text-[#15572A]">procurement,</span><br />
              reimagined.
            </h1>
            <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-md">
              Carbon-Connect is the verified B2B marketplace connecting industrial CO₂ producers with utilization buyers. Physical CO₂ trade with full compliance, transparent pricing, and chain-of-custody documentation.
            </p>
            <div className="flex items-center gap-3">
              <Btn onClick={() => navigate('role-selection')} className="px-6">
                Start trading CO₂
              </Btn>
              <Btn variant="outline" onClick={() => navigate('login')}>
                Browse marketplace →
              </Btn>
            </div>
            <p className="text-xs text-zinc-400 mt-4">Physical CO₂ trade only. Carbon credits are separate instruments not traded on this platform.</p>
          </div>
          <div className="relative">
            <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Live Market Summary</span>
                <span className="text-xs font-mono text-green-700 bg-green-50 px-2 py-0.5 rounded">LIVE</span>
              </div>
              <div className="space-y-3">
                {[
                  { grade: 'Food Grade CO₂ (99.9%)', price: '₹12,400/t', change: '+2.1%', vol: '12,400 t' },
                  { grade: 'Industrial Grade (99.5%)', price: '₹7,500/t', change: '-0.8%', vol: '48,200 t' },
                  { grade: 'Technical Grade (98.0%)', price: '₹4,500/t', change: '+0.3%', vol: '91,500 t' },
                  { grade: 'Captured / Utilization', price: '₹5,600/t', change: '+4.2%', vol: '23,800 t' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                    <div>
                      <div className="text-xs font-medium text-zinc-900">{row.grade}</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">{row.vol} available</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-zinc-900 font-mono">{row.price}</div>
                      <div className={`text-xs font-mono ${row.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{row.change}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('login')}
                className="mt-4 w-full py-2 text-xs font-medium text-[#15572A] border border-[#15572A]/30 rounded hover:bg-green-50 transition-colors"
              >
                View full marketplace →
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Industries */}
      <section className="border-t border-zinc-200 bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Built for your industry</h2>
          <p className="text-zinc-500 mb-10">Serving industrial CO₂ producers and utilization buyers across sectors.</p>
          <div className="grid grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="border border-zinc-200 rounded p-4 hover:border-zinc-400 hover:shadow-sm transition-all cursor-default">
                <div className="text-2xl mb-3">{ind.icon}</div>
                <div className="text-sm font-medium text-zinc-900">{ind.label}</div>
                <div className="text-xs text-zinc-400 mt-1">{ind.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Platform capabilities</h2>
        <p className="text-zinc-500 mb-10">Every tool required to procure, verify, and report industrial CO₂ utilization.</p>
        <div className="grid grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded p-6 hover:shadow-sm hover:border-zinc-300 transition-all">
              <div className="text-[#15572A] text-lg mb-3 font-mono">{f.icon}</div>
              <div className="text-sm font-semibold text-zinc-900 mb-2">{f.title}</div>
              <div className="text-xs text-zinc-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Important notice */}
      <section className="border-t border-zinc-200 bg-amber-50 py-10">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex gap-4 items-start">
            <div className="text-amber-600 text-lg mt-0.5">⚠</div>
            <div>
              <div className="text-sm font-semibold text-amber-900 mb-1">Important Distinction: Physical CO₂ vs Carbon Credits</div>
              <div className="text-xs text-amber-800 leading-relaxed max-w-2xl">
                Carbon-Connect trades <strong>physical CO₂ molecules</strong> — captured industrial gas transported and utilized in concrete mineralization, chemical synthesis, food carbonation, and other applications. This is entirely separate from <strong>carbon credit certificates</strong> (VCUs, GOs, removal credits), which are financial instruments traded on separate registries. Do not conflate these instruments. Our platform handles physical molecules only.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-zinc-200 bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>About Carbon-Connect</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">Our Platform</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                We are building India's premier B2B marketplace for physical CO₂. Our platform connects large industrial emitters with utilization industries, ensuring transparent pricing and fully digitized MRV reporting to support national net-zero goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">Terms & Conditions</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                All trades are subject to physical delivery verification and Indian regulatory compliance (BIS standards). By using the platform, users agree to binding arbitration for any dispute regarding purity or logistics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">Privacy</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Organizational data, trade volumes, and pricing are kept strictly confidential. Aggregate data may be used for market indices. We comply fully with the DPDP Act of India regarding organizational and personal data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#15572A] py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Ready to trade industrial CO₂?</h2>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => { setRole('seller'); navigate('role-selection'); }}
              className="px-6 py-2.5 bg-white text-[#15572A] font-medium rounded hover:bg-green-50 transition-colors text-sm"
            >
              I'm a CO₂ Seller
            </button>
            <button
              onClick={() => { setRole('buyer'); navigate('role-selection'); }}
              className="px-6 py-2.5 bg-[#0E3F1E] text-white font-medium rounded hover:bg-[#0A2E14] transition-colors text-sm border border-green-700"
            >
              I'm a CO₂ Buyer
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#15572A] rounded flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/><circle cx="7" cy="7" r="2" fill="white"/></svg>
            </div>
            <span className="text-xs text-zinc-500">Carbon<span className="text-[#15572A]">Connect</span> © 2026</span>
          </div>
          <div className="flex gap-4 text-xs text-zinc-400">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Compliance</a><a href="#">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
