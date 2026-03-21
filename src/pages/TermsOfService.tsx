import SEO from '../components/common/SEO';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO title="Terms of Service" description="Terms of Service of Digiexpres Tech Solution" />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TERMS OF SERVICE</h1>
        <p className="text-gray-500 mb-10 font-medium">Effective Date: 01/01/2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            Welcome to Digiexpres Tech Solution. By accessing our website, you agree to the following terms:
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Services</h2>
            <p className="mb-2">We provide IT services including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
              <li>SEO & Social Media Management</li>
              <li>Cloud & IT Solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Use of Website</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website for lawful purposes only</li>
              <li>Not misuse or attempt to hack our systems</li>
              <li>Provide accurate information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website (text, graphics, logo, design) is owned by Digiexpres Tech Solution and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Payments & Refunds</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payments must be made as per agreed terms</li>
              <li>Refunds are subject to project stage and agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="mb-2">We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Any indirect or consequential damages</li>
              <li>Loss of data or business interruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Termination</h2>
            <p>
              We reserve the right to terminate services if terms are violated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of our website means acceptance of changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
