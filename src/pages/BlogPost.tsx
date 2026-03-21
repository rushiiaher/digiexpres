import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, Tag } from 'lucide-react';
import SEO from '../components/common/SEO';
import { db } from '../lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We subscribe to all blogs to populate both the page and the related articles dynamically
    const qBlogs = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(qBlogs, (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllPosts(posts);
      setPost(posts.find(p => p.id === id) || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog directory
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allPosts.filter(p => p.id !== id).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  // Extended content for the blog post
  const extendedContent = `
    <p>In today's rapidly evolving technological landscape, artificial intelligence has emerged as a transformative force that is reshaping how businesses operate, compete, and grow. As we move into 2025, the integration of AI technologies is no longer a luxury for forward-thinking companies—it's becoming an essential component of sustainable business strategy.</p>

    <h2>The Current State of AI Adoption</h2>
    <p>Recent studies indicate that over 77% of businesses are either currently using AI or exploring its implementation. This represents a significant increase from just a few years ago, highlighting the accelerating pace of AI adoption across industries. From small startups to Fortune 500 companies, organizations are recognizing the competitive advantages that AI can provide.</p>

    <h3>Key Areas of AI Implementation</h3>
    <ul>
      <li><strong>Customer Service Automation:</strong> AI-powered chatbots and virtual assistants are handling customer inquiries with unprecedented efficiency, providing 24/7 support while reducing operational costs.</li>
      <li><strong>Predictive Analytics:</strong> Machine learning algorithms are helping businesses forecast trends, optimize inventory, and make data-driven decisions with greater accuracy.</li>
      <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) combined with AI is streamlining repetitive tasks, allowing human workers to focus on more strategic activities.</li>
      <li><strong>Personalization Engines:</strong> AI is enabling hyper-personalized customer experiences across e-commerce, marketing, and content delivery platforms.</li>
    </ul>

    <h2>Emerging AI Trends for 2025</h2>
    <p>As we look ahead to 2025, several key trends are emerging that will shape the future of AI in business:</p>

    <h3>1. Conversational AI Revolution</h3>
    <p>The next generation of conversational AI will go beyond simple chatbots to provide truly intelligent, context-aware interactions. These systems will understand nuance, emotion, and complex multi-turn conversations, making them invaluable for customer support, sales, and internal operations.</p>

    <h3>2. AI-Driven Decision Making</h3>
    <p>Advanced AI systems will increasingly support strategic decision-making by analyzing vast amounts of data from multiple sources, identifying patterns that human analysts might miss, and providing actionable insights in real-time.</p>

    <h3>3. Autonomous Business Processes</h3>
    <p>We'll see the emergence of fully autonomous business processes where AI systems can handle complex workflows from start to finish with minimal human intervention. This will be particularly impactful in areas like supply chain management, financial planning, and quality control.</p>

    <h2>Industry-Specific Applications</h2>

    <h3>Healthcare</h3>
    <p>AI is revolutionizing healthcare through diagnostic assistance, drug discovery, and personalized treatment plans. Machine learning algorithms can now analyze medical images with accuracy that rivals experienced radiologists, while AI-powered platforms are accelerating the development of new medications.</p>

    <h3>Financial Services</h3>
    <p>The financial sector is leveraging AI for fraud detection, algorithmic trading, risk assessment, and regulatory compliance. AI systems can process thousands of transactions per second, identifying suspicious patterns and protecting both institutions and customers from financial crimes.</p>

    <h3>Manufacturing</h3>
    <p>Smart factories powered by AI are optimizing production lines, predicting equipment failures before they occur, and ensuring quality control through computer vision systems. This is leading to significant reductions in downtime and improvements in product quality.</p>

    <h2>Challenges and Considerations</h2>
    <p>While the benefits of AI are substantial, businesses must also navigate several challenges:</p>

    <h3>Data Quality and Privacy</h3>
    <p>AI systems are only as good as the data they're trained on. Ensuring data quality, accuracy, and compliance with privacy regulations like GDPR and CCPA is crucial for successful AI implementation.</p>

    <h3>Ethical AI Development</h3>
    <p>As AI systems become more sophisticated, businesses must prioritize ethical considerations, including bias prevention, transparency, and accountability in AI decision-making processes.</p>

    <h3>Workforce Transformation</h3>
    <p>The integration of AI requires careful change management and workforce development. Companies must invest in retraining employees and creating new roles that complement AI capabilities rather than compete with them.</p>

    <h2>Getting Started with AI</h2>
    <p>For businesses looking to embark on their AI journey, here are some key steps to consider:</p>

    <ol>
      <li><strong>Assess Your Current State:</strong> Evaluate your existing data infrastructure, technical capabilities, and business processes to identify AI opportunities.</li>
      <li><strong>Start Small:</strong> Begin with pilot projects that can demonstrate quick wins and build internal confidence in AI capabilities.</li>
      <li><strong>Invest in Talent:</strong> Build a team with the right mix of technical expertise, domain knowledge, and change management skills.</li>
      <li><strong>Choose the Right Partners:</strong> Work with experienced AI solution providers who can guide you through implementation and help you avoid common pitfalls.</li>
      <li><strong>Focus on ROI:</strong> Establish clear metrics and KPIs to measure the success of your AI initiatives and ensure they're delivering tangible business value.</li>
    </ol>

    <h2>The Road Ahead</h2>
    <p>As we move into 2025 and beyond, AI will continue to evolve and mature. The businesses that thrive will be those that embrace AI not as a replacement for human intelligence, but as a powerful tool that augments human capabilities and enables new levels of innovation and efficiency.</p>

    <p>The future belongs to organizations that can successfully integrate AI into their core business processes while maintaining a focus on human-centered design and ethical implementation. By staying informed about emerging trends and investing in the right AI capabilities, businesses can position themselves for success in an increasingly AI-driven world.</p>

    <h2>Conclusion</h2>
    <p>The AI revolution is here, and it's transforming every aspect of business operations. From customer service to strategic planning, AI is providing unprecedented opportunities for growth, efficiency, and innovation. The key to success lies in approaching AI implementation thoughtfully, with a clear strategy, the right partnerships, and a commitment to continuous learning and adaptation.</p>

    <p>As we look toward 2025, one thing is certain: the businesses that embrace AI today will be the leaders of tomorrow. The question isn't whether AI will reshape your industry—it's whether you'll be leading the transformation or scrambling to catch up.</p>
  `;

  return (
    <div className="pt-16">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, AI, technology, business, ${post.author}`}
        image={post.image}
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-300">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime || '5 min read'}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300">{post.excerpt}</p>

            <div className="flex items-center space-x-4">
              {post.authorImage ? (
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User className="h-6 w-6" />
                </div>
              )}
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-gray-400 text-sm">Senior Technology Writer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-xl -mt-12 relative z-10"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none"
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px'
                }}
              >
                {post.content && post.content !== extendedContent && !post.content.includes('<p>') ? (
                  // Admin posts might be plain text, this ensures it handles line breaks properly
                  <div className="whitespace-pre-wrap text-gray-700">{post.content}</div>
                ) : (
                  // Uses the extendedHTML content for the mocked posts
                  <div dangerouslySetInnerHTML={{ __html: post.content || extendedContent }} />
                )}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-3">
                  <Tag className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600 font-medium mr-2">Tags:</span>
                  {['AI', 'Business Strategy', 'Technology Trends', 'Digital Transformation'].map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600 font-medium">Share this article:</span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  {post.authorImage ? (
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <User className="h-8 w-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">About {post.author}</h3>
                    <p className="text-gray-600 mb-3">
                      {post.author} is a Senior Technology Writer at Digiexpres Tech Solution with over 10 years of experience in AI, machine learning, and enterprise technology. He specializes in translating complex technical concepts into actionable business insights.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#current-state" className="text-blue-600 hover:text-blue-700">Current State of AI</a></li>
                    <li><a href="#emerging-trends" className="text-blue-600 hover:text-blue-700">Emerging Trends</a></li>
                    <li><a href="#industry-applications" className="text-blue-600 hover:text-blue-700">Industry Applications</a></li>
                    <li><a href="#challenges" className="text-blue-600 hover:text-blue-700">Challenges</a></li>
                    <li><a href="#getting-started" className="text-blue-600 hover:text-blue-700">Getting Started</a></li>
                  </ul>
                </div>

                {/* Related Articles */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex space-x-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{relatedPost.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest tech insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                    />
                    <button className="w-full bg-blue-700 text-white py-2 rounded text-sm hover:bg-blue-800 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Articles</h2>
            <p className="text-gray-600">Explore more insights from our tech experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(relatedPost => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded">{relatedPost.category}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{relatedPost.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;