/*import "../styles/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">

        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Your City, Country</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 123 456 7890</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>yourmail@example.com</p>
          </div>

          <div className="contact-card">
            <FaInstagram className="contact-icon" />
            <h3>Instagram</h3>
            <p>@your_instagram</p>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/yourprofile</p>
          </div>
        </div>

        {/* Optional Contact Form *}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
} */

  import "../styles/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Let's connect. How can we help you</p>

      <div className="contact-container">

        <div className="contact-item">
       <a
       href="https://www.google.com/maps?q=26°51'11.1N 80°53'56.6E"
        target="_blank"
        rel="noopener noreferrer"
       >
    <FaMapMarkerAlt className="contact-icon" />
    <h4>Location</h4>
   
  </a>
</div>

       <div className="contact-item">
        <a href="tel:+917398434859">
  <FaPhoneAlt className="contact-icon" />
  <h4>Phone</h4>
  </a>
</div>

        

        <div className="contact-item">
          <a href="https://www.instagram.com/_faraz.agha/?__pwa=1#">
          <FaInstagram className="contact-icon" />
          <h4>Instagram</h4>
          
          </a>
        </div>


        <div className="contact-item">
          <a href="https://www.facebook.com/share/182rnidPS7/">
          <FaFacebook className="contact-icon" />
          <h4>Facebook</h4>
          </a>
        </div>

        <div className="contact-item">
  <a
    href="https://wa.me/917398434859?text=Hello%20I%20want%20to%20contact%20you"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaPhoneAlt className="contact-icon" />
    <h4>WhatsApp</h4>
    
  </a>
</div>

      </div>
    </section>
  );
}