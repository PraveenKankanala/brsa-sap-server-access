import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <span className="section-tag">CONTACT US</span>

        <h2>Contact RR SAP Server Access</h2>

        <p className="section-description">
          Have questions about SAP Server Access? Contact us through phone,
          WhatsApp or email. Our support team is ready to help you.
        </p>

        <div className="contact-grid">

          {/* Contact Information */}

          <div className="contact-card">

            <h3> Contact Information</h3>

            <p>
              <strong>Email</strong><br />
              brsrserveraccess@gmail.com
            </p>

            <p>
              <strong>Address</strong><br />
              Ameerpet,<br />
              Opposite to Sri Yellammapochamma Temple,<br />
              3-5, Hyderabad, Telangana,500038.
            </p>

            <p>
              <strong>Instagram</strong><br />
              <a
                href="https://www.instagram.com/raju1909hana?igsh=MTVmNzJ4c3RqejZ3ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @raju1909hana
              </a>
            </p>

            <p>
              <strong>LinkedIn</strong><br />
              <a
                href="https://www.linkedin.com/in/sap-server-access-reddy-09b087297?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAP Server Access
              </a>
            </p>

            <p>
              <strong>Support Hours</strong><br />
              Monday - Sunday<br />
              9:00 AM - 9:00 PM
            </p>

          </div>

          {/* Contact Form */}

          <div className="contact-card">

            <h3>📩 Send us a Message</h3>

            <form>

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                required
              />

              <select required>

                <option value="">
                  Select SAP Product
                </option>

                <option>SAP S/4HANA 2025</option>

                <option>SAP ECC 6.0</option>

                <option>SAP SuccessFactors</option>

              </select>

              <textarea
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;