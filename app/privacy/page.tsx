import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: August 7, 2025</p>

      <p className="mb-4">
        Prince Digital Hub ("we", "our", or "us") operates applications and services that may collect certain data from users for improving functionality and ensuring performance. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
      <p className="mb-4">
        We may collect the following types of data:
        <ul className="list-disc list-inside ml-4">
          <li>Page and user profile data from Facebook (if authorized)</li>
          <li>Email address and public profile information</li>
          <li>Lead data (name, email, phone) submitted via Facebook Lead Ads</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Data</h2>
      <p className="mb-4">
        The data collected is used strictly for:
        <ul className="list-disc list-inside ml-4">
          <li>Syncing leads to your CRM or system</li>
          <li>Displaying lead details</li>
          <li>Sending notifications for new leads</li>
        </ul>
        We do not sell or share your data with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security practices to protect your data. Access to sensitive data is restricted and encrypted wherever possible.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Facebook Permissions</h2>
      <p className="mb-4">
        Our app uses Facebook Graph API permissions such as <code>leads_retrieval</code>, <code>pages_manage_metadata</code>, and <code>pages_read_engagement</code> to retrieve and manage leads for authorized users only.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding this Privacy Policy, feel free to contact us at:
        <br />
        📧 <a href="mailto:support@princedigitalhub.com" className="text-blue-500 underline">support@princedigitalhub.com</a>
        <br />
        📍 Prince Digital Hub, Sri Lanka
      </p>
    </div>
  );
};

export default PrivacyPolicy;
