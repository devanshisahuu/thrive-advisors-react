import React from 'react'

import PropTypes from 'prop-types'

import './team5.css'

const Team5 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team5-max-width thq-section-max-width">
        <div className="team5-section-title">
          <span className="thq-body-small team5-text">{props.content1}</span>
          <button className="team5-button thq-button-filled">
            <span className="thq-body-small">{props.actionContent}</span>
          </button>
          <div className="team5-content">
            <h2 className="thq-heading-2 team5-text02">{props.heading1}</h2>
            <p className="team5-text03 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="team5-content1">
          <div className="team5-row">
            <div className="team5-container">
              <div className="team5-card">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team5-placeholder-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="team5-content2">
                  <div className="team5-title">
                    <span className="team5-text04 thq-body-small">
                      {props.member1}
                    </span>
                    <span className="team5-text05 thq-body-small">
                      {props.member1Job}
                    </span>
                  </div>
                  <span className="team5-text06 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team5-social-icons">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card1">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team5-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team5-content3">
                  <div className="team5-title1">
                    <span className="team5-text07 thq-body-small">
                      {props.member2}
                    </span>
                    <span className="team5-text08 thq-body-small">
                      {props.member2Job}
                    </span>
                  </div>
                  <span className="team5-text09 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team5-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team5-row1">
            <div className="team5-container1">
              <div className="team5-card2">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team5-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team5-content4">
                  <div className="team5-title2">
                    <span className="team5-text10 thq-body-small">
                      {props.member3}
                    </span>
                    <span className="team5-text11 thq-body-small">
                      {props.member3Job}
                    </span>
                  </div>
                  <span className="team5-text12 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team5-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card3">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team5-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team5-content5">
                  <div className="team5-title3">
                    <span className="team5-text13 thq-body-small">
                      {props.member4}
                    </span>
                    <span className="team5-text14 thq-body-small">
                      {props.member4Job}
                    </span>
                  </div>
                  <span className="team5-text15 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team5-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team5.defaultProps = {
  member2: 'Jane Smith',
  member2Job: 'Investment Advisor',
  member4Src:
    'https://images.unsplash.com/photo-1554423443-d9b73c9b7ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNjQ5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Alt: 'Image of John Doe, Certified Financial Planner',
  member3: 'David Lee',
  content2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  member3Src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNjQ5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNjQ5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Alt: 'Image of David Lee, Retirement Planning Specialist',
  member4Job: 'Financial Security Consultant',
  member3Job: 'Retirement Planning Specialist',
  member3Content:
    'David is dedicated to assisting individuals in planning for a secure and fulfilling retirement by creating tailored retirement plans.',
  member1Job: 'Certified Financial Planner',
  member1Src:
    'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzcwNjQ5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content:
    'Jane specializes in investment management and has a keen eye for identifying lucrative opportunities for her clients.',
  content1: 'Join Our Team Today!',
  member4: 'Sarah Johnson',
  actionContent: 'Open positions',
  member4Content:
    'Sarah focuses on providing financial security solutions to ensure clients have a stable and protected financial future.',
  member2Alt: 'Image of Jane Smith, Investment Advisor',
  member1: 'John Doe',
  member4Alt: 'Image of Sarah Johnson, Financial Security Consultant',
  heading1: 'Meet our team',
  member1Content:
    'John is a seasoned financial expert with over 15 years of experience in helping clients achieve their financial goals through personalized strategies.',
}

Team5.propTypes = {
  member2: PropTypes.string,
  member2Job: PropTypes.string,
  member4Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member3: PropTypes.string,
  content2: PropTypes.string,
  member3Src: PropTypes.string,
  member2Src: PropTypes.string,
  member3Alt: PropTypes.string,
  member4Job: PropTypes.string,
  member3Job: PropTypes.string,
  member3Content: PropTypes.string,
  member1Job: PropTypes.string,
  member1Src: PropTypes.string,
  member2Content: PropTypes.string,
  content1: PropTypes.string,
  member4: PropTypes.string,
  actionContent: PropTypes.string,
  member4Content: PropTypes.string,
  member2Alt: PropTypes.string,
  member1: PropTypes.string,
  member4Alt: PropTypes.string,
  heading1: PropTypes.string,
  member1Content: PropTypes.string,
}

export default Team5
