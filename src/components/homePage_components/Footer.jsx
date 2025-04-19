import React from "react";
import "../../../style_components/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer" data-aos="fade-down">
        <div className="footer-info" data-aos="fade-right">
          <img src="/images/i-fitness-logo.png" alt="logo" />
          <p>
            We are a 360-health and wellness company and the leading and
            fastest-growing fitness chain. With over 200 professionally
            certified personal trainers, ultra-modern gym facilities and over 40
            free fitness classes weekly, we give our members a holistic
            experience to suit and support their fitness lifestyle.
          </p>
          <div className="social-icons">
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="footer-quick-links" data-aos="fade-up">
          <div className="heading">
            <h1>Quick Links</h1>
            <div className="rule"></div>
          </div>

          <div className="links">
            <a href="#location">Locations</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#dues">Annual Dues Faq</a>
            <a href="#news">News & Events</a>
            <a href="#corporate">Corporate Plans</a>
            <a href="#membership">Membership Plans</a>
          </div>
        </div>

        <div className="working-hours" data-aos="fade-up">
          <div className="heading">
            <h1>Working hours</h1>
            <div className="rule"></div>
          </div>

          <div className="group-hours">
            <div className="hours">
              <span className="days">Monday - Friday</span>
              <span className="time">6AM - 9PM</span>
            </div>
            <div className="hours">
              <span className="days">Saturday</span>
              <span className="time">7AM - 8PM</span>
            </div>
            <div className="hours">
              <span className="days">Public Holidays</span>
              <span className="time">7AM - 8PM</span>
            </div>
            <div className="hours">
              <span className="days">Deep Cleaning</span>
              <span className="time">2PM - 3PM(Daily)</span>
            </div>
            <div className="hours">
              <span className="days">Closed</span>
              <span className="time">Jan 1, Dec 25 & 26</span>
            </div>
          </div>
        </div>
        <div className="footer-form" data-aos="fade-left">
          <h3>FOR LATEST NEWS & UPDATES</h3>
          <h1>subscribe to our newsletter</h1>
          <form>
            <div className="form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <button>subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-full-width">
        <small>
          &copy; {new Date().getFullYear()} I-Fitness Centre LTD. All rights
          reserved.
        </small>
        <div className="right-text">
          <span>FAQS</span>
          <span>PRIVACY POLICY</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
