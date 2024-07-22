import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps2-text04 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps2-text07 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps2-text10 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps2-text13 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: 'Retirement Planning',
  step1Description:
    'Schedule a meeting with one of our financial consultants to discuss your current financial situation and goals.',
  step3Title: 'Investment Management',
  step2Title: 'Personalized Financial Planning',
  step3Description:
    'Get expert advice on investment opportunities and strategies to grow your wealth effectively.',
  step4Description:
    'Plan for a secure and comfortable retirement with our specialized retirement planning services.',
  step2Description:
    'Receive a customized financial plan tailored to your specific needs and objectives.',
  step1Title: 'Initial Consultation',
}

Steps2.propTypes = {
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  step3Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Description: PropTypes.string,
  step4Description: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
}

export default Steps2
