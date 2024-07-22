import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features48.css'

const Features48 = (props) => {
  return (
    <div className="features48-layout301 thq-section-padding">
      <div className="features48-max-width thq-section-max-width">
        <h2 className="features48-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features48-row thq-grid-auto-300">
          <div className="features48-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features48-content thq-flex-column">
              <div className="features48-section-title thq-flex-column">
                <h3 className="features48-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
              </div>
              <div className="features48-action thq-flex-row">
                <Link
                  to="/capital-markets"
                  className="features48-button thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="features48-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features48-content1 thq-flex-column">
              <div className="features48-section-title1 thq-flex-column">
                <strong className="features48-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
              </div>
              <div className="features48-action1 thq-flex-row">
                <Link
                  to="/finance-services"
                  className="features48-button1 thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature2Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="features48-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features48-content2 thq-flex-column">
              <div className="features48-section-title2 thq-flex-column">
                <strong className="features48-title3 thq-heading-3">
                  {props.feature3Title}
                </strong>
              </div>
              <div className="features48-action2 thq-flex-row">
                <Link
                  to="/oil-and-gas"
                  className="features48-button2 thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature3Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="features48-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features48-content3 thq-flex-column">
              <div className="features48-section-title3 thq-flex-column">
                <strong className="features48-title4 thq-heading-3">
                  {props.feature4Title}
                </strong>
              </div>
              <div className="features48-action3 thq-flex-row">
                <Link
                  to="/taxation"
                  className="features48-button3 thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature4Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features48.defaultProps = {
  feature2ImageAlt: 'image2',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature4Button: 'Button',
  feature1ImageAlt: 'image1',
  feature1Button: 'Button',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Button: 'Button',
  feature3Button: 'Button',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4ImageAlt: 'image 4',
  sectionTitle: 'Discover the Key Features',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3Title: 'Discover the Magic of Lorem Ipsum Text Generation',
}

Features48.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Button: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Button: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Button: PropTypes.string,
  feature3Button: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features48
