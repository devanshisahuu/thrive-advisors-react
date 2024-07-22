import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout302 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-section-title thq-flex-column">
          <h2 className="thq-heading-2">{props.sectionTitle}</h2>
        </div>
        <div className="features22-content">
          <div className="thq-grid-5">
            <div className="features22-feature1 thq-flex-column">
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
            <div className="features22-feature2 thq-flex-column">
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
            <div className="features22-feature3 thq-flex-column">
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
            <div className="features22-feature4 thq-flex-column">
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
            <div className="features22-feature5 thq-flex-column">
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

Features22.defaultProps = {
  secondaryAction: 'Secondary action',
  feature3ImageAlt: 'Retirement Planning Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2ImageAlt: 'Investment Management Image',
  feature1Title: 'Personalized Financial Planning',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature3ImageSrc:
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: 'Our Features',
  feature2Description:
    'Strategic investment strategies to maximize returns and minimize risks.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1675797340963-ed683cecd2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Comprehensive retirement planning services to secure your future.',
  feature2Title: 'Investment Management',
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  mainAction: 'Main action',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1529040274442-815019b0e4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzY4NjE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageAlt: 'image',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3Title: 'Retirement Planning',
  feature4ImageAlt: 'image 4',
  feature1Description:
    'Tailored financial plans to meet your unique goals and aspirations.',
  slogan: 'Slogan',
  feature1ImageAlt: 'Personalized Financial Planning Image',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature5Title: 'Engaging Content for Various Topics',
}

Features22.propTypes = {
  secondaryAction: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature4Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  feature5Title: PropTypes.string,
}

export default Features22
