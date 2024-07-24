import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero72 from '../components/hero72'
import Features42 from '../components/features42'
import Steps22 from '../components/steps22'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './services-overview.css'

const ServicesOverview = (props) => {
  return (
    <div className="services-overview-container">
      <Helmet>
        <title>Services-Overview - Thrive Advisors</title>
        <meta
          property="og:title"
          content="Services-Overview - Thrive Advisors"
        />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name2"
      ></Navbar3>
      <Hero72
        heading1="FINANCE AND ACCOUNTING SERVICES"
        rootClassName="hero72-root-class-name"
      ></Hero72>
      <Features42
        feature2Title="Financial Accounting Services"
        feature3Title="Bookkeeping, Payroll and BPO Services"
        feature1Button="Learn More"
        feature2Button="Learn More"
        feature3Button="Learn More"
        feature4Button="Learn More"
        feature1ImageSrc="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature2ImageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGFjY291bnRpbmd8ZW58MHx8fHwxNzE4NzQ1NTI1fDA&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature1Description="Create customized financial strategies to achieve long-term business goals and enhance financial stability."
        feature2Description="Ensure accurate and compliant financial reporting for better decision-making and regulatory adherence."
        feature3Description="Streamline your business operations with efficient bookkeeping, precise payroll management, and comprehensive business process outsourcing."
      ></Features42>
      <Steps22
        text="Discover hidden profits with Thrive Advisors' consultative finance and accounting solutions in a streamlined 4-step journey."
        text1="Consultive Engagement Model:"
        text2="Schedule a Session"
        step1Title="No-Obligations Value Discovery Sessions"
        step2Title="Value Quantification and Project Planning"
        step3Title="Plan Approval and Transition"
        step4Title="Service Delivery and Ongoing Improvements"
        step1Description="Connect with our sales specialists to explore how we can transform your finance and accounting processes. As your trusted partner, we transition you from manual to automated processes, enabling informed decision-making."
        step2Description="Our team analyzes your processes to quantify the benefits of outsourcing and automation. We develop a comprehensive risk-mitigation transition plan tailored to your needs."
        step3Description="We initiate knowledge transfer and transition your processes to our extended business office. Our team implements automation solutions and eliminates redundant manual tasks for greater efficiency."
        step4Description="Experience seamless service delivery from our team of experts. Our robust governance model ensures regular engagement for operational and strategic direction. We continuously discuss and implement process enhancements to improve your business outcomes."
      ></Steps22>
      <ContactForm2
        email="gaurav.saha@thriveadvisors.in"
        phone="IN: +91 9620 770990"
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
        className="services-overview-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="services-overview-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="services-overview-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="services-overview-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="services-overview-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="services-overview-dropdown-toggle1"
            >
              <span className="services-overview-text">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="services-overview-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="services-overview-dropdown-toggle2"
            >
              <span className="services-overview-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="services-overview-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="services-overview-dropdown-toggle3"
            >
              <span className="services-overview-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesOverview
