import React from 'react'

import PropTypes from 'prop-types'

import './footer132.css'

const Footer132 = (props) => {
  return (
    <footer className="footer132-container thq-section-padding">
      <div className="footer132-max-width thq-section-max-width">
        <div className="thq-divider-horizontal"></div>
        <div className="footer132-content">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="footer132-image1"
          />
          <div className="footer132-links thq-grid-5">
            <div className="footer132-column1">
              <strong className="thq-body-large footer132-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer132-footer-links">
                <span className="thq-body-small">{props.link1}</span>
                <span className="thq-body-small">{props.link2}</span>
                <span className="thq-body-small">{props.link3}</span>
                <span className="thq-body-small">{props.link4}</span>
                <span className="thq-body-small">{props.link5}</span>
              </div>
            </div>
            <div className="footer132-column2">
              <strong className="thq-body-large footer132-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer132-footer-links1">
                <span className="thq-body-small">{props.link6}</span>
                <span className="thq-body-small">{props.link7}</span>
                <span className="thq-body-small">{props.link8}</span>
                <span className="thq-body-small">{props.link9}</span>
                <span className="thq-body-small">{props.link10}</span>
              </div>
            </div>
            <div className="footer132-column3">
              <strong className="thq-body-large footer132-column3-title">
                {props.column3Title}
              </strong>
              <div className="footer132-footer-links2">
                <span className="thq-body-small">{props.link11}</span>
                <span className="thq-body-small">{props.link12}</span>
                <span className="thq-body-small">{props.link13}</span>
                <span className="thq-body-small">{props.link14}</span>
                <span className="thq-body-small">{props.link15}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thq-divider-horizontal"></div>
        <div className="footer132-credits">
          <div className="footer132-row">
            <div className="footer132-credits1">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
          <div className="footer132-social-links">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-small"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </div>
          <span className="footer132-content3 thq-body-small">
            {props.copyright}
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer132.defaultProps = {
  link2: '',
  link11: '',
  link13: 'Terms of Service',
  link20: 'Events',
  link22: 'Partnerships',
  link25: 'Sitemap',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link15: '',
  column2Title: 'Services',
  termsLink: '/terms',
  link17: 'Cookie Policy',
  link21: '',
  link19: 'Press',
  link16: 'Privacy Policy',
  link6: 'FAQs',
  link10: 'Services',
  link24: 'Accessibility',
  link9: '',
  link3: 'Our Approach',
  privacyLink: '/privacy',
  column3Title: 'Resources',
  link18: 'Blog',
  link1: 'Home',
  column4Title: 'Connect With Us',
  logoAlt: 'Financial Consulting Services',
  cookiesLink: '/cookies',
  link23: 'Careers',
  link7: 'About Us',
  column5Title: 'Legal',
  column1Title: '',
  link4: 'Testimonials',
  link8: '',
  copyright: '© 2023 Financial Consulting Services. All rights reserved.',
  link12: '',
  link5: 'Client Success Stories',
  link14: 'Contact Us',
}

Footer132.propTypes = {
  link2: PropTypes.string,
  link11: PropTypes.string,
  link13: PropTypes.string,
  link20: PropTypes.string,
  link22: PropTypes.string,
  link25: PropTypes.string,
  logoSrc: PropTypes.string,
  link15: PropTypes.string,
  column2Title: PropTypes.string,
  termsLink: PropTypes.string,
  link17: PropTypes.string,
  link21: PropTypes.string,
  link19: PropTypes.string,
  link16: PropTypes.string,
  link6: PropTypes.string,
  link10: PropTypes.string,
  link24: PropTypes.string,
  link9: PropTypes.string,
  link3: PropTypes.string,
  privacyLink: PropTypes.string,
  column3Title: PropTypes.string,
  link18: PropTypes.string,
  link1: PropTypes.string,
  column4Title: PropTypes.string,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.string,
  link23: PropTypes.string,
  link7: PropTypes.string,
  column5Title: PropTypes.string,
  column1Title: PropTypes.string,
  link4: PropTypes.string,
  link8: PropTypes.string,
  copyright: PropTypes.string,
  link12: PropTypes.string,
  link5: PropTypes.string,
  link14: PropTypes.string,
}

export default Footer132
