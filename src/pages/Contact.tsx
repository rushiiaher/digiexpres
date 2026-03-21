import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/common/SEO';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const BLUE_BG = 'rgba(37,99,235,0.08)';
const DARK = '#0b1f3a';

/* ─── Contact info items ──────────────────────── */
const CONTACT_ITEMS = [
  {
    icon: <Mail strokeWidth={1.5} className="h-5 w-5" />,
    label: 'Email',
    lines: ['info@digiexpres.com', 'support@digiexpres.com'],
    href: 'mailto:info@digiexpres.com',
  },
  {
    icon: <Phone strokeWidth={1.5} className="h-5 w-5" />,
    label: 'Phone',
    lines: ['+91 7397 990245', '+44 7748 346550'],
    href: 'tel:+917397990245',
  },
  {
    icon: <MapPin strokeWidth={1.5} className="h-5 w-5" />,
    label: 'India Office',
    lines: ['GNP Galleria, 2nd Floor, Dombivli East,', 'Maharashtra 421203, India'],
    href: 'https://maps.google.com/?q=GNP+Galleria+Dombivli',
  },
  {
    icon: <MapPin strokeWidth={1.5} className="h-5 w-5" />,
    label: 'UK Office',
    lines: ['CEME Business Campus, Marsh Way,', 'Rainham RM13 8EU, London, UK'],
    href: 'https://maps.google.com/?q=CEME+Business+Campus+Rainham',
  },
  {
    icon: <Clock strokeWidth={1.5} className="h-5 w-5" />,
    label: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 4:00 PM'],
    href: null,
  },
];

/* ─── FAQ data ────────────────────────────────── */
const FAQS = [
  { q: 'How quickly can you start my project?', a: 'We typically begin new projects within 1–2 weeks of contract signing, depending on scope and current workload. For urgent requirements, we also offer expedited onboarding.' },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes — all delivered projects include a post-launch support window, and we offer flexible retainer and maintenance packages to ensure your solution performs optimally long-term.' },
  { q: 'What industries do you specialise in?', a: 'We serve clients across healthcare, finance, retail, manufacturing, education, logistics, and technology startups. Our team has deep domain expertise in 15+ verticals.' },
  { q: 'Can you integrate with our existing systems?', a: 'Absolutely. We specialize in integrating new solutions with legacy and third-party systems, ensuring seamless data flow without disrupting your current operations.' },
  { q: 'How are projects priced?', a: 'Pricing depends on scope, complexity, and timeline. We offer fixed-price engagements for well-defined projects and time-and-materials models for evolving requirements. All quotes are free.' },
];

/* ─── Input helper style ──────────────────────── */
const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  fontSize: '14px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  background: '#f8fafc',
  color: '#0f172a',
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '7px',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      }, 4000);
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to send message. Please try again or email us directly.');
    }
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = BLUE;
    e.currentTarget.style.boxShadow = `0 0 0 3px ${BLUE_BG}`;
    e.currentTarget.style.background = '#ffffff';
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#e2e8f0';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.background = '#f8fafc';
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with Digiexpres Tech Solution. Reach our offices in India and London, or send us a message to start your project today."
        keywords="contact Digiexpres, IT company contact, software development inquiry, AI solutions contact, Dombivli, London"
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
            <path fill="#f8fafc" d="M0,35 C300,85 600,5 900,52 C1100,78 1280,15 1440,40 L1440,90 L0,90 Z" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
            Let's Talk
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
            Tell us about your project. We'll respond within 24 hours with a clear scope, timeline, and first steps.
          </p>
        </div>
      </section>

      {/* ── Main grid: Form + Info ────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'start' }}>

            {/* ── Contact Form ── */}
            <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e8edf4', padding: '44px', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '8px' }}>Send a Message</p>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Start a Conversation</h2>
              </div>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#22c55e' }}>
                    <CheckCircle style={{ width: '32px', height: '32px' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>
                    Thank you for reaching out. We'll get back to you within 24 hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>Full Name <span style={{ color: BLUE }}>*</span></label>
                      <input id="name" name="name" type="text" required placeholder="Jane Smith" value={formData.name} onChange={handleChange} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email Address <span style={{ color: BLUE }}>*</span></label>
                      <input id="email" name="email" type="email" required placeholder="jane@company.com" value={formData.email} onChange={handleChange} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="company" style={labelStyle}>Company</label>
                      <input id="company" name="company" type="text" placeholder="Acme Ltd." value={formData.company} onChange={handleChange} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                    <div>
                      <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 7397 990245" value={formData.phone} onChange={handleChange} style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" style={labelStyle}>Service Interested In</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusInput} onBlur={blurInput}>
                      <option value="">Select a service…</option>
                      <option value="it-consultation">IT Consultation</option>
                      <option value="software-development">Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-ml-integration">AI / ML Integration</option>
                      <option value="cybersecurity">Cybersecurity Solutions</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-marketing">Digital Marketing 360°</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>Message <span style={{ color: BLUE }}>*</span></label>
                    <textarea
                      id="message" name="message" required rows={5}
                      placeholder="Tell us about your project, goals, and any key requirements…"
                      value={formData.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', fontFamily: 'inherit' }}
                      onFocus={focusInput} onBlur={blurInput}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', transition: 'background 0.15s, transform 0.15s', width: '100%' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#1d4ed8'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BLUE; }}
                  >
                    Send Message <Send style={{ width: '16px', height: '16px' }} />
                  </button>
                </form>
              )}
            </div>

            {/* ── Right column: Info + Map ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Contact info card */}
              <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e8edf4', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '8px' }}>Contact Info</p>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '24px' }}>Reach Us Directly</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '3px' }}>{item.label}</div>
                        {item.lines.map((line, i) => (
                          item.href ? (
                            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                              style={{ display: 'block', fontSize: '14px', color: '#374151', textDecoration: 'none', lineHeight: 1.6, transition: 'color 0.15s' }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = BLUE; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#374151'; }}
                            >{line}</a>
                          ) : (
                            <p key={i} style={{ fontSize: '14px', color: '#374151', margin: 0, lineHeight: 1.6 }}>{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map embed card */}
              <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e8edf4', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ padding: '20px 24px 0' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Find Us — India Office</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>GNP Galleria, Dombivli East, Maharashtra</p>
                </div>
                <iframe
                  title="Digiexpres India Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.3458!2d73.0875!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955b6c2d3d3d%3A0x0!2sGNP+Galleria%2C+Dombivli+East!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block', marginTop: '16px', filter: 'grayscale(0.15)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '12px' }}>FAQ</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '12px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1rem', color: '#64748b' }}>Quick answers to the questions we hear most often.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{ border: '1px solid', borderColor: openFaq === i ? `${BLUE}33` : '#e8edf4', borderRadius: '12px', overflow: 'hidden', background: openFaq === i ? 'rgba(37,99,235,0.02)' : '#ffffff', transition: 'border-color 0.2s, background 0.2s' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', gap: '16px', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600, color: openFaq === i ? BLUE : '#0f172a', transition: 'color 0.2s', lineHeight: 1.4 }}>{faq.q}</span>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: openFaq === i ? BLUE_BG : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: openFaq === i ? BLUE : '#64748b', flexShrink: 0, transition: 'all 0.2s' }}>
                    <ChevronDown style={{ width: '16px', height: '16px', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                  </div>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 20px' }}>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75, margin: 0, borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA band ─────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
        <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
            Prefer to email us directly?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
            Drop us a line at{' '}
            <a href="mailto:info@digiexpres.com" style={{ color: '#60a5fa', fontWeight: 600, textDecoration: 'none' }}>info@digiexpres.com</a>
            {' '}and we'll respond within 24 hours.
          </p>
          <a
            href="mailto:info@digiexpres.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: BLUE, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none' }}
          >
            <Mail style={{ width: '16px', height: '16px' }} /> Send an Email
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;