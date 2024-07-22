import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  sectionTitle: 'Our Features',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529040274442-815019b0e4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Financial Planning',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  slogan: 'Expertise You Can Trust',
  feature1Description:
    'Tailored financial plans to meet your unique goals and aspirations.',
  feature3ImageAlt: 'Retirement Planning Image',
  feature2ImageAlt: 'Investment Management Image',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  sectionDescription:
    'Discover the key features that set us apart from the rest.',
  feature3Title: 'Retirement Planning',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1675797340963-ed683cecd2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Investment Management',
  feature3ImageSrc:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Learn More',
  feature2Description:
    'Strategic investment strategies to maximize returns and minimize risks.',
  mainAction: 'Schedule a Consultation',
}

Features1.propTypes = {
  sectionTitle: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2Description: PropTypes.string,
  mainAction: PropTypes.string,
}

export default Features1
