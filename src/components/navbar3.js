import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar3.css'

const Navbar3 = (props) => {
  return (
    <header className={`navbar3-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar3-navbar-interactive">
        <Link to="/" className="navbar3-navlink">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar3-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar3-desktop-menu">
          <nav className="navbar3-links">
            <Link
              to="/services-overview"
              className="navbar3-link2 thq-body-small thq-link"
            >
              {props.link2}
            </Link>
            <Link
              to="/industries-overview"
              className="navbar3-link3 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
            <Link to="/about" className="navbar3-link4 thq-body-small thq-link">
              {props.link4}
            </Link>
          </nav>
          <div className="navbar3-icon-group">
            <svg viewBox="0 0 877.7142857142857 1024" className="navbar3-icon">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <a href="#contact-form-2-check" className="navbar3-link">
              <svg viewBox="0 0 1024 1024" className="navbar3-icon02">
                <path d="M804.571 438.857c0 161.714-180 292.571-402.286 292.571-34.857 0-68.571-3.429-100.571-9.143-47.429 33.714-101.143 58.286-158.857 73.143-15.429 4-32 6.857-49.143 9.143h-1.714c-8.571 0-16.571-6.857-18.286-16.571v0c-2.286-10.857 5.143-17.714 11.429-25.143 22.286-25.143 47.429-47.429 66.857-94.857-92.571-53.714-152-136.571-152-229.143 0-161.714 180-292.571 402.286-292.571s402.286 130.857 402.286 292.571zM1024 585.143c0 93.143-59.429 175.429-152 229.143 19.429 47.429 44.571 69.714 66.857 94.857 6.286 7.429 13.714 14.286 11.429 25.143v0c-2.286 10.286-10.857 17.714-20 16.571-17.143-2.286-33.714-5.143-49.143-9.143-57.714-14.857-111.429-39.429-158.857-73.143-32 5.714-65.714 9.143-100.571 9.143-103.429 0-198.286-28.571-269.714-75.429 16.571 1.143 33.714 2.286 50.286 2.286 122.857 0 238.857-35.429 327.429-99.429 95.429-69.714 148-164 148-266.286 0-29.714-4.571-58.857-13.143-86.857 96.571 53.143 159.429 137.714 159.429 233.143z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar3-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar3-icon04">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar3-mobile-menu">
          <div className="navbar3-nav">
            <div className="navbar3-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar3-logo"
              />
              <div data-thq="thq-close-menu" className="navbar3-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar3-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar3-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar3-icon-group1">
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
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar3.defaultProps = {
  link4: 'Contact',
  link5: 'Link5',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1: 'Home',
  link2: 'Services',
  rootClassName: '',
  link3: 'About Us',
  logoAlt: 'Financial Consulting Logo',
}

Navbar3.propTypes = {
  link4: PropTypes.string,
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Navbar3
