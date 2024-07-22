import React from 'react'

import PropTypes from 'prop-types'

import './hero92.css'

const Hero92 = (props) => {
  return (
    <div className="hero92-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero92-image"
      />
      <div className="hero92-container"></div>
      <div className="hero92-max-width thq-section-max-width">
        <div className="hero92-content">
          <h1 className="hero92-text thq-heading-1">{props.heading1}</h1>
          <p className="hero92-text1 thq-body-large">{props.content1}</p>
          <div className="hero92-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero92.defaultProps = {
  action1: 'Learn More',
  image1Alt: 'Financial Consulting Services',
  content1:
    'Achieve your financial goals with personalized financial planning and expert guidance.',
  action2: 'Schedule Consultation',
  image1Src:
    'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMDc1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Unlock Your Financial Potential',
}

Hero92.propTypes = {
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero92
