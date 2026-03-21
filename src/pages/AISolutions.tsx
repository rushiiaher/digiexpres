import { Link } from 'react-router-dom';
import {
  Brain, Zap, Target, BarChart3, MessageSquare, Eye,
  Cpu, ArrowRight, CheckCircle,
  HeartPulse, Landmark, ShoppingBag, Factory,
  Search, Database, Workflow, LineChart,
} from 'lucide-react';
import SEO from '../components/Common/SEO';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const BLUE_BG = 'rgba(37,99,235,0.08)';
const DARK = '#0b1f3a';

/* ─── AI Solution cards — 3-layer pattern ─────── */
const AI_SOLUTIONS = [
  {
    icon: <Brain strokeWidth={1.5} className="h-6 w-6" />,
    title: 'Machine Learning',
    description: 'Custom models that learn from your data to predict trends and automate decisions at scale.',
    caps: ['Prediction', 'Automation', 'Insights'],
  },
  {
    icon: <MessageSquare strokeWidth={1.5} className="h-6 w-6" />,
    title: 'Natural Language Processing',
    description: 'AI-powered text analysis, sentiment detection, and automated content generation.',
    caps: ['Sentiment Analysis', 'Translation', 'Chatbots'],
  },
  {
    icon: <Eye strokeWidth={1.5} className="h-6 w-6" />,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for quality control, security, and automation.',
    caps: ['Object Detection', 'Classification', 'QC Inspection'],
  },
  {
    icon: <Zap strokeWidth={1.5} className="h-6 w-6" />,
    title: 'Process Automation',
    description: 'Intelligent workflows that eliminate manual bottlenecks and free your team for high-value work.',
    caps: ['RPA', 'Smart Scheduling', 'Resource Allocation'],
  },
  {
    icon: <BarChart3 strokeWidth={1.5} className="h-6 w-6" />,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and behaviours with confidence using your historical data.',
    caps: ['Demand Forecasting', 'Risk Assessment', 'Market Prediction'],
  },
  {
    icon: <Target strokeWidth={1.5} className="h-6 w-6" />,
    title: 'AI Strategy Consulting',
    description: 'Strategic guidance on AI adoption, ROI planning, and digital transformation roadmaps.',
    caps: ['Readiness Assessment', 'Roadmapping', 'ROI Analysis'],
  },
];

/* ─── Industries ──────────────────────────────── */
const INDUSTRIES = [
  {
    icon: <HeartPulse strokeWidth={1.5} className="h-6 w-6" />,
    name: 'Healthcare',
    desc: 'AI-powered diagnostics, patient monitoring, and drug discovery acceleration.',
    examples: ['Medical Image Analysis', 'Drug Discovery', 'Patient Risk Assessment'],
  },
  {
    icon: <Landmark strokeWidth={1.5} className="h-6 w-6" />,
    name: 'Finance',
    desc: 'Fraud detection, algorithmic trading, and real-time risk management.',
    examples: ['Fraud Detection', 'Credit Scoring', 'Automated Trading'],
  },
  {
    icon: <ShoppingBag strokeWidth={1.5} className="h-6 w-6" />,
    name: 'Retail',
    desc: 'Personalised recommendations, inventory optimisation, and demand forecasting.',
    examples: ['Recommendation Engines', 'Price Optimisation', 'Demand Forecasting'],
  },
  {
    icon: <Factory strokeWidth={1.5} className="h-6 w-6" />,
    name: 'Manufacturing',
    desc: 'Predictive maintenance, computer-vision QC, and supply chain intelligence.',
    examples: ['Predictive Maintenance', 'Quality Inspection', 'Supply Chain Optimisation'],
  },
];

/* ─── Process steps ───────────────────────────── */
const PROCESS = [
  { icon: <Search strokeWidth={1.5} className="h-5 w-5" />, step: '01', title: 'Assessment', desc: 'Analyse your data quality, processes, and AI readiness before anything else.' },
  { icon: <LineChart strokeWidth={1.5} className="h-5 w-5" />, step: '02', title: 'Strategy', desc: 'Build a customised AI roadmap with clear KPIs, timelines, and ROI targets.' },
  { icon: <Database strokeWidth={1.5} className="h-5 w-5" />, step: '03', title: 'Development', desc: 'Train, validate, and fine-tune AI models on your real business data.' },
  { icon: <Workflow strokeWidth={1.5} className="h-5 w-5" />, step: '04', title: 'Integration', desc: 'Embed AI seamlessly into your existing systems with zero disruption.' },
  { icon: <BarChart3 strokeWidth={1.5} className="h-5 w-5" />, step: '05', title: 'Optimisation', desc: 'Continuously monitor, retrain, and improve model performance over time.' },
];

/* ─── ROI metrics ─────────────────────────────── */
const ROI = [
  { value: '40%', label: 'Avg. Cost Reduction' },
  { value: '65%', label: 'Process Efficiency Gain' },
  { value: '25%', label: 'Revenue Increase' },
  { value: '99.2%', label: 'Fraud Detection Accuracy' },
];

const AISolutions = () => (
  <div>
    <SEO
      title="AI Solutions"
      description="Transform your business with Digiexpres AI and machine learning solutions. Predictive analytics, NLP, computer vision, and process automation engineered for real impact."
      keywords="AI solutions, machine learning, artificial intelligence, predictive analytics, computer vision, NLP, automation"
    />

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-80px', right: '5%', width: '700px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* SVG wave divider */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
          <path fill="#ffffff" d="M0,45 C360,90 720,0 1080,50 C1260,75 1380,20 1440,35 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
              AI &amp; Machine Learning
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '20px' }}>
              AI Solutions That<br />
              <span style={{ color: '#60a5fa' }}>Transform</span> Business
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px' }}>
              Harness machine learning, NLP, and computer vision to automate processes, surface insights, and drive measurable growth.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none' }}>
                Start Your AI Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.18)', textDecoration: 'none' }}>
                View AI Case Studies
              </Link>
            </div>
          </div>

          {/* Right — visual card */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI Technology Neural Network"
              style={{ borderRadius: '16px', width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-16px', background: '#fff', borderRadius: '14px', padding: '18px 22px', boxShadow: '0 16px 48px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, flexShrink: 0 }}>
                <Cpu strokeWidth={1.5} className="h-5 w-5" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>AI-Powered Innovation</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Transforming businesses worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── ROI Stats Band ────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '56px 0', borderBottom: '1px solid #f1f5f9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {ROI.map((stat, i) => (
            <div key={stat.label} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: BLUE, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── AI Solutions Grid ─────────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Our Capabilities</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>Six AI Practice Areas</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Each solution is tailored to your data, your industry, and your specific business problems.
          </p>
        </div>

        {/* Auto-fit responsive grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {AI_SOLUTIONS.map((s) => (
            <Link
              key={s.title}
              to="/contact"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                borderRadius: '14px',
                border: '1px solid #e8edf4',
                padding: '28px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLAnchorElement;
                d.style.transform = 'translateY(-4px)';
                d.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)';
                d.style.borderColor = 'rgba(59,130,246,0.25)';
                const icon = d.querySelector('.card-icon') as HTMLElement;
                if (icon) icon.style.transform = 'scale(1.06)';
                const title = d.querySelector('.card-title') as HTMLElement;
                if (title) title.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLAnchorElement;
                d.style.transform = 'translateY(0)';
                d.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)';
                d.style.borderColor = '#e8edf4';
                const icon = d.querySelector('.card-icon') as HTMLElement;
                if (icon) icon.style.transform = 'scale(1)';
                const title = d.querySelector('.card-title') as HTMLElement;
                if (title) title.style.color = '#1e293b';
              }}
            >
              {/* Layer 1 — Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div
                  className="card-icon"
                  style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #4f7cff 0%, #6c63ff 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ffffff', flexShrink: 0,
                    boxShadow: '0 6px 14px rgba(79,124,255,0.25)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  className="card-title"
                  style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b', margin: 0, transition: 'color 0.2s ease', lineHeight: 1.3 }}
                >
                  {s.title}
                </h3>
              </div>

              {/* Layer 2 — Description */}
              <p style={{ fontSize: '15px', fontWeight: 400, color: '#64748b', lineHeight: 1.6, margin: '0 0 18px' }}>
                {s.description}
              </p>

              {/* Layer 3 — 3 capability tags (square radius, muted bg) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.caps.map((c) => (
                  <span key={c} style={{ fontSize: '13px', fontWeight: 500, padding: '5px 11px', borderRadius: '8px', background: '#f1f5f9', color: '#3b82f6' }}>
                    {c}
                  </span>
                ))}
              </div>

              {/* Layer 4 — CTA always at bottom, spacing via paddingTop */}
              <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 600, color: '#3b82f6' }}>
                Learn More <ArrowRight style={{ width: '13px', height: '13px' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── AI Across Industries ──────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Industry Focus</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>AI Across Industries</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>Tailored AI applications built around the specific challenges of your sector.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              style={{ background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 6px 30px rgba(37,99,235,0.09)'; d.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE }}>
                {ind.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{ind.name}</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
                {ind.examples.map((ex) => (
                  <span key={ex} style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', background: BLUE_BG, color: BLUE, display: 'inline-block', width: 'fit-content' }}>{ex}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Implementation Process ────────────────────────────────── */}
    <section style={{ background: DARK, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', left: '20%', width: '800px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.7)', marginBottom: '14px' }}>How We Deliver</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '14px' }}>AI Implementation Process</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>A five-phase framework that ensures every AI project ships on time and delivers ROI.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, rgba(37,99,235,0.15), rgba(37,99,235,0.5), rgba(37,99,235,0.15))', zIndex: 0 }} />
          {PROCESS.map((p) => (
            <div key={p.step} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: DARK, border: '1px solid rgba(37,99,235,0.45)', boxShadow: '0 0 0 6px rgba(37,99,235,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#60a5fa', position: 'relative', zIndex: 2 }}>
                {p.icon}
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(96,165,250,0.5)', marginBottom: '6px' }}>{p.step}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Real-world Impact ─────────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Measurable Impact</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px' }}>Real Results, Real Numbers</h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '36px' }}>
              Every AI engagement is tied to KPIs agreed before work begins. These are real averages across our delivered projects.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {ROI.map((stat) => (
                <div key={stat.label} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '24px', textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 900, color: BLUE, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
                  <p style={{ fontSize: '12px', color: '#64748b', fontWeight: 500, margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Predictive Maintenance', result: 'Reduced equipment downtime by 50% and maintenance costs by 30% for a tier-1 manufacturing client.' },
              { title: 'Customer Service AI', result: 'AI chatbot now handles 80% of inquiries, improving first-response time by 75% across 3 languages.' },
              { title: 'Fraud Detection', result: 'ML model detecting fraudulent transactions at 99.2% accuracy — saving millions in annual losses.' },
            ].map((c) => (
              <div key={c.title} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '18px', height: '18px', color: BLUE, flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>{c.title}</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <section style={{ background: DARK, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />

      <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '16px' }}>
          Ready to Unlock AI's Potential?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '36px' }}>
          Tell us your challenge. We'll scope an AI solution, define the ROI, and give you a clear path to production.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Schedule AI Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none' }}>
            View AI Case Studies
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default AISolutions;