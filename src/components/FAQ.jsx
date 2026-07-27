import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq" id="faq">

      <div className="container">

        <span className="section-tag">FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p className="section-description">
          Find answers to the most common questions about BRSA SAP Server Access.
        </p>

        <div className="faq-container">

          <div className="faq-item">
            <h3>What is RR SAP Server Access?</h3>
            <p>
              BRSA SAP Server Access provides live SAP practice environments
              for students, professionals, trainers and organizations. Access
              enterprise SAP systems anytime through our secure cloud platform.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which SAP servers are available?</h3>
            <p>
              We currently provide access to SAP S/4HANA 2025,
              SAP ECC 6.0 and SAP SuccessFactors with dedicated user accounts.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I receive my SAP Login Credentials?</h3>
            <p>
              After payment verification, your SAP User ID, Password,
              Server Details and Login Instructions will be shared through
              WhatsApp or Email.
            </p>
          </div>

          <div className="faq-item">
            <h3>How long does activation take?</h3>
            <p>
              Most accounts are activated within <strong>10–30 minutes</strong>
              after successful payment verification. Login details will be
              shared via WhatsApp or Email.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I access the SAP server from anywhere?</h3>
            <p>
              Yes. You can access your SAP server from anywhere with an
              internet connection using your assigned login credentials.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you provide technical support?</h3>
            <p>
              Yes. We provide technical support for login issues, password
              resets and server-related assistance during your subscription.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I renew my subscription?</h3>
            <p>
              Yes. You can renew your subscription at any time to continue
              uninterrupted access to your SAP server.
            </p>
          </div>

          <div className="faq-item">
            <h3>How can I contact RR Support?</h3>
            <p>
              You can contact us through WhatsApp, Email or the Contact section
              on our website. Our team will respond as quickly as possible.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;