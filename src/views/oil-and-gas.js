import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero94 from '../components/hero94'
import ContentList12 from '../components/content-list12'
import Features232 from '../components/features232'
import Features47 from '../components/features47'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './oil-and-gas.css'

const OilAndGas = (props) => {
  return (
    <div className="oil-and-gas-container">
      <Helmet>
        <title>Oil-and-Gas - Thrive Advisors</title>
        <meta property="og:title" content="Oil-and-Gas - Thrive Advisors" />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name22"
      ></Navbar3>
      <Hero94
        content1="Comprehensive industrial accounting services to support informed decision-making and help achieve financial goals."
        heading1="OIL AND GAS INDUSTRIES - FINANCIAL ACCOUNTING AND CONSULTANCY"
        image1Src="https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero94>
      <ContentList12
        content1="Maximize your operational efficiency and profitability in the Oil &amp; Gas Industry with Thrive Advisors Financial Solutions. Our specialized expertise in the sector enables us to optimize financial processes for enhanced performance. From bookkeeping and financial accounting to comprehensive financial planning, our services are designed to meet the unique needs of oil and gas companies. With a proven track record of delivering results, we empower our clients to make informed decisions and achieve their financial goals. Partner with Thrive Advisors Financial Solutions to unlock the full potential of your business and thrive in the competitive oil and gas market."
        heading1="Optimize your operational costs and maximize profits in the Oil &amp; Gas Industry with Thrive Advisors Financial Services."
      ></ContentList12>
      <Features232
        content1="Uncover Thrive Advisors Financial Solutions' dedicated accounting services crafted exclusively for the oil &amp; gas sector, meticulously designed to elevate strategic decision-making and steer you towards financial success. Our comprehensive solutions promise meticulous financial reporting, regulatory compliance, and forward-looking planning, empowering your oil and gas enterprise to thrive in a demanding market environment."
        heading1="What we offer at Thrive Advisors:"
        feature1Title="Industry Insight:"
        feature2Title="Resourceful Cash Flow:"
        feature3Title="Operational Efficiency:"
        feature4Title="Expansion Strategies:"
        feature5Title="Risk Mitigation:"
        feature1Description="Specialized knowledge for oil and gas financial solutions."
        feature2Description="Manage cash flow amidst industry fluctuations."
        feature3Description="Streamline costs and optimize supply chains."
        feature4Description="Navigate growth opportunities and secure funding."
        feature5Description="Ensure compliance and resilience in volatile markets."
      ></Features232>
      <Features47
        sectionTitle="Explore Other Indutries"
        feature1Title="Capital Markets"
        feature2Title="Financial Services"
        feature3Title="Retail Industries"
        feature4Title="Taxation Industries"
        feature1Button="Learn More"
        feature2Button="Learn More"
        feature3Button="Learn More"
        feature4Button="Learn More"
        feature1ImageSrc="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxidWlsZGluZ3N8ZW58MHx8fHwxNzE4NzcwNDY3fDA&amp;ixlib=rb-4.0.3&amp;w=600"
        feature2ImageSrc="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2VzfGVufDB8fHx8MTcxODc2OTk2MXww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature3ImageSrc="https://images.unsplash.com/photo-1522684462852-01b24e76b77d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHJldGFpbHxlbnwwfHx8fDE3MTg3Njk4OTd8MA&amp;ixlib=rb-4.0.3&amp;w=600"
        feature4ImageSrc="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0YXh8ZW58MHx8fHwxNzE4NzcwMTQxfDA&amp;ixlib=rb-4.0.3&amp;w=600"
      ></Features47>
      <ContactForm2
        email="gaurav.saha@thriveadvisors.in"
        phone=": +91 9620 770990"
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
        className="oil-and-gas-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="oil-and-gas-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="oil-and-gas-dropdown-arrow"
          ></div>
        </div>
        <ul data-thq="thq-dropdown-list" className="oil-and-gas-dropdown-list">
          <li
            data-thq="thq-dropdown"
            className="oil-and-gas-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="oil-and-gas-dropdown-toggle1"
            >
              <span className="oil-and-gas-text">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="oil-and-gas-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="oil-and-gas-dropdown-toggle2"
            >
              <span className="oil-and-gas-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="oil-and-gas-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="oil-and-gas-dropdown-toggle3"
            >
              <span className="oil-and-gas-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OilAndGas
