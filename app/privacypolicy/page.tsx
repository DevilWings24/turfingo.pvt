export default function PrivacyPolicyPage() {
  return (
    <main>
      <h1>Privacy & Data Usage Policy</h1>

      <p>
        By proceeding with registration, you confirm that you have read,
        understood, and agreed to this Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Full Name</li>
        <li>Age</li>
        <li>Date of Birth</li>
        <li>Phone Number</li>
        <li>Email Address</li>
        <li>Payment ID and transaction reference details received from Razorpay</li>
      </ul>

      <p>
        We do not collect or store sensitive payment information such as
        debit/credit card numbers, CVV, UPI PINs, or banking credentials.
      </p>

      <h2>2. Purpose of Data Collection</h2>
      <ul>
        <li>Verifying participant identity and age eligibility</li>
        <li>Managing tournament registrations and participation</li>
        <li>Communicating tournament-related updates and notifications</li>
        <li>Confirming payments and handling refunds</li>
        <li>Operational coordination with venue partners</li>
        <li>Compliance with legal and regulatory obligations</li>
      </ul>

      <h2>3. Payment Processing</h2>
      <p>
        All payments are securely processed through Razorpay. Our platform
        receives only payment confirmation identifiers and transaction
        references.
      </p>

      <h2>4. Data Storage and Security</h2>
      <p>
        Personal data is stored in MongoDB. At present, data is not encrypted at
        rest. Reasonable access controls are implemented to restrict
        unauthorized access.
      </p>

      <h2>5. Data Sharing and Disclosure</h2>
      <p>We do not sell, rent, or commercially share personal data.</p>
      <ul>
        <li>With turf owners for tournament coordination</li>
        <li>With Razorpay for payment processing</li>
        <li>With authorized internal team members</li>
        <li>When required by law or government authority</li>
        <li>To protect platform integrity and user safety</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        Data is retained only as long as necessary for tournaments and legal
        obligations, after which it may be deleted or anonymized.
      </p>

      <h2>7. User Rights</h2>
      <ul>
        <li>Access to personal data</li>
        <li>Correction of inaccurate data</li>
        <li>Deletion of data (subject to obligations)</li>
      </ul>

      <h2>8. Minor Participants</h2>
      <p>
        Where minors participate, submission of data confirms that appropriate
        parental or guardian consent has been obtained.
      </p>

      <h2>9. Policy Updates</h2>
      <p>
        This Policy may be updated periodically. Continued use of the platform
        constitutes acceptance of revised terms.
      </p>
    </main>
  );
}
