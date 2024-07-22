import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="thq-heading-2">FAQs</span>
              </fragment>
            )}
          </h2>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p>
              {props.faq1Question ?? (
                <fragment>
                  <span className="faq1-text09 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="faq1-list-item2">
            <p>
              {props.faq2Question ?? (
                <fragment>
                  <span className="faq1-text07 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="faq1-list-item3">
            <p>
              {props.faq3Question ?? (
                <fragment>
                  <span className="faq1-text14 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="faq1-list-item4">
            <p>
              {props.faq4Question ?? (
                <fragment>
                  <span className="faq1-text04 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
          </div>
          <div className="faq1-list-item5">
            <p>
              {props.faq5Question ?? (
                <fragment>
                  <span className="faq1-text15 thq-body-large">
                    Frequently Asked Questions
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Answer: undefined,
  action1: undefined,
  faq5Question1: undefined,
  faq4Question: undefined,
  heading1: undefined,
  heading2: undefined,
  faq2Question: undefined,
  faq1Answer: undefined,
  faq1Question: undefined,
  faq3Answer: undefined,
  faq5Answer: undefined,
  faq2Answer: undefined,
  content1: undefined,
  faq3Question: undefined,
  faq5Question: undefined,
  content2: undefined,
}

FAQ1.propTypes = {
  faq4Answer: PropTypes.element,
  action1: PropTypes.element,
  faq5Question1: PropTypes.element,
  faq4Question: PropTypes.element,
  heading1: PropTypes.element,
  heading2: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq1Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq2Answer: PropTypes.element,
  content1: PropTypes.element,
  faq3Question: PropTypes.element,
  faq5Question: PropTypes.element,
  content2: PropTypes.element,
}

export default FAQ1
