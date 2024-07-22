import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-section-max-width thq-flex-column">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small">{props.slogan}</span>
          <h2 className="thq-heading-2 features10-text1">
            {props.sectionTitle}
          </h2>
          <p className="features10-text2 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="thq-body-small">{props.feature1Description}</span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature2Title}</h3>
            <span className="thq-body-small">{props.feature2Description}</span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature3Title}</h3>
            <span className="thq-body-small">{props.feature3Description}</span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <Link
            to="/services-overview"
            className="features10-button thq-button-outline"
          >
            <span className="thq-body-small">{props.secondaryAction}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1675797340963-ed683cecd2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Learn More',
  feature3ImageSrc:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529040274442-815019b0e4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Tailored financial plans to meet your unique goals and aspirations.',
  feature3ImageAlt: 'Retirement Planning Image',
  mainAction: 'Schedule a Consultation',
  feature3Title: 'Retirement Planning',
  heading: 'Our Services',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  feature2ImageAlt: 'Investment Management Image',
  feature1Title: 'Personalized Financial Planning',
  sectionDescription:
    'Discover the key features that set us apart from the rest.',
  feature2Description:
    'Strategic investment strategies to maximize returns and minimize risks.',
  feature2Title: 'Investment Management',
  sectionTitle: 'Our Features',
  slogan: 'Expertise You Can Trust',
}

Features10.propTypes = {
  feature2ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Title: PropTypes.string,
  heading: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features10
