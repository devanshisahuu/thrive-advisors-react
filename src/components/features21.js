import React from 'react'

import PropTypes from 'prop-types'

import './features21.css'

const Features21 = (props) => {
  return (
    <div className="features21-layout302 thq-section-padding">
      <div className="features21-max-width thq-section-max-width">
        <div className="features21-section-title thq-flex-column">
          <span className="thq-body-small">{props.slogan}</span>
          <h2 className="thq-heading-2">{props.sectionTitle}</h2>
          <p className="thq-body-large">{props.sectionDescription}</p>
        </div>
        <div className="features21-content">
          <div className="thq-grid-5">
            <div className="features21-feature1 thq-flex-column">
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
            <div className="features21-feature2 thq-flex-column">
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
            <div className="features21-feature3 thq-flex-column">
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
            <div className="features21-feature4 thq-flex-column">
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
            <div className="features21-feature5 thq-flex-column">
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
          <button className="features21-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <div className="features21-actions"></div>
        </div>
      </div>
    </div>
  )
}

Features21.defaultProps = {
  feature4ImageAlt: 'image 4',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529040274442-815019b0e4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=200',
  feature2ImageAlt: 'Investment Management Image',
  feature5Title: 'Engaging Content for Various Topics',
  feature5ImageAlt: 'image',
  text: 'Link',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  slogan: 'Slogan',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  linkText: 'https://example.com',
  feature2Title: 'Investment Management',
  mainAction: 'Main action',
  secondaryAction: 'Secondary action',
  feature1Title: 'Personalized Financial Planning',
  sectionTitle: 'Our Features',
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description:
    'Strategic investment strategies to maximize returns and minimize risks.',
  feature3Title: 'Retirement Planning',
  feature3ImageSrc:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=200',
  feature4ImageSrc: '',
  feature1Description:
    'Tailored financial plans to meet your unique goals and aspirations.',
  feature3ImageAlt: 'Retirement Planning Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1675797340963-ed683cecd2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=200',
}

Features21.propTypes = {
  feature4ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature5Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  text: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  slogan: PropTypes.string,
  feature4Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  linkText: PropTypes.string,
  feature2Title: PropTypes.string,
  mainAction: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
}

export default Features21
