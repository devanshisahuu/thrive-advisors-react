import React from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p className="content-list1-content1 thq-body-small">
                {props.content1}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading2}</h3>
              <p className="thq-body-small">{props.content2}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading3}</h3>
              <p className="thq-body-small">{props.content3}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading4}</h3>
              <p className="thq-body-small">{props.content4}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading5}</h3>
              <p className="thq-body-small">{props.content5}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading6}</h3>
              <p className="thq-body-small">{props.content6}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content5:
    'Ensure a stable financial future for yourself and your loved ones with our comprehensive financial security solutions.',
  heading5: 'Financial Security',
  heading6: 'Unlock Your Financial Potential',
  heading2: 'Investment Management',
  content3:
    'Plan for a comfortable retirement with our retirement planning services designed to maximize your savings and investments.',
  heading1: 'Personalized Financial Planning',
  content6:
    'Let our experienced team guide you towards unlocking your full financial potential and building the future you desire.',
  heading4: 'Consultation',
  content4:
    'Contact us today to schedule a consultation and take the first step towards achieving your financial goals.',
  content1:
    'Our team of financial experts will work with you to create a customized financial plan tailored to your unique goals and circumstances.',
  heading3: 'Retirement Planning',
  content2:
    'We offer professional investment management services to help grow your wealth and secure your financial future.',
}

ContentList1.propTypes = {
  content5: PropTypes.string,
  heading5: PropTypes.string,
  heading6: PropTypes.string,
  heading2: PropTypes.string,
  content3: PropTypes.string,
  heading1: PropTypes.string,
  content6: PropTypes.string,
  heading4: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
  heading3: PropTypes.string,
  content2: PropTypes.string,
}

export default ContentList1
