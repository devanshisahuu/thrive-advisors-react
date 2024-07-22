import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Team2 from '../components/team2'
import ContentList22 from '../components/content-list22'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Thrive Advisors</title>
        <meta property="og:title" content="About - Thrive Advisors" />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name24"
      ></Navbar3>
      <Team2
        member2="Gaurav Saha"
        member2Job="Founder, Thrive Advisors"
        member2Src="/gaurav%20saha-1400w.jpeg"
        member2Content="Gaurav Saha, a Chartered Accountant and the founder of Thrive Advisors. He has a rich and varied experience of 15+ years, having worked with several esteemed multinational corporations where he honed his skills in accounting, book-keeping, treasury, capital markets, auditing and taxation. Driven by his desire to guide businesses towards financial success, Gaurav has formed Thrive Advisors into a financial consulting firm that prioritizes its clients’ requirements and benefits. His proficiency in financial planning, accounting, and strategic management makes him the trusted advisor to businesses spanning different sectors and countries, including India, the United Kingdom and the United States of America."
      ></Team2>
      <ContentList22
        content1="At Thrive Advisors, our mission is to deliver exceptional financial services that empower businesses to achieve their full potential. We are committed to providing cost-effective, accurate, and efficient accounting solutions that enhance operational efficiency and support informed decision-making. Through our dedicated team of skilled professionals and advanced technological tools, we aim to streamline financial processes, ensure compliance, and drive sustainable growth for our clients."
        content7="Our vision is to be the leading provider of offshore accounting services, recognized for our excellence in quality, innovation, and client satisfaction. We aspire to transform the way businesses manage their financial operations by offering unparalleled expertise and personalized solutions. By fostering long-term partnerships and continually evolving to meet the dynamic needs of the global market, we strive to be the trusted advisor that businesses turn to for all their accounting and financial management needs."
        heading1="Our Mission"
        heading7="Our Vision"
      ></ContentList22>
      <ContactForm2
        email="gaurav.saha@thriveadvisors.in"
        phone="UK: +44 74369 43214; IN: +91 9620 770990"
      ></ContactForm2>
      <Footer41
        link1="Services"
        link2="Industries"
        link3="About Us"
        logoSrc="/logo-light.svg"
        termsLink="Terms &amp; Conditions "
        privacyLink="Privacy Policy"
      ></Footer41>
      <div data-thq="thq-dropdown" className="about-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="about-dropdown-toggle">
          <div
            data-thq="thq-dropdown-arrow"
            className="about-dropdown-arrow"
          ></div>
        </div>
        <ul data-thq="thq-dropdown-list" className="about-dropdown-list">
          <li data-thq="thq-dropdown" className="about-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="about-dropdown-toggle1"
            >
              <span className="about-text">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="about-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="about-dropdown-toggle2"
            >
              <span className="about-text1">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="about-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="about-dropdown-toggle3"
            >
              <span className="about-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
