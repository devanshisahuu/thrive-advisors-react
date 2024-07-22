import React from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1 className="thq-heading-1 hero1-heading1">{props.heading1}</h1>
              <p className="thq-body-large hero1-content1">{props.content1}</p>
            </div>
            <div className="hero1-actions"></div>
          </div>
          <div className="hero1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  rootClassName: '',
  content1:
    'Our team of expert financial consultants is here to help you achieve your financial goals and secure your future.',
  action1: 'Learn More',
  image1Alt: 'Financial Consulting Expertise',
  action2: 'Get in Touch',
  heading1: 'Unlock Your Financial Potential',
  image1Src:
    'https://images.unsplash.com/photo-1700760933910-d3c03aa18b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero1.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero1
