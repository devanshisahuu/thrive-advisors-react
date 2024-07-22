import React from 'react'

import PropTypes from 'prop-types'

import './hero94.css'

const Hero94 = (props) => {
  return (
    <div className="hero94-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero94-image"
      />
      <div className="hero94-container"></div>
      <div className="hero94-max-width thq-section-max-width">
        <div className="hero94-content">
          <h1 className="hero94-text thq-heading-1">{props.heading1}</h1>
          <p className="hero94-text1 thq-body-large">{props.content1}</p>
          <div className="hero94-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero94.defaultProps = {
  content1:
    'Our team of expert financial consultants is here to help you achieve your financial goals and secure your future.',
  heading1: 'Unlock Your Financial Potential',
  action1: 'Learn More',
  action2: 'Get in Touch',
  image1Alt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
}

Hero94.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero94
