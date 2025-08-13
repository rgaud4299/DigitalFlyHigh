import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0D1033] text-white min-h-screen py-12 px-6 md:px-20 md:py-32">
      <h1 className="text-center text-3xl font-bold mb-10">PRIVACY POLICY</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm text-gray-300">
          Last updated: June 30, 2025
        </p>
        <p>
          Digital Fly-High Solutions ("us", "we", or "our") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website, digitalflyhigh.in.
        </p>

        <div>
          <h2 className="font-semibold">1. Information We Collect</h2>
          <p>
            We may collect personal information you provide via contact forms, such as your name, email,
            phone number, and business name. We may also collect non-personal data like browser type,
            OS, and website usage.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to inquiries and provide services.</li>
            <li>Send you marketing and promotional communications.</li>
            <li>Improve our website and services.</li>
            <li>Analyze usage and trends to enhance your experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">3. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or transfer personally identifiable information to outside parties,
            except trusted partners who help operate our website and conduct our business under
            confidentiality agreements.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">4. Data Security</h2>
          <p>
            We implement security measures to protect your information. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">5. Cookies</h2>
          <p>
            We may use cookies to improve your experience. You can disable cookies through your browser
            settings.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal information by contacting
            us directly.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@digitalflyhigh.in" className="text-blue-400 underline">
              info@digitalflyhigh.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
