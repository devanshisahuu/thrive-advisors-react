import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero72 from '../components/hero72'
import Features23 from '../components/features23'
import Features7 from '../components/features7'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './industries-overview.css'

const IndustriesOverview = (props) => {
  return (
    <div className="industries-overview-container">
      <Helmet>
        <title>Industries-Overview - Thrive Advisors</title>
        <meta
          property="og:title"
          content="Industries-Overview - Thrive Advisors"
        />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name3"
      ></Navbar3>
      <Hero72
        heading1="INDUSTRIES - ACCOUNTING AND CONSULTANCY SERVICES"
        rootClassName="hero72-root-class-name1"
      ></Hero72>
      <Features23
        sectionTitle="Industries we offer services to:"
        feature1Title="Capital Markets"
        feature2Title="Financial Services"
        feature3Title="Oil and Gas Industries"
        feature4Title="Retail Industries"
        feature5Title="Taxation Industries"
        feature1ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature2ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature4ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature5ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
      ></Features23>
      <Features7
        heading="What we Offer:"
        feature1Title="Financial Planning and Analysis:"
        feature2Title="Risk Management and Compliance:"
        feature3Title="Investment Management:"
        feature1Description="Develop strategic financial plans and perform in-depth analysis to drive informed business decisions and sustainable growth."
        feature2Description="Implement robust risk assessment and compliance programs to safeguard against financial uncertainties and regulatory issues."
        feature3Description="Provide expert investment advisory and portfolio management services to optimize returns and achieve long-term financial objectives."
      ></Features7>
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
      <div
        data-thq="thq-dropdown"
        className="industries-overview-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="industries-overview-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="industries-overview-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="industries-overview-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="industries-overview-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="industries-overview-dropdown-toggle1"
            >
              <span className="industries-overview-text">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="industries-overview-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="industries-overview-dropdown-toggle2"
            >
              <span className="industries-overview-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="industries-overview-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="industries-overview-dropdown-toggle3"
            >
              <span className="industries-overview-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IndustriesOverview
