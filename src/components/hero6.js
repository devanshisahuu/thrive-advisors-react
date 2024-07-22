import React from 'react'

import PropTypes from 'prop-types'

import './hero6.css'

const Hero6 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero6-max-width thq-flex-row thq-section-max-width">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero6-hero-image thq-img-ratio-4-3"
        />
        <div className="hero6-column">
          <div className="hero6-content">
            <h1 className="thq-heading-1 hero6-text">{props.heading1}</h1>
            <p className="thq-body-large hero6-text1">{props.content1}</p>
            <div className="hero6-actions">
              <button className="thq-button-filled hero6-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero6-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero6.defaultProps = {
  content1:
    'Achieve your financial goals with personalized financial planning and expert guidance.',
  image1Alt: 'Financial Consulting Services',
  image1Src:
    'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMDc1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Unlock Your Financial Potential',
  action2: 'Schedule Consultation',
  action1: 'Learn More',
}

Hero6.propTypes = {
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero6
