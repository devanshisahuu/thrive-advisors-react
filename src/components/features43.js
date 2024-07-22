import React from 'react'

import PropTypes from 'prop-types'

import './features43.css'

const Features43 = (props) => {
  return (
    <div className="features43-layout301 thq-section-padding">
      <div className="features43-max-width thq-section-max-width">
        <h2 className="features43-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features43-row thq-grid-auto-300">
          <div className="features43-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features43-content thq-flex-column">
              <div className="features43-section-title thq-flex-column">
                <h3 className="features43-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features43-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="features43-action thq-flex-row">
                <button className="features43-button thq-button-flat">
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features43-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features43-content1 thq-flex-column">
              <div className="features43-section-title1 thq-flex-column">
                <strong className="features43-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="features43-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="features43-action1 thq-flex-row">
                <button className="features43-button1 thq-button-flat">
                  <span className="thq-body-small">{props.feature2Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features43-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features43-content2 thq-flex-column">
              <div className="features43-section-title2 thq-flex-column">
                <strong className="features43-title3 thq-heading-3">
                  {props.feature3Title}
                </strong>
                <span className="features43-description3 thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
              <div className="features43-action2 thq-flex-row">
                <button className="features43-button2 thq-button-flat">
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

Features43.defaultProps = {
  feature2Button: 'Button',
  feature1ImageAlt: 'image1',
  feature3Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature2ImageAlt: 'image2',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  sectionTitle: 'Discover the Key Features',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature4Button: 'Button',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Button: 'Button',
  feature2Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature4ImageAlt: 'image 4',
  feature3Button: 'Button',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature1Title: 'Discover the Magic of Lorem Ipsum Text Generation',
}

Features43.propTypes = {
  feature2Button: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Button: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Button: PropTypes.string,
  feature2Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Button: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features43
