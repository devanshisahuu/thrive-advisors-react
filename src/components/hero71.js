import React from 'react'

import PropTypes from 'prop-types'

import './hero71.css'

const Hero71 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero71-max-width thq-section-max-width">
        <div className="hero71-content">
          <h1 className="hero71-text thq-heading-1">{props.heading1}</h1>
          <p className="hero71-text1 thq-body-large">{props.content1}</p>
          <div className="hero71-actions">
            <div className="hero71-container">
              <button className="thq-button-filled hero71-button">
                <span className="hero71-text2 thq-body-small">
                  {props.action1}
                </span>
              </button>
            </div>
            <div className="hero71-container1">
              <button className="thq-button-outline hero71-button1">
                <span className="hero71-text3 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero71.defaultProps = {
  action1: 'Learn More',
  heading1: 'Unlock Your Financial Potential',
  content1:
    'Our team of expert financial consultants is here to help you achieve your financial goals and secure your future.',
  action2: 'Get in Touch',
  rootClassName: '',
}

Hero71.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero71
