import React from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div
      className={`hero91-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text1 thq-body-large">{props.content1}</p>
          <div className="hero91-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1579389082978-de4aece6f446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4OTc4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  action1: 'Learn More',
  image1Alt: 'Financial Consulting Services',
  action2: 'Get Started',
  heading1: 'Personalized Financial Consulting Services',
  content1:
    'Let our expert team help you achieve your financial goals and secure your future',
}

Hero91.propTypes = {
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero91
