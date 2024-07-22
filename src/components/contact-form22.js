import React from 'react'

import PropTypes from 'prop-types'

import './contact-form22.css'

const ContactForm22 = (props) => {
  return (
    <div className="contact-form22-contact5 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form22-max-width">
        <div className="thq-flex-column contact-form22-content">
          <div className="contact-form22-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-large">{props.content1}</span>
          </div>
          <div className="contact-form22-contact-info thq-flex-column">
            <div className="contact-form22-row thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">{props.email}</span>
            </div>
            <div className="contact-form22-row1 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">{props.phone}</span>
            </div>
            <div className="contact-form22-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="thq-body-small">{props.adress}</span>
            </div>
          </div>
        </div>
        <form className="contact-form22-form">
          <div className="contact-form22-input">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              className="contact-form22-text-input thq-input"
            />
          </div>
          <div className="contact-form22-input1">
            <label htmlFor="contact-form-2-email" className="thq-body-small">
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              placeholder="Email"
              className="contact-form22-text-input1 thq-input"
            />
          </div>
          <div className="contact-form22-input2">
            <label htmlFor="contact-form-2-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              className="contact-form22-textarea thq-input"
            ></textarea>
          </div>
          <div className="contact-form22-checkbox">
            <input
              type="checkbox"
              id="contact-form-2-check"
              checked="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-2-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button type="submit" className="thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm22.defaultProps = {
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  content2: 'Connecting you with the world, one teleport at a time',
  email: 'Your Email',
  phone: '+1 (555) 000-0000',
  adress: '789 Test St, Bucharest',
  heading1: 'Contact us',
  action: 'Submit',
}

ContactForm22.propTypes = {
  content1: PropTypes.string,
  content2: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  adress: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm22
