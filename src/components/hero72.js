import React from 'react'

import PropTypes from 'prop-types'

import './hero72.css'

const Hero72 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero72-max-width thq-section-max-width">
        <div className="hero72-content">
          <h1 className="hero72-text thq-heading-1">{props.heading1}</h1>
          <p className="hero72-text1 thq-body-large">{props.content1}</p>
        </div>
      </div>
    </div>
  )
}

Hero72.defaultProps = {
  action2: 'Get in Touch',
  action1: 'Learn More',
  content1:
    'Our team of expert financial consultants is here to help you achieve your financial goals and secure your future.',
  heading1: 'Unlock Your Financial Potential',
  rootClassName: '',
}

Hero72.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero72
