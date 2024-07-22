import React from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div className="content-list2-container thq-section-padding">
      <div className="content-list2-max-width thq-section-max-width thq-flex-column">
        <div className="content-list2-content thq-flex-column">
          <ul>
            <li className="content-list2-li list-item thq-flex-column">
              <h2 className="content-list2-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p>{props.content1}</p>
              <ul className="content-list2-ul1 thq-flex-column">
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
            </li>
          </ul>
        </div>
        <div className="content-list2-content1 thq-body-small content-list2-content1 thq-flex-column">
          <ul></ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  heading4: 'Financial Security Solutions',
  content2:
    'We offer professional investment management services to help you grow and protect your wealth over the long term.',
  heading9: 'Achieve Financial Success',
  content7:
    'Get personalized recommendations and strategies that align with your financial objectives and aspirations.',
  content1:
    'Our financial experts will work with you to create a customized financial plan tailored to your unique goals and circumstances.',
  content9:
    'Partner with us to chart a path towards financial success and stability. Let us guide you towards a brighter financial future.',
  content4:
    'Explore our range of financial security solutions to safeguard your assets and ensure a stable financial future.',
  heading1: 'Personalized Financial Planning',
  heading6: 'Expert Guidance',
  content5:
    'Unlock your financial potential by scheduling a consultation with our experts today. Let us help you achieve your financial goals.',
  heading3: 'Retirement Planning',
  heading5: 'Schedule a Consultation',
  heading2: 'Investment Management',
  content6:
    'Receive expert guidance and advice from our experienced financial consultants who are dedicated to helping you succeed.',
  content3:
    'Plan for a secure and comfortable retirement with our comprehensive retirement planning services designed to meet your future needs.',
  heading8: 'Secure Your Future',
  heading7: 'Tailored Recommendations',
}

ContentList2.propTypes = {
  heading4: PropTypes.string,
  content2: PropTypes.string,
  heading9: PropTypes.string,
  content7: PropTypes.string,
  content1: PropTypes.string,
  content9: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  heading6: PropTypes.string,
  content5: PropTypes.string,
  heading3: PropTypes.string,
  heading5: PropTypes.string,
  heading2: PropTypes.string,
  content6: PropTypes.string,
  content3: PropTypes.string,
  heading8: PropTypes.string,
  heading7: PropTypes.string,
}

export default ContentList2
