import React from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  return (
    <div className="features2-layout302 thq-section-padding">
      <div className="features2-max-width thq-section-max-width">
        <div className="features2-section-title thq-flex-column">
          <h2 className="features2-text thq-heading-2">{props.sectionTitle}</h2>
          <p className="features2-text1 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features2-content">
          <div className="thq-grid-5">
            <div className="features2-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features2-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features2-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
            <div className="features2-feature4 thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature4Title}</h3>
                <span className="thq-body-small">
                  {props.feature4Description}
                </span>
              </div>
            </div>
            <div className="features2-feature5 thq-flex-column">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature5Title}</h3>
                <span className="thq-body-small">
                  {props.feature5Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  sectionTitle: 'Key Features',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1565514021421-989bc576e7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMTk1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Financial Security Solutions Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMTk1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Investment Management',
  feature2ImageAlt: 'Retirement Planning Image',
  feature4ImageAlt: 'Consultation Scheduling Image',
  feature2Title: 'Retirement Planning',
  feature1ImageAlt: 'Investment Management Image',
  feature5ImageAlt: 'Personalized Financial Plans Image',
  sectionDescription:
    'Explore the key features of our financial consulting services.',
  feature4Title: 'Consultation Scheduling',
  feature2Description:
    'Plan for a secure and comfortable retirement with our tailored retirement planning services.',
  feature1Description:
    'Our experts will help you create a personalized investment strategy to grow your wealth.',
  slogan: 'Slogan',
  feature5Description:
    'Receive customized financial plans that align with your goals and aspirations.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1625212001538-17dd918c6cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMTk1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Title: 'Personalized Financial Plans',
  mainAction: 'Main action',
  feature4Description:
    'Easily schedule consultations with our team of financial experts to kickstart your financial journey.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1514782831304-632d84503f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMTk1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Secondary action',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwMTk1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Financial Security Solutions',
  feature3Description:
    'Safeguard your financial future with our comprehensive security solutions.',
}

Features2.propTypes = {
  sectionTitle: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature4Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  slogan: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  mainAction: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features2
