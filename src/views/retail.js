import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero94 from '../components/hero94'
import ContentList12 from '../components/content-list12'
import Features232 from '../components/features232'
import Features48 from '../components/features48'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './retail.css'

const Retail = (props) => {
  return (
    <div className="retail-container">
      <Helmet>
        <title>Retail - Thrive Advisors</title>
        <meta property="og:title" content="Retail - Thrive Advisors" />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name23"
      ></Navbar3>
      <Hero94
        content1="Comprehensive capital market accounting services to support informed decision-making and help achieve financial goals."
        heading1="RETAIL INDUSTRIES - FINANCIAL ACCOUNTING AND CONSULTANCY"
        image1Src="https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero94>
      <ContentList12
        content1="Revitalize your retail operations with Peak Performance Retail Solutions. We specialize in optimizing financial processes to enhance profitability and competitiveness in the Retail Industry. Leveraging our industry expertise, we offer a suite of services including bookkeeping, financial accounting, and strategic financial planning. Our tailored solutions empower retail businesses to make informed decisions and achieve their financial objectives. With a focus on delivering exceptional results, we work closely with retailers of all sizes to drive growth and success in today's dynamic market."
        heading1="Maximize your revenue streams with tailored financial solutions for the Retail Industry from Peak Performance Financial."
      ></ContentList12>
      <Features232
        content1="Discover Thrive Advisors' specialized accounting services customized for the retail industry, meticulously crafted to elevate decision-making and propel you towards financial success. Our holistic approach guarantees precise financial reporting, regulatory adherence, and strategic foresight, empowering your retail business to excel amidst industry competition."
        heading1="What we offer at Thrive Advisors:"
        feature1Title="Industry Expertise:"
        feature2Title="Cash Flow Management:"
        feature3Title="Cost Optimization:"
        feature4Title="Growth Strategies:"
        feature5Title="Risk Management:"
        feature1Description="Deep retail insights for tailored financial advice."
        feature2Description="Seasonal planning and inventory financing solutions."
        feature3Description="Identify savings and streamline supply chains."
        feature4Description="Expand market reach and secure financing for growth."
        feature5Description="Ensure compliance and safeguard financial stability."
      ></Features232>
      <Features48
        sectionTitle="Explore Other Industries"
        feature1Title="Capital Markets"
        feature2Title="Financial Services"
        feature3Title="Oil and Gas Industries"
        feature4Title="Taxation Industries"
        feature1Button="Learn More"
        feature2Button="Learn More"
        feature3Button="Learn More"
        feature4Button="Learn More"
        feature1ImageSrc="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxidWlsZGluZ3N8ZW58MHx8fHwxNzE4NzcwNDY3fDA&amp;ixlib=rb-4.0.3&amp;w=600"
        feature2ImageSrc="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2VzfGVufDB8fHx8MTcxODc2OTk2MXww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature3ImageSrc="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxpbmR1c3RyaWVzfGVufDB8fHx8MTcxODc2OTg2N3ww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature4ImageSrc="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0YXh8ZW58MHx8fHwxNzE4NzcwMTQxfDA&amp;ixlib=rb-4.0.3&amp;w=600"
      ></Features48>
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
      <div data-thq="thq-dropdown" className="retail-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="retail-dropdown-toggle">
          <div
            data-thq="thq-dropdown-arrow"
            className="retail-dropdown-arrow"
          ></div>
        </div>
        <ul data-thq="thq-dropdown-list" className="retail-dropdown-list">
          <li data-thq="thq-dropdown" className="retail-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="retail-dropdown-toggle1"
            >
              <span className="retail-text">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="retail-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="retail-dropdown-toggle2"
            >
              <span className="retail-text1">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="retail-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="retail-dropdown-toggle3"
            >
              <span className="retail-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Retail
