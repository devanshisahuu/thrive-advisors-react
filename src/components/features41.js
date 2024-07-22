import React from 'react'

import PropTypes from 'prop-types'

import './features41.css'

const Features41 = (props) => {
  return (
    <div className="features41-layout301 thq-section-padding">
      <div className="features41-max-width thq-section-max-width">
        <h2 className="features41-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features41-row thq-grid-auto-300">
          <div className="features41-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content thq-flex-column">
              <div className="features41-section-title thq-flex-column">
                <h3 className="features41-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features41-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="features41-action thq-flex-row">
                <button className="features41-button thq-button-flat">
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="features41-icon thq-icon-small"
                  >
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features41-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content1 thq-flex-column">
              <div className="features41-section-title1 thq-flex-column">
                <strong className="features41-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="features41-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="features41-action1 thq-flex-row">
                <button className="features41-button1 thq-button-flat">
                  <span className="thq-body-small">{props.feature2Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features41-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-content2 thq-flex-column">
              <div className="features41-section-title2 thq-flex-column">
                <strong className="features41-title3 thq-heading-3">
                  {props.feature3Title}
                </strong>
                <span className="features41-description3 thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
              <div className="features41-action2 thq-flex-row">
                <button className="features41-button2 thq-button-flat">
                  <span className="thq-body-small">{props.feature3Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features41.defaultProps = {
  feature2Title: 'Investment Management',
  feature3ImageAlt: 'Retirement Planning Image',
  feature4ImageAlt: 'Financial Security Solutions Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1535745716378-2435fe308eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNDg2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Financial Planning',
  feature3Button: 'Get Started',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1641931186542-a1d713124e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNDg3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Button: 'Explore Services',
  feature4Title: 'Financial Security Solutions',
  feature1Button: 'Learn More',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNDg2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Comprehensive strategies to secure your retirement future and enjoy peace of mind.',
  feature2Description:
    'Expert management of your investments to maximize returns and minimize risks.',
  feature4Description:
    'Customized solutions to protect your assets and ensure financial stability.',
  sectionTitle: 'Key Features',
  feature1Description:
    'Tailored financial plans to meet your unique goals and needs.',
  feature3Title: 'Retirement Planning',
  feature2ImageAlt: 'Investment Management Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNDg3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Button: 'Contact Us',
  feature1ImageAlt: 'Personalized Financial Planning Image',
}

Features41.propTypes = {
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Button: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Button: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1Button: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Button: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features41
