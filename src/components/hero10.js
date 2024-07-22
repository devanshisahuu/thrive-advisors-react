import React from 'react'

import PropTypes from 'prop-types'

import './hero10.css'

const Hero10 = (props) => {
  return (
    <div className="hero10-container">
      <div className="hero10-column thq-section-padding">
        <div className="hero10-content">
          <h1 className="thq-heading-1 hero10-heading1">{props.heading1}</h1>
          <p className="thq-body-large hero10-content1">{props.content1}</p>
          <div className="hero10-actions">
            <button className="thq-button-filled hero10-button">
              <span>{props.action1}</span>
            </button>
            <button className="thq-button-outline hero10-button1">
              <span>{props.action2}</span>
            </button>
          </div>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero10-image1"
      />
    </div>
  )
}

Hero10.defaultProps = {
  action2: 'Schedule Consultation',
  action1: 'Learn More',
  heading1: 'Unlock Your Financial Potential',
  image1Alt: 'Financial Consulting Services',
  content1:
    'Achieve your financial goals with personalized financial planning and expert guidance.',
  image1Src:
    'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMDc1MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero10.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero10
