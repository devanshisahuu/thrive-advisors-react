import React from 'react'

import PropTypes from 'prop-types'

import './features232.css'

const Features232 = (props) => {
  return (
    <div className="features232-layout349 thq-section-padding">
      <div className="features232-max-width thq-section-max-width">
        <div className="features232-container">
          <h2 className="features232-text thq-heading-2">{props.heading1}</h2>
          <span className="features232-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-3">
          <div className="features232-container2 thq-card">
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features232-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features232-container3 thq-card">
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features232-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features232-container4 thq-card">
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features232-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features232-container5 thq-card">
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features232-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features232-container6 thq-card">
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features232-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features232.defaultProps = {
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action1: 'Main action',
  feature3ImageAlt: 'image',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature6ImageAlt: 'Feature 1',
  feature2ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature1Title: 'Feature #1',
  feature3Title: 'Feature #3',
  feature5ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature5Title: 'Feature 5',
  feature6ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature3ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature4Title: 'Feature 4',
  feature4ImageAlt: 'image',
  feature2Title: 'Feature #2',
  feature2ImageAlt: 'image',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1ImageAlt: 'image',
  heading1: 'Discover',
  feature5ImageAlt: 'image',
  feature6Title: 'Feature 6',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
}

Features232.propTypes = {
  feature4Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  action1: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature6Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature6Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature5Description: PropTypes.string,
}

export default Features232
