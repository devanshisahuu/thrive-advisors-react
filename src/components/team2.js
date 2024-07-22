import React from 'react'

import PropTypes from 'prop-types'

import './team2.css'

const Team2 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team2-max-width thq-section-max-width">
        <div className="team2-section-title">
          <div className="team2-content">
            <h2 className="team2-text thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <div className="team2-content1">
          <div className="team2-content2">
            <div className="team2-container">
              <div className="team2-row"></div>
            </div>
            <div className="team2-card">
              <div className="team2-content3">
                <span className="team2-text1 thq-body-small">
                  {props.member2Content}
                </span>
                <div className="team2-title">
                  <span className="team2-text2 thq-body-small">
                    {props.member2}
                  </span>
                  <span className="team2-text3 thq-body-small">
                    {props.member2Job}
                  </span>
                </div>
              </div>
              <div className="team2-social-icons">
                <a
                  href="https://www.linkedin.com/in/gaurav-saha-572a8272/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team2-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="team2-icon thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <img
              alt={props.member2Alt}
              src={props.member2Src}
              className="team2-placeholder-image thq-img-ratio-1-1"
            />
            <div className="team2-row1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team2.defaultProps = {
  member2: 'Full name',
  member4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Job: 'Job title',
  heading2: 'We’re hiring!',
  member1Job: 'Job title',
  actionContent: 'Open positions',
  member1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member6: 'Full name',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member3Alt: 'Member Alt',
  member4: 'Full name',
  member4Job: 'Job title',
  member5Job: 'Job title',
  member5Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member6Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading1: 'Our team',
  member3: 'Full name',
  member3Job: 'Job title',
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member1Alt: 'Member Alt',
  member6Job: 'Job title',
  content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  content1: 'Join our team and make a difference in your career!',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=600',
  member4Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=600',
  member5: 'Full name',
  member5Alt: 'Member Alt',
  member3Src:
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=600',
  member2Alt: 'Member Alt',
  member5Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=600',
  member1: 'Full name',
  member3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member6Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=600',
  member6Alt: 'Member Alt',
  member4Alt: 'Member Alt',
}

Team2.propTypes = {
  member2: PropTypes.string,
  member4Content: PropTypes.string,
  member2Job: PropTypes.string,
  heading2: PropTypes.string,
  member1Job: PropTypes.string,
  actionContent: PropTypes.string,
  member1Content: PropTypes.string,
  member6: PropTypes.string,
  content2: PropTypes.string,
  member3Alt: PropTypes.string,
  member4: PropTypes.string,
  member4Job: PropTypes.string,
  member5Job: PropTypes.string,
  member5Content: PropTypes.string,
  member6Content: PropTypes.string,
  heading1: PropTypes.string,
  member3: PropTypes.string,
  member3Job: PropTypes.string,
  member2Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member6Job: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  member1Src: PropTypes.string,
  member4Src: PropTypes.string,
  member5: PropTypes.string,
  member5Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member2Alt: PropTypes.string,
  member5Src: PropTypes.string,
  member1: PropTypes.string,
  member3Content: PropTypes.string,
  member2Content: PropTypes.string,
  member6Src: PropTypes.string,
  member6Alt: PropTypes.string,
  member4Alt: PropTypes.string,
}

export default Team2
