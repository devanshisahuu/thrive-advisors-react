import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer41.css'

const Footer41 = (props) => {
  return (
    <footer className="footer41-footer7 thq-section-padding">
      <div className="footer41-max-width thq-section-max-width">
        <div className="footer41-content">
          <div className="footer41-logo">
            <Link to="/" className="footer41-navlink">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer41-logo1"
              />
            </Link>
          </div>
          <div className="footer41-links">
            <Link
              to="/services-overview"
              className="footer41-navlink1 thq-body-small"
            >
              {props.link1}
            </Link>
            <Link
              to="/industries-overview"
              className="footer41-navlink2 thq-body-small"
            >
              {props.link2}
            </Link>
            <Link to="/about" className="footer41-navlink3 thq-body-small">
              {props.link3}
            </Link>
          </div>
        </div>
        <div className="footer41-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer41-row">
            <div className="footer41-container">
              <span className="thq-body-small">{props.text}</span>
            </div>
            <div className="footer41-footer-links">
              <Link
                to="/privacy-policy"
                className="footer41-text1 thq-body-small"
              >
                {props.privacyLink}
              </Link>
              <Link
                to="/privacy-policy"
                className="footer41-text2 thq-body-small"
              >
                {props.termsLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer41.defaultProps = {
  link3: 'Contact Us',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link1: 'Home',
  link5: 'Blog',
  cookiesLink: '/cookies-policy',
  termsLink: '/terms-of-service',
  link4: 'FAQs',
  text: '© 2024 Thrive Advisors. All Rights Reserved.',
  privacyLink: '/privacy-policy',
  link2: 'About Us',
  logoAlt: 'Financial Consulting Experts Logo',
}

Footer41.propTypes = {
  link3: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  cookiesLink: PropTypes.string,
  termsLink: PropTypes.string,
  link4: PropTypes.string,
  text: PropTypes.string,
  privacyLink: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Footer41
