import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-[#0D1033] text-white min-h-screen py-12 px-6 md:px-20 md:py-32">
      <h1 className="text-center text-3xl font-bold mb-10">TERMS OF SERVICE</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm text-gray-300">
          Last updated: June 30, 2025
        </p>
        <p>
          Please read these Terms of Service ("Terms") carefully before using the digitalflyhigh.in
          website (the "Service") operated by Digital Fly-High Solutions ("us", "we", or "our").
        </p>

        <div>
          <h2 className="font-semibold">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree
            with any part of the terms, then you may not access the Service.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">2. Services</h2>
          <p>
            We provide a range of digital marketing and development services, including but not limited
            to website development, SEO, paid advertising, and custom software development. All
            services are governed by a separate client agreement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the
            exclusive property of Digital Fly-High Solutions and its licensors. Our content may not be
            used without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">4. Limitation of Liability</h2>
          <p>
            In no event shall Digital Fly-High Solutions, nor its directors, employees, or partners,
            be liable for any indirect, incidental, special, consequential, or punitive damages arising
            from your access to or use of the Service.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">5. Governing Law</h2>
          <p>
            These Terms shall be governed in accordance with the laws of Madhya Pradesh, India, without
            regard to its conflict of law provisions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
            We will provide notice of any changes by posting the new Terms on this page.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:info@digitalflyhigh.in" className="text-blue-400 underline">
              info@digitalflyhigh.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
