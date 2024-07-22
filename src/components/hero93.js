import React from 'react'

import PropTypes from 'prop-types'

import './hero93.css'

const Hero93 = (props) => {
  return (
    <div className="hero93-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero93-image"
      />
      <div className="hero93-container"></div>
      <div className="hero93-max-width thq-section-max-width">
        <div className="hero93-content">
          <h1 className="hero93-text thq-heading-1">{props.heading1}</h1>
          <div className="hero93-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero93.defaultProps = {
  image1Alt: 'image',
  action1: 'Learn More',
  content1:
    'Our team of expert financial consultants is here to help you achieve your financial goals and secure your future.',
  action2: 'Get in Touch',
  heading1: 'Unlock Your Financial Potential',
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
}

Hero93.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero93
