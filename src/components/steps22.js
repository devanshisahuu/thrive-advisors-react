import React from 'react'

import PropTypes from 'prop-types'

import './steps22.css'

const Steps22 = (props) => {
  return (
    <div className="steps22-container thq-section-padding">
      <div className="steps22-max-width thq-section-max-width">
        <div className="steps22-container1 thq-grid-2">
          <div className="steps22-section-header">
            <h2 className="thq-heading-2">{props.text1}</h2>
            <p className="thq-body-large">{props.text}</p>
            <div className="steps22-actions">
              <a
                href="#contact-form-2-check"
                className="steps22-button thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">{props.text2}</span>
              </a>
            </div>
          </div>
          <div className="steps22-container2">
            <div className="steps22-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps22-text04 thq-body-small">
                {props.step1Description}
              </span>
            </div>
            <div className="steps22-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps22-text06 thq-body-small">
                {props.step2Description}
              </span>
            </div>
            <div className="steps22-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps22-text08 thq-body-small">
                {props.step3Description}
              </span>
            </div>
            <div className="steps22-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps22-text10 thq-body-small">
                {props.step4Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps22.defaultProps = {
  step4Title: 'Step 4',
  text2: 'Main action',
  step3Title: 'Step 3',
  text1: 'Discover the Power of Our Products',
  step2Title: 'Step 2',
  step1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step1Title: 'Step 1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  step4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
}

Steps22.propTypes = {
  step4Title: PropTypes.string,
  text2: PropTypes.string,
  step3Title: PropTypes.string,
  text1: PropTypes.string,
  step2Title: PropTypes.string,
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step1Title: PropTypes.string,
  text: PropTypes.string,
  step4Description: PropTypes.string,
  step2Description: PropTypes.string,
}

export default Steps22
