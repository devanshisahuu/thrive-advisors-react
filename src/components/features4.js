import React from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content thq-flex-column">
              <div className="features4-section-title thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features4-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="features4-action thq-flex-row">
                <button className="features4-button thq-button-flat">
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="features4-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="features4-action1 thq-flex-row">
                <button className="features4-button1 thq-button-flat">
                  <span className="thq-body-small">{props.feature2Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature5Title}
                </strong>
                <span className="features4-description3 thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
              <div className="features4-action2 thq-flex-row">
                <button className="features4-button2 thq-button-flat">
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

Features4.defaultProps = {
  feature4Button: 'Contact Us',
  feature2Button: 'Explore Options',
  feature3ImageAlt: 'Retirement Planning Image',
  feature4Title: 'BPO Services',
  feature3Button: 'Start Planning',
  feature1Description:
    'Tailored financial plans to suit your unique goals and circumstances.',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  sectionTitle: 'Our Features',
  feature1Title: 'Personalized Financial Planning',
  feature2ImageAlt: 'Investment Management Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1705948734805-9dff79aaae03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY5MDE0Mnw&ixlib=rb-4.0.3&q=80&w=600',
  feature2Title: 'Investment Management',
  feature1Button: 'Learn More',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1470049384172-927891aad5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY5MDE0MHw&ixlib=rb-4.0.3&q=80&w=600',
  feature5Title: 'Retirement Planning',
  feature4ImageAlt: 'Financial Consultation Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY5MDE0MXw&ixlib=rb-4.0.3&q=80&w=600',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1632390026849-73d06897ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY5MDE0MHw&ixlib=rb-4.0.3&q=80&w=1300',
  feature4Description:
    'Professional consultations to address your financial concerns and queries.',
  feature2Description:
    'Expert guidance on investment strategies to grow your wealth effectively.',
}

Features4.propTypes = {
  feature4Button: PropTypes.string,
  feature2Button: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3Button: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Button: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features4
