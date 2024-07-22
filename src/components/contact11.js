import React from 'react'

import PropTypes from 'prop-types'

import './contact11.css'

const Contact11 = (props) => {
  return (
    <div className="contact11-container thq-section-padding">
      <div className="contact11-max-width thq-section-max-width">
        <div className="contact11-section-title">
          <div className="contact11-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact11-content1 thq-flex-row">
          <div className="contact11-content2">
            <div className="contact11-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact11-contact-info">
                <h3 className="contact11-text2 thq-heading-3">Email</h3>
                <p className="thq-body-large">{props.content2}</p>
                <span className="thq-body-small">{props.email}</span>
              </div>
            </div>
            <div className="contact11-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact11-contact-info1">
                <h3 className="contact11-text4 thq-heading-3">Phone</h3>
                <p className="thq-body-large">{props.content3}</p>
                <span className="thq-body-small">{props.phone1}</span>
              </div>
            </div>
            <div className="contact11-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact11-contact-info2">
                <h3 className="contact11-text7 thq-heading-3">Office</h3>
                <p className="thq-body-large">{props.content5}</p>
                <span className="thq-body-small">{props.address1}</span>
              </div>
            </div>
          </div>
          <iframe
            src={props.location1GoogleMap}
            title="Map"
            className="contact11-iframe thq-img-ratio-16-9"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Contact11.defaultProps = {
  phone1: '+1 (555) 000-0000',
  address1: '456 Test Ave, Bucharest',
  content2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  email: 'info@financialconsulting.com',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Contact us',
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
}

Contact11.propTypes = {
  phone1: PropTypes.string,
  address1: PropTypes.string,
  content2: PropTypes.string,
  email: PropTypes.string,
  content3: PropTypes.string,
  content5: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  location1GoogleMap: PropTypes.string,
}

export default Contact11
