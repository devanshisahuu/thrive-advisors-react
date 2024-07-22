import React from 'react'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container1 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps21-actions">
              <button className="thq-button-animated thq-button-filled steps21-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps21-container2">
            <div className="steps21-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps21-text04 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps21-text05 thq-heading-3">01</label>
            </div>
            <div className="steps21-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps21-text07 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps21-text08 thq-heading-3">02</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps21-text10 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps21-text11 thq-heading-3">03</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps21-text13 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps21-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  step3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step3Title: 'Step 3',
  step1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step1Title: 'Step 1',
  step4Title: 'Step 4',
  step2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step2Title: 'Step 2',
  step4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
}

Steps21.propTypes = {
  step3Description: PropTypes.string,
  step3Title: PropTypes.string,
  step1Description: PropTypes.string,
  step1Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
  step2Title: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps21
