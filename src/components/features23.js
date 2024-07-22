import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout302 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-section-title thq-flex-column">
          <h2 className="thq-heading-2">{props.sectionTitle}</h2>
        </div>
        <div className="features23-content">
          <div className="thq-grid-5">
            <div className="features23-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
              </div>
            </div>
            <div className="features23-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
              </div>
            </div>
            <div className="features23-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
              </div>
            </div>
            <div className="features23-feature4 thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature4Title}</h3>
              </div>
            </div>
            <div className="features23-feature5 thq-flex-column">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature5Title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature3Title: 'Engaging Content for Various Topics',
  feature2ImageAlt: 'image',
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  mainAction: 'Main action',
  feature4Title: 'Engaging Content for Various Topics',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1Title: 'Engaging Content for Various Topics',
  feature4ImageAlt: 'image',
  feature2Title: 'Engaging Content for Various Topics',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  secondaryAction: 'Secondary action',
  feature5Title: 'Engaging Content for Various Topics',
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionTitle: 'Discover the Key Features',
  feature1ImageAlt: 'image',
  feature3ImageAlt: 'image',
  feature5ImageAlt: 'image',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  slogan: 'Slogan',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
}

Features23.propTypes = {
  feature3Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature4Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature5Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  slogan: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4Description: PropTypes.string,
}

export default Features23
