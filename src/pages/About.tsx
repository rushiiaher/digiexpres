import { Link } from 'react-router-dom';
import {
  Target, Eye, Heart, ArrowRight,
  CheckCircle, Award, Clock, Users, Code, Zap, ShieldCheck
} from 'lucide-react';
import SEO from '../components/common/SEO';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const DARK = '#0b1f3a';

/* ─── Stats ───────────────────────────────────── */
const STATS = [
  { value: '500+', label: 'Projects Delivered', icon: <CheckCircle strokeWidth={1.5} className="h-5 w-5" /> },
  { value: '98%', label: 'Client Satisfaction', icon: <Award strokeWidth={1.5} className="h-5 w-5" /> },
  { value: '24/7', label: 'Support Available', icon: <Clock strokeWidth={1.5} className="h-5 w-5" /> },
  { value: '50+', label: 'Industry Awards', icon: <Users strokeWidth={1.5} className="h-5 w-5" /> },
];

/* ─── Mission / Vision / Values ──────────────── */
const PILLARS = [
  {
    icon: <Target strokeWidth={1.5} className="h-6 w-6" />,
    label: 'Our Mission',
    text: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.',
  },
  {
    icon: <Eye strokeWidth={1.5} className="h-6 w-6" />,
    label: 'Our Vision',
    text: 'To be the leading provider of AI-powered business solutions, creating a future where technology seamlessly enhances human potential.',
  },
  {
    icon: <Heart strokeWidth={1.5} className="h-6 w-6" />,
    label: 'Our Values',
    text: 'Innovation, integrity, client success, and continuous learning form the cornerstone of our company culture and every client relationship.',
  },
];

const About = () => (
  <div>
    <SEO
      title="About Digiexpres"
      description="Learn about Digiexpres Tech Solution — our story, mission, and the team behind 500+ successful technology projects across 15+ industries since 2019."
      keywords="about Digiexpres, tech company, IT solutions, AI company, team, mission, vision"
    />

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* SVG wave */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
          <path fill="#ffffff" d="M0,35 C300,85 600,5 900,50 C1100,78 1300,18 1440,42 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
          Est. 2026 · Pune, India
        </p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '20px' }}>
          Tech Built Around<br />
          <span style={{ color: '#60a5fa' }}>Your Business</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 36px' }}>
          We're a forward-thinking technology company dedicated to transforming businesses through AI solutions, custom software, and end-to-end digital strategy.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none' }}>
            Work With Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.18)', textDecoration: 'none' }}>
            View Our Work
          </Link>
        </div>
      </div>
    </section>

    {/* ── Stats Band ───────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '56px 0', borderBottom: '1px solid #f1f5f9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center px-6 ${i % 2 === 0 ? 'border-r border-slate-100' : ''} lg:border-r lg:last:border-r-0 lg:border-slate-100`}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: BLUE }}>{stat.icon}</div>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: DARK, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Our Story ────────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '16px' }}>Our Story</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '20px', lineHeight: 1.2 }}>
              From a Bold Idea<br />to 500+ Projects Delivered
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
              Founded in 2019, Digiexpres emerged from a clear vision: bridge the gap between traditional business operations and the transformative potential of modern technology. Our founders saw what AI and smart engineering could do — and built a company to make it accessible to businesses of every size.
            </p>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '36px' }}>
              We've grown from a small team of passionate technologists into a full-service technology partner, with a track record spanning 15+ industries and 500+ delivered projects. That passion for outcome-driven engineering hasn't changed one bit.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '14px', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none' }}>
                Work With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: BLUE, fontWeight: 600, fontSize: '14px', padding: '13px 24px', borderRadius: '8px', border: `1px solid ${BLUE}33`, textDecoration: 'none' }}>
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right — image + floating badge */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Digiexpres team collaborating"
              style={{ borderRadius: '16px', width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
            />
            {/* Floating years badge */}
            <div className="absolute -bottom-4 right-0 sm:-right-5 bg-[#0b1f3a] rounded-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-center">
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: '4px' }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Mission / Vision / Values ─────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Our Foundation</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>What We Stand For</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '480px', margin: '0 auto' }}>
            The principles that guide every decision, every project, and every client relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.label}
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                borderRadius: '16px', border: '1px solid #e8edf4', padding: '36px 32px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(0)'; d.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)'; }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #4f7cff 0%, #6c63ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '20px', boxShadow: '0 6px 14px rgba(79,124,255,0.25)' }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b', margin: '0 0 12px', lineHeight: 1.3 }}>{p.label}</h3>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Why Choose Us ──────────────────────────────────────────────── */}
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>The Digiexpres Advantage</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>Why Partner With Us?</h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '520px', margin: '0 auto' }}>
            We combine strategic thinking with engineering excellence to deliver solutions that give your business a measurable edge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Strategic Alignment',
              desc: 'We map every technical decision directly to your core business objectives, ensuring ROI from day one.',
              icon: <Target className="h-6 w-6" strokeWidth={1.5} />,
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            {
              title: 'Engineering Excellence',
              desc: 'Scalable architecture, clean code, and rigorous testing form the backbone of every product we ship.',
              icon: <Code className="h-6 w-6" strokeWidth={1.5} />,
              color: 'text-indigo-600',
              bg: 'bg-indigo-50'
            },
            {
              title: 'Agile Delivery',
              desc: 'Fast iterations, transparent communication, and adaptable workflows keep your project moving swiftly.',
              icon: <Zap className="h-6 w-6" strokeWidth={1.5} />,
              color: 'text-amber-500',
              bg: 'bg-amber-50'
            },
            {
              title: 'Unwavering Security',
              desc: 'Enterprise-grade security protocols and robust data protection are integrated into our DNA.',
              icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50'
            }
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                background: '#ffffff', borderRadius: '16px', border: '1px solid #e8edf4',
                padding: '36px 28px', transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(0)'; d.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 12px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Achievements (dark band) ──────────────────────────────── */}
    <section style={{ background: DARK, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)' }} />

      <div className="max-w-5xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.7)', marginBottom: '14px' }}>By The Numbers</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>Our Achievements</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center px-6 ${i % 2 === 0 ? 'border-r border-white/10' : ''} lg:border-r lg:last:border-r-0 lg:border-white/10`}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: '#60a5fa' }}>{stat.icon}</div>
              <p style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <section style={{ background: '#f8fafc', padding: '96px 0' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '14px' }}>Let's Build Together</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '16px' }}>
          Join Us on Our Journey
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75, marginBottom: '36px' }}>
          Whether you're looking for a technology partner or want to join our team — we'd love to hear from you.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: BLUE, fontWeight: 600, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', border: `1px solid ${BLUE}33`, textDecoration: 'none' }}>
            Explore Services
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default About;