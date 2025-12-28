export default function PrivacyPolicy() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial", lineHeight: "1.7" }}>
      <h1>Privacy Policy – PakSupply.pk</h1>

      <p>
        PakSupply.pk respects the privacy of all users including manufacturers,
        shopkeepers, and visitors. This Privacy Policy explains how information
        is collected, used, stored, and protected on our platform.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Manufacturer name, company details, phone number, and email</li>
        <li>Shopkeeper name, shop name, city, and contact details (if provided)</li>
        <li>Payment proof screenshots submitted by manufacturers</li>
        <li>Usage data such as page views and WhatsApp order clicks</li>
      </ul>

      <h2>2. Use of Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Verify manufacturers and approve listings</li>
        <li>Display products to shopkeepers</li>
        <li>Facilitate WhatsApp-based order communication</li>
        <li>Improve platform visibility and performance</li>
        <li>Prevent fraud, misuse, or policy violations</li>
      </ul>

      <h2>3. Payment Proof Handling</h2>
      <p>
        Payment screenshots submitted for manual verification are stored
        securely and accessed only by PakSupply.pk administrators. We do not
        share payment proof with third parties.
      </p>

      <h2>4. Israel-Free Declaration Disclaimer</h2>
      <p>
        Manufacturers may declare their products as Israel-free. This
        declaration is the sole responsibility of the manufacturer.
        PakSupply.pk does not legally verify or guarantee such claims and holds
        no legal responsibility for their accuracy.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        PakSupply.pk does not sell, rent, or trade personal data. Information is
        shared only when legally required or to protect platform integrity.
      </p>

      <h2>6. Account Suspension & Termination</h2>
      <p>
        PakSupply.pk reserves the right to suspend or terminate accounts that
        provide false information, violate agreements, misuse the platform, or
        engage in fraudulent activity.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We take reasonable technical and administrative measures to protect
        user data against unauthorized access, alteration, or disclosure.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        This Privacy Policy is governed by and interpreted under the laws of the
        Islamic Republic of Pakistan.
      </p>

      <h2>9. Updates to This Policy</h2>
      <p>
        PakSupply.pk may update this Privacy Policy at any time. Continued use
        of the platform indicates acceptance of updated terms.
      </p>

      <p style={{ marginTop: "30px", color: "gray" }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
