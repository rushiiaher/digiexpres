import SEO from '../components/common/SEO';

const CookieNotice = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO title="Cookie Notice" description="Cookie Notice of Digiexpres Tech Solution" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">COOKIE NOTICE</h1>
        <p className="text-gray-500 mb-10 font-medium">Effective Date: 01/01/2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            This Cookie Notice explains how Digiexpres Tech Solution uses cookies on www.digiexpres.com.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Cookies</h2>
            <p className="mb-2">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Improve website performance</li>
              <li>Analyze user behavior</li>
              <li>Remember user preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential Cookies</strong> – Required for website functionality</li>
              <li><strong>Analytics Cookies</strong> – Help us understand website usage</li>
              <li><strong>Marketing Cookies</strong> – Used for targeted advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Managing Cookies</h2>
            <p>
              You can control or disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Cookies</h2>
            <p className="mb-2">We may use third-party tools like:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Analytics</li>
              <li>Advertising platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Updates</h2>
            <p>
              We may update this Cookie Notice periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
