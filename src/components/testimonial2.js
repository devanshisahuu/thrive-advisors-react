import React from 'react'

import PropTypes from 'prop-types'

import './testimonial2.css'

const Testimonial2 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial2-max-width thq-section-max-width">
        <div className="testimonial2-stars">
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <p className="testimonial2-text thq-body-large">{props.review1}</p>
        <div className="testimonial2-avatar">
          <img
            alt={props.author1Alt}
            src={props.author1Src}
            className="testimonial2-avatar-image thq-img-round thq-img-ratio-1-1"
          />
          <div className="testimonial2-avatar-content">
            <span className="testimonial2-text1 thq-body-small">
              {props.author1Name}
            </span>
            <span className="testimonial2-text2 thq-body-small">
              {props.author1Position}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial2.defaultProps = {
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company1LogoAlt: 'Company Logo',
  author1Src:
    'https://images.unsplash.com/photo-1633239331793-32bb70b47e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNjQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Smith',
  review1:
    'I have been a client for over 10 years and the team at this financial consulting service has helped me navigate through various financial decisions with ease. Their personalized approach and attention to detail have truly made a difference in securing my financial future.',
  author1Alt: 'John Smith',
  author1Position: 'Retired Engineer',
}

Testimonial2.propTypes = {
  company1LogoSrc: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.string,
}

export default Testimonial2
