import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO title="Privacy Policy" description="Privacy Policy of Digiexpres Tech Solution" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">PRIVACY POLICY</h1>
        <p className="text-gray-500 mb-10 font-medium">Effective Date: 01/01/2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            At Digiexpres Tech Solution (accessible from www.digiexpres.com), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Information</strong> (Name, Email, Phone Number)</li>
              <li><strong>Business Information</strong> (Company Name, Project Details)</li>
              <li><strong>Technical Data</strong> (IP Address, Browser Type, Device Info)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and manage our IT services</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Improve our website and services</li>
              <li>Send updates, offers, or promotional content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sharing of Information</h2>
            <p className="mb-2">We do not sell or trade your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trusted third-party service providers</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies</h2>
            <p>
              We use cookies to improve user experience. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request corrections or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
            <p className="mb-2">If you have any questions, contact us:</p>
            <ul className="space-y-1">
              <li>📧 <strong>Email:</strong> info@digiexpres.com</li>
              <li>🌐 <strong>Website:</strong> www.digiexpres.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
