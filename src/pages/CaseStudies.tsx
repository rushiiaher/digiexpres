import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, Clock, CheckCircle,
  HeartPulse, Landmark, ShoppingBag, Factory,
  GraduationCap, Building2, Truck, Zap,
  Building, Sprout, Clapperboard, Car,
} from 'lucide-react';
import { caseStudies } from '../data/mockData';
import SEO from '../components/Common/SEO';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const BLUE_BG = 'rgba(37,99,235,0.08)';
const DARK = '#0b1f3a';

/* ─── Stats band ──────────────────────────────── */
const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Success Rate' },
  { value: '$50M+', label: 'Client Savings' },
  { value: '15+', label: 'Industries Served' },
];

/* ─── Industries ──────────────────────────────── */
const INDUSTRIES = [
  { name: 'Healthcare', icon: <HeartPulse strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Finance', icon: <Landmark strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Retail', icon: <ShoppingBag strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Manufacturing', icon: <Factory strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Education', icon: <GraduationCap strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Real Estate', icon: <Building2 strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Logistics', icon: <Truck strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Energy', icon: <Zap strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Government', icon: <Building strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Agriculture', icon: <Sprout strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Entertainment', icon: <Clapperboard strokeWidth={1.5} className="h-6 w-6" /> },
  { name: 'Automotive', icon: <Car strokeWidth={1.5} className="h-6 w-6" /> },
];

const CaseStudies = () => (
  <div>
    <SEO
      title="Case Studies"
      description="Explore Digiexpres success stories. Real projects, real results — from e-commerce transformations to AI-powered healthcare systems across 15+ industries."
      keywords="case studies, IT projects, AI implementations, business transformation, technology solutions, client success stories"
    />

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* SVG wave divider */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
          <path fill="#ffffff" d="M0,55 C200,90 500,10 720,45 C940,80 1200,15 1440,50 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
          Client Success Stories
        </p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '20px' }}>
          Real Projects.<br />
          <span style={{ color: '#60a5fa' }}>Real Results.</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto 36px' }}>
          From AI-powered healthcare systems to e-commerce transformations — see how we've helped 500+ companies build better technology.
        </p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
          Start Your Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* ── Stats Band ───────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '56px 0', borderBottom: '1px solid #f1f5f9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
              <p style={{ fontSize: '2.4rem', fontWeight: 900, color: BLUE, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Case Studies Grid ─────────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Portfolio</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>Success Stories</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>
            Deep-dives into the problems we solved, the technology we used, and the results we delivered.
          </p>
        </div>

        {/* Card grid — 3-column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e8edf4',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLAnchorElement;
                d.style.transform = 'translateY(-5px)';
                d.style.boxShadow = '0 12px 40px rgba(0,0,0,0.09), 0 4px 12px rgba(37,99,235,0.07)';
                d.style.borderColor = 'rgba(37,99,235,0.2)';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLAnchorElement;
                d.style.transform = 'translateY(0)';
                d.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)';
                d.style.borderColor = '#e8edf4';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '220px', flexShrink: 0 }}>
                <img
                  src={study.image}
                  alt={study.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Client badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(11,31,58,0.85)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: '#fff' }}>
                  {study.client}
                </div>
                {/* Timeline badge */}
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 600, color: '#475569' }}>
                  <Clock style={{ width: '11px', height: '11px' }} /> {study.timeline}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '16px' }}>
                {/* Title + desc */}
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.3 }}>{study.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{study.description}</p>
                </div>

                {/* Key results */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {study.results.slice(0, 3).map((r, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <TrendingUp style={{ width: '14px', height: '14px', color: BLUE, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px', color: '#475569', lineHeight: 1.45 }}>{r}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '6px', background: BLUE_BG, color: BLUE }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: BLUE, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Read Full Case Study <ArrowRight style={{ width: '13px', height: '13px' }} />
                  </span>
                  <CheckCircle style={{ width: '16px', height: '16px', color: '#22c55e' }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── Industries We Serve ───────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Sector Coverage</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>Industries We Serve</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '480px', margin: '0 auto' }}>
            Deep domain expertise across 15+ verticals — so we never start from zero on your industry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                padding: '20px 12px', borderRadius: '12px',
                border: '1px solid #f1f5f9', background: '#f8fafc',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.background = BLUE_BG;
                d.style.borderColor = `${BLUE}22`;
                d.style.transform = 'translateY(-2px)';
                const icon = d.querySelector('.ind-icon') as HTMLElement;
                if (icon) { icon.style.background = BLUE; icon.style.color = '#fff'; }
                const label = d.querySelector('.ind-label') as HTMLElement;
                if (label) label.style.color = BLUE;
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.background = '#f8fafc';
                d.style.borderColor = '#f1f5f9';
                d.style.transform = 'translateY(0)';
                const icon = d.querySelector('.ind-icon') as HTMLElement;
                if (icon) { icon.style.background = BLUE_BG; icon.style.color = BLUE; }
                const label = d.querySelector('.ind-label') as HTMLElement;
                if (label) label.style.color = '#475569';
              }}
            >
              <div
                className="ind-icon"
                style={{ width: '48px', height: '48px', borderRadius: '12px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, transition: 'background 0.2s, color 0.2s', flexShrink: 0 }}
              >
                {ind.icon}
              </div>
              <span
                className="ind-label"
                style={{ fontSize: '12px', fontWeight: 600, color: '#475569', textAlign: 'center', lineHeight: 1.3, transition: 'color 0.2s' }}
              >
                {ind.name}
              </span>
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
          Ready to Be Our Next Success Story?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '36px' }}>
          Every case study started with a conversation. Let's talk about your challenge and what's possible.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none' }}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default CaseStudies;