import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, Tag, ArrowRight } from 'lucide-react';
import { db } from '../lib/firebase';
import SEO from '../components/Common/SEO';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

/* ─── Brand constants ─────────────────────────── */
const BLUE = '#2563eb';
const BLUE_BG = 'rgba(37,99,235,0.08)';
const DARK = '#0b1f3a';



const TOPICS = [
  'Artificial Intelligence', 'Machine Learning', 'Cybersecurity',
  'Cloud Migration', 'Digital Transformation', 'Web Development',
  'Data Analytics', 'IT Strategy', 'Automation', 'Blockchain',
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allPosts, setAllPosts] = useState<any[]>([]);

  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    // Read blogs from Firestore
    const qBlogs = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    const unsubscribeBlogs = onSnapshot(qBlogs, (snapshot) => {
      const dbPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllPosts(dbPosts);
    });

    // Read dynamic categories from Firestore
    const qCats = query(collection(db, 'blogCategories'), orderBy('name', 'asc'));
    const unsubscribeCats = onSnapshot(qCats, (snapshot) => {
      setCategories(['All', ...snapshot.docs.map(doc => doc.data().name)]);
    });

    return () => {
      unsubscribeBlogs();
      unsubscribeCats();
    };
  }, []);

  const filteredPosts = allPosts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const featuredPost = allPosts[0];

  return (
    <div>
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud solutions, and digital transformation from the Digiexpres team."
        keywords="tech blog, AI insights, cybersecurity tips, digital transformation, technology trends, IT strategy"
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg, #0b1f3a 0%, #0b1f3a 55%, #0f2a4d 75%, #152f56 90%, #1a3a66 100%)', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }}>
            <path fill="#f8fafc" d="M0,40 C240,85 480,5 720,48 C960,90 1200,12 1440,38 L1440,90 L0,90 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.8)', marginBottom: '20px' }}>
            Insights &amp; Perspectives
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            Latest Tech News<br />
            <span style={{ color: '#60a5fa' }}>&amp; Insights</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto' }}>
            Expert perspectives on AI, cybersecurity, cloud, and the technology trends shaping how businesses compete.
          </p>
        </div>
      </section>

      {/* ── Search + Filter Bar ───────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '32px 0', borderBottom: '1px solid #e8edf4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Search */}
            <div style={{ position: 'relative', flex: '1', minWidth: '240px', maxWidth: '360px' }}>
              <Search style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#94a3b8', pointerEvents: 'none' }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles…"
                style={{
                  width: '100%', paddingLeft: '42px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '10px',
                  fontSize: '14px', border: '1px solid #e2e8f0', borderRadius: '10px', background: '#ffffff',
                  outline: 'none', color: '#0f172a', boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 0 0 3px ${BLUE_BG}`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '7px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, border: 'none',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                    background: selectedCategory === cat ? BLUE : '#ffffff',
                    color: selectedCategory === cat ? '#ffffff' : '#475569',
                    boxShadow: selectedCategory === cat ? 'none' : '0 1px 3px rgba(0,0,0,0.06)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Article ──────────────────────────────────────── */}
      {featuredPost && (
        <section style={{ background: '#f8fafc', padding: '64px 0 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '8px' }}>Featured</p>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Editor's Pick</h2>
            </div>

            <Link
              to={`/blog/${featuredPost.id}`}
              style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', background: '#ffffff', borderRadius: '16px', border: '1px solid #e8edf4', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06)', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLAnchorElement; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = '0 16px 50px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLAnchorElement; d.style.transform = 'translateY(0)'; d.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06)'; }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '360px' }}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Featured badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: BLUE, color: '#fff', borderRadius: '8px', padding: '5px 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Featured
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                {/* Category + meta */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', background: BLUE_BG, color: BLUE }}>
                    {featuredPost.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar style={{ width: '12px', height: '12px' }} />
                    {new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock style={{ width: '12px', height: '12px' }} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, letterSpacing: '-0.02em', margin: 0 }}>
                  {featuredPost.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {featuredPost.excerpt}
                </p>

                {/* Author + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #f1f5f9', marginTop: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: BLUE, flexShrink: 0, overflow: 'hidden' }}>
                      {featuredPost.authorImage ? <img src={featuredPost.authorImage} alt={featuredPost.author} className="w-full h-full object-cover" /> : <User style={{ width: '16px', height: '16px' }} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{featuredPost.author}</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>Senior Tech Lead</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: BLUE, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Read Article <ArrowRight style={{ width: '13px', height: '13px' }} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── All Articles Grid ─────────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '64px 0 96px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '36px' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 4px' }}>Latest Articles</h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, margin: '0 auto 16px' }}>
                <Search style={{ width: '28px', height: '28px' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>No articles found</h3>
              <p style={{ fontSize: '14px', color: '#64748b' }}>Try adjusting your search terms or selecting a different category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  style={{
                    textDecoration: 'none', display: 'flex', flexDirection: 'column',
                    background: '#ffffff', borderRadius: '14px', border: '1px solid #e8edf4',
                    overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    const d = e.currentTarget as HTMLAnchorElement;
                    d.style.transform = 'translateY(-4px)';
                    d.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)';
                    d.style.borderColor = 'rgba(37,99,235,0.2)';
                    const title = d.querySelector('.post-title') as HTMLElement;
                    if (title) title.style.color = BLUE;
                  }}
                  onMouseLeave={(e) => {
                    const d = e.currentTarget as HTMLAnchorElement;
                    d.style.transform = 'translateY(0)';
                    d.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)';
                    d.style.borderColor = '#e8edf4';
                    const title = d.querySelector('.post-title') as HTMLElement;
                    if (title) title.style.color = '#0f172a';
                  }}
                >
                  {/* Cover image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                    />
                    {/* Category badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: 600, color: '#0f172a' }}>
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
                    {/* Meta */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar style={{ width: '11px', height: '11px' }} />
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock style={{ width: '11px', height: '11px' }} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="post-title" style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0, lineHeight: 1.35, transition: 'color 0.2s ease', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: BLUE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE, overflow: 'hidden' }}>
                          {post.authorImage ? <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" /> : <User style={{ width: '12px', height: '12px' }} />}
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>{post.author}</span>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: BLUE, display: 'flex', alignItems: 'center', gap: '3px' }}>
                        Read More <ArrowRight style={{ width: '12px', height: '12px' }} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)' }} />

        <div className="max-w-2xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.7)', marginBottom: '14px' }}>Newsletter</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>Stay in the Loop</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '32px' }}>
            Get the latest tech insights and industry trends delivered straight to your inbox. No spam, ever.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '420px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="you@company.com"
              style={{
                flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.07)', color: '#ffffff', fontSize: '14px', outline: 'none',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            />
            <button style={{ padding: '12px 22px', borderRadius: '8px', background: BLUE, color: '#fff', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── Popular Topics ────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '12px' }}>Browse</p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Popular Topics</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  const match = categories.find(c => c.toLowerCase().includes(topic.split(' ')[0].toLowerCase()));
                  setSelectedCategory(match || 'All');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
                  border: '1px solid #e8edf4', background: '#f8fafc', color: '#475569',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { const d = e.currentTarget as HTMLButtonElement; d.style.background = BLUE_BG; d.style.borderColor = `${BLUE}33`; d.style.color = BLUE; }}
                onMouseLeave={(e) => { const d = e.currentTarget as HTMLButtonElement; d.style.background = '#f8fafc'; d.style.borderColor = '#e8edf4'; d.style.color = '#475569'; }}
              >
                <Tag style={{ width: '12px', height: '12px' }} />
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;