import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero93 from '../components/hero93'
import Features22 from '../components/features22'
import ContentList21 from '../components/content-list21'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './financial-accounting.css'

const FinancialAccounting = (props) => {
  return (
    <div className="financial-accounting-container">
      <Helmet>
        <title>Financial-Accounting - Thrive Advisors</title>
        <meta
          property="og:title"
          content="Financial-Accounting - Thrive Advisors"
        />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name5"
      ></Navbar3>
      <Hero93
        heading1="Financial Accounting Services"
        image1Src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFjY291bnRpbmd8ZW58MHx8fHwxNzE4NzQ1NTI1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero93>
      <Features22
        sectionTitle="What we offer:"
        feature1Title="Accurate Financial Reporting:"
        feature2Title="Regulatory Compliance:"
        feature3Title="Cost Control and Analysis:"
        feature4Title="Audit Readiness:"
        feature5Title="Real-time Financial Monitoring:"
        feature1ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature2ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature4ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature5ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature1Description="Deliver precise and timely financial statements to support informed business decisions."
        feature2Description="Ensure adherence to all relevant financial regulations and standards, minimizing compliance risks."
        feature3Description="Provide detailed cost tracking and analysis to help manage expenses and improve profitability."
        feature4Description="Maintain comprehensive records and transparent processes to facilitate smooth and successful audits."
        feature5Description="Implement advanced systems for continuous monitoring of financial health, enabling proactive management and quick responses to financial issues."
      ></Features22>
      <ContentList21
        content2="We provide a detailed evaluation of your financial records, including income, expenses, assets, and liabilities. This comprehensive analysis gives you a clear picture of your financial health and identifies areas for improvement. Tailored to your unique business needs, our analysis ensures actionable insights for better financial management."
        content3="We deliver precise and timely financial statements, helping you understand your financial performance and comply with regulatory requirements. Our customized reporting ensures that the information is relevant to your business, supporting informed decision-making and strategic planning."
        content4="Our team helps prepare for audits by maintaining thorough and transparent financial records. We ensure that your financial documentation meets the highest standards, facilitating a smooth audit process and demonstrating your commitment to financial integrity."
        content5="We assist in tracking and analyzing your expenses to identify cost-saving opportunities. By optimizing your cost management processes, we help improve your profitability and operational efficiency, ensuring your business remains financially healthy."
        content6="Using advanced financial systems, we provide continuous monitoring of your financial health. This real-time oversight allows for proactive management and swift response to any financial issues, keeping your business on track and resilient."
        heading1="What you get:"
        heading2="Comprehensive Financial Analysis"
        heading3="Accurate Financial Reporting"
        heading4="Audit Preparation and Support"
        heading5="Cost Management and Efficiency"
        heading6="Real-time Financial Monitoring"
      ></ContentList21>
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
        className="financial-accounting-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="financial-accounting-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="financial-accounting-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="financial-accounting-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="financial-accounting-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-accounting-dropdown-toggle1"
            >
              <span className="financial-accounting-text">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="financial-accounting-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-accounting-dropdown-toggle2"
            >
              <span className="financial-accounting-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="financial-accounting-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-accounting-dropdown-toggle3"
            >
              <span className="financial-accounting-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FinancialAccounting
