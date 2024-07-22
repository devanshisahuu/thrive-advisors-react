import React from 'react'

import PropTypes from 'prop-types'

import './features231.css'

const Features231 = (props) => {
  return (
    <div className="features231-layout349 thq-section-padding">
      <div className="features231-max-width thq-section-max-width">
        <div className="features231-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features231-text01 thq-body-small">
            {props.content1}
          </span>
          <button className="thq-button-filled features231-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features231-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features231-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features231-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features231-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features231-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features231-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features231-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features231-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features231-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features231-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features231-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features231-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features231-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features231-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features231-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features231-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features231-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features231-text13 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features231.defaultProps = {
  feature3ImageAlt: 'image',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  heading1: 'Discover',
  feature6ImageAlt: 'Feature 1',
  feature5ImageAlt: 'image',
  feature2ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature5ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1Title: 'Feature #1',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature5Title: 'Feature 5',
  feature2Title: 'Feature #2',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature6ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature3ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature2ImageAlt: 'image',
  feature4ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action1: 'Main action',
  feature3Title: 'Feature #3',
  feature1ImageAlt: 'image',
  feature6Title: 'Feature 6',
  feature4ImageAlt: 'image',
  feature4Title: 'Feature 4',
}

Features231.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature6Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature5Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  action1: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature6Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
}

export default Features231
