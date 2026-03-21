import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle,
  Lightbulb, Code2, Globe, Brain, Shield, Cloud, TrendingUp,
  Search, Share2, BarChart3, Palette,
  ClipboardList, Compass, Cpu, LifeBuoy,
  Zap, Users, Star,
} from 'lucide-react';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const BLUE_BG = 'rgba(37,99,235,0.08)';
const DARK = '#0b1f3a';

/* ─── Service data ────────────────────────────── */
const SERVICES = [
  {
    icon: <Lightbulb strokeWidth={1.6} className="h-6 w-6" />,
    title: 'IT Consultation',
    description: 'Strategic technology planning and digital transformation guidance aligned with your business goals and budget.',
    features: ['Digital Strategy Roadmaps', 'Technology Assessment', 'Cost Optimisation', 'Risk Management'],
  },
  {
    icon: <Code2 strokeWidth={1.6} className="h-6 w-6" />,
    title: 'Software Development',
    description: 'Custom-built software with modern tech stacks, delivered with rigorous engineering standards and long-term maintainability.',
    features: ['Web Applications', 'Mobile Apps (iOS & Android)', 'Desktop Software', 'API & Microservices'],
  },
  {
    icon: <Globe strokeWidth={1.6} className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Responsive, performance-optimised websites and web apps that convert visitors into customers.',
    features: ['Responsive UI/UX Design', 'E-commerce Platforms', 'CMS Integration', 'SEO Optimisation'],
  },
  {
    icon: <Brain strokeWidth={1.6} className="h-6 w-6" />,
    title: 'AI / ML Integration',
    description: 'Embed intelligence into your operations — from predictive analytics to LLM-powered workflows and computer vision.',
    features: ['Machine Learning Models', 'NLP & LLM Integration', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    icon: <Shield strokeWidth={1.6} className="h-6 w-6" />,
    title: 'Cybersecurity',
    description: 'End-to-end protection for your digital infrastructure — proactive, compliant, and battle-tested against modern threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR/HIPAA)', 'Incident Response'],
  },
  {
    icon: <Cloud strokeWidth={1.6} className="h-6 w-6" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, DevOps pipelines, and seamless migrations with zero downtime.',
    features: ['Cloud Migration (AWS/Azure/GCP)', 'Infrastructure as Code', 'DevOps & CI/CD', 'Monitoring & Observability'],
  },
];

/* ─── Process steps ───────────────────────────── */
const PROCESS = [
  { icon: <Compass strokeWidth={1.6} className="h-6 w-6" />, step: '01', title: 'Discovery', desc: 'We learn your business deeply — goals, constraints, users — before touching a keyboard.' },
  { icon: <ClipboardList strokeWidth={1.6} className="h-6 w-6" />, step: '02', title: 'Planning', desc: 'A clear roadmap, tech stack, timeline, and success metrics agreed upon before work begins.' },
  { icon: <Cpu strokeWidth={1.6} className="h-6 w-6" />, step: '03', title: 'Build & Iterate', desc: 'Agile sprints with weekly demos. You see real progress and shape the product as it grows.' },
  { icon: <LifeBuoy strokeWidth={1.6} className="h-6 w-6" />, step: '04', title: 'Launch & Support', desc: 'Go-live with confidence. Ongoing SLA-backed support and continuous improvement post-launch.' },
];

/* ─── Why us ──────────────────────────────────── */
const WHY = [
  { icon: <Brain strokeWidth={1.6} className="h-6 w-6" />, title: 'AI-First Approach', desc: 'We integrate AI into every solution where it adds measurable value — not as a buzzword, but as a tool.' },
  { icon: <Users strokeWidth={1.6} className="h-6 w-6" />, title: 'Senior-Led Teams', desc: 'Every project is led by experienced engineers and strategists — not delegated to juniors.' },
  { icon: <Shield strokeWidth={1.6} className="h-6 w-6" />, title: 'Security by Design', desc: 'Security is architected in from day one, not patched on at the end.' },
  { icon: <Zap strokeWidth={1.6} className="h-6 w-6" />, title: 'Fast Delivery', desc: 'Lean processes and a bias for action — we ship fast without cutting corners.' },
  { icon: <BarChart3 strokeWidth={1.6} className="h-6 w-6" />, title: 'Measurable Results', desc: 'Every engagement is tied to KPIs. We track ROI alongside every milestone.' },
  { icon: <Star strokeWidth={1.6} className="h-6 w-6" />, title: '4.9★ Client Rating', desc: '500+ clients, all 5-star reviews. Our reputation is built on consistent, honest delivery.' },
];

const Services = () => (
  <div>

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-80px', right: '10%', width: '600px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* SVG wave divider — fills with #f8fafc (next section bg) */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
          <path fill="#f8fafc" d="M0,30 C240,80 480,0 720,35 C960,70 1200,10 1440,45 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
          What We Offer
        </p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '24px' }}>
          Technology Services Built<br />for <span style={{ color: '#60a5fa' }}>Real Business Growth</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 36px' }}>
          From AI integration to cybersecurity and cloud — every service is engineered to deliver measurable impact, on time and on budget.
        </p>
        <Link
          to="/contact"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}
        >
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* ── Services Grid ─────────────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Our Services</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>
            Six Core Practice Areas
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Specialised teams, proven methodologies, shared infrastructure — delivering excellence across every discipline.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 8px 40px rgba(37,99,235,0.10)'; d.style.borderColor = `${BLUE}44`; d.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.borderColor = '#e2e8f0'; d.style.transform = 'translateY(0)'; }}
            >
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: BLUE, borderRadius: '16px 16px 0 0', opacity: 0, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
              />

              {/* Icon */}
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, flexShrink: 0 }}>
                {s.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{s.description}</p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
                    <CheckCircle style={{ width: '15px', height: '15px', color: BLUE, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                style={{ marginTop: 'auto', paddingTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: BLUE, textDecoration: 'none', borderTop: '1px solid #f1f5f9' }}
              >
                Get Started <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Digital Marketing 360° ────────────────────────────────── */}
    <section style={{ background: DARK, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* glow */}
      <div style={{ position: 'absolute', top: '-100px', left: '30%', width: '700px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '8px', padding: '8px 16px', marginBottom: '24px' }}>
              <TrendingUp style={{ width: '16px', height: '16px', color: '#60a5fa' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Spotlight Service</span>
            </div>

            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: '20px' }}>
              Digital Marketing <span style={{ color: '#60a5fa' }}>360°</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '36px' }}>
              We don't just run campaigns — we build sustainable growth engines. From search to social, from brand to conversion, every channel is orchestrated into one measurable system.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
              {[
                { icon: <Search strokeWidth={1.6} className="h-5 w-5" />, title: 'Search Domination', desc: 'SEO, SEM, and local search to capture high-intent traffic at every stage.' },
                { icon: <Share2 strokeWidth={1.6} className="h-5 w-5" />, title: 'Social Amplification', desc: 'AI-optimised content and paid social across all major platforms.' },
                { icon: <BarChart3 strokeWidth={1.6} className="h-5 w-5" />, title: 'Conversion Mastery', desc: 'CRO, A/B testing, and analytics that turn visitors into customers.' },
                { icon: <Palette strokeWidth={1.6} className="h-5 w-5" />, title: 'Brand Excellence', desc: 'Identity, design, and messaging that builds long-term customer loyalty.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ color: '#60a5fa', marginBottom: '10px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '14px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}
            >
              Start Your Growth Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — visual card */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digital Marketing Analytics"
              style={{ borderRadius: '16px', width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
            {/* Overlay badge */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#fff', borderRadius: '14px', padding: '20px 24px', boxShadow: '0 16px 48px rgba(0,0,0,0.25)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: BLUE, lineHeight: 1 }}>360°</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Full-Channel Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Our Process ───────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>How We Work</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>Our Delivery Process</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '520px', margin: '0 auto' }}>
            A proven four-phase framework that eliminates surprises and keeps every project on track.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: '40px', left: '12.5%', right: '12.5%', height: '2px', background: 'linear-gradient(to right, rgba(37,99,235,0.15), rgba(37,99,235,0.5), rgba(37,99,235,0.15))', zIndex: 0 }} />

          {PROCESS.map((p) => (
            <div key={p.step} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              {/* Numbered icon badge */}
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#fff', border: `2px solid ${BLUE}22`, boxShadow: '0 0 0 6px rgba(37,99,235,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', flexDirection: 'column', gap: '2px', position: 'relative', zIndex: 2 }}>
                <div style={{ color: BLUE }}>{p.icon}</div>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(37,99,235,0.5)', marginBottom: '6px' }}>{p.step}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Why Choose Digiexpres ─────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Why Digiexpres</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>The Digiexpres Difference</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '520px', margin: '0 auto' }}>
            What separates good agencies from great partners — and why 500+ companies keep coming back.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {WHY.map((w) => (
            <div key={w.title} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '28px 28px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 6px 30px rgba(37,99,235,0.09)'; d.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, flexShrink: 0 }}>
                {w.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>{w.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <section style={{ background: DARK, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />

      <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '16px' }}>
          Ready to Build Something Great?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '36px' }}>
          Tell us about your project. We'll respond within one business day with a clear path forward.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none' }}
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default Services;