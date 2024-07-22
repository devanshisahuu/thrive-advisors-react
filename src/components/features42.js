import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features42.css'

const Features42 = (props) => {
  return (
    <div className="features42-layout301 thq-section-padding">
      <div className="features42-max-width thq-section-max-width">
        <h2 className="features42-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features42-row thq-grid-auto-300">
          <div className="features42-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content thq-flex-column">
              <div className="features42-section-title thq-flex-column">
                <h3 className="features42-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features42-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="features42-action thq-flex-row">
                <Link
                  to="/financial-planning"
                  className="features42-button thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="features42-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content1 thq-flex-column">
              <div className="features42-section-title1 thq-flex-column">
                <strong className="features42-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="features42-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="features42-action1 thq-flex-row">
                <Link
                  to="/financial-accounting"
                  className="features42-button1 thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature2Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="features42-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-content2 thq-flex-column">
              <div className="features42-section-title2 thq-flex-column">
                <strong className="features42-title3 thq-heading-3">
                  {props.feature3Title}
                </strong>
                <span className="features42-description3 thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
              <div className="features42-action2 thq-flex-row">
                <Link
                  to="/bookkeeping-payroll-and-bpo"
                  className="features42-button2 thq-button-flat"
                >
                  <span className="thq-body-small">{props.feature3Button}</span>
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

Features42.defaultProps = {
  feature4Button: 'Button',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  feature4ImageAlt: 'image 4',
  feature2Description:
    'Strategic investment strategies to maximize returns and minimize risks.',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  feature1Description:
    'Tailored financial plans to meet your unique goals and aspirations.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1675797340963-ed683cecd2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Button: 'Button',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Title: 'Personalized Financial Planning',
  feature2Title: 'Investment Management',
  feature3ImageAlt: 'Retirement Planning Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529040274442-815019b0e4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2ImageAlt: 'Investment Management Image',
  feature3ImageSrc:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature1Button: 'Button',
  feature2Button: 'Button',
  feature3Title: 'Retirement Planning',
  sectionTitle: 'Our Features',
}

Features42.propTypes = {
  feature4Button: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Button: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1Button: PropTypes.string,
  feature2Button: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
}

export default Features42
