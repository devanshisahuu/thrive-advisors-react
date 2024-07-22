import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero93 from '../components/hero93'
import Features22 from '../components/features22'
import ContentList21 from '../components/content-list21'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './financial-planning.css'

const FinancialPlanning = (props) => {
  return (
    <div className="financial-planning-container">
      <Helmet>
        <title>Financial-Planning - Thrive Advisors</title>
        <meta
          property="og:title"
          content="Financial-Planning - Thrive Advisors"
        />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name4"
      ></Navbar3>
      <Hero93
        heading1="Personalized Financial Planning Services"
        image1Src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFjY291bnRpbmd8ZW58MHx8fHwxNzE4NzQ1NTI1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero93>
      <Features22
        sectionTitle="What we offer:"
        feature1Title="Personalized Financial Strategies:"
        feature2Title="Comprehensive Wealth Management:"
        feature3Title="Risk Assessment and Mitigation:"
        feature4Title="Tax Optimization:"
        feature5Title="Regular Performance Reviews:"
        feature1ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature2ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature4ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature5ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        sectionDescription="Comprehensive financial solutions, including strategic planning, risk management, and optimized investment services, tailored to drive your business success."
        feature1Description="Tailored plans to meet your unique financial goals and lifestyle needs."
        feature2Description="Holistic approach to managing your assets, liabilities, and investments."
        feature3Description="Proactive strategies to identify and minimize financial risks."
        feature4Description="Expert advice on tax-efficient investments and planning to maximize your returns."
        feature5Description="Ongoing monitoring and adjustments to ensure your financial plan remains aligned with your objectives."
      ></Features22>
      <ContentList21
        content2="We offer a thorough evaluation of the client's financial situation, including income, expenses, debts, assets, and investments. This comprehensive assessment helps clients understand their current financial health and identify areas for improvement. Further, we tailor the assessment to each client’s unique circumstances, ensuring that the advice and plans provided are relevant and actionable."
        content3="We help clients define and prioritize their financial goals, whether it’s saving for retirement, buying a home, funding education, or building an emergency fund. We further help in developing a detailed, step-by-step plan to achieve these goals, providing clients with a clear path forward and measurable milestones to track progress."
        content4="Let us help you create diversified investment portfolios tailored to the client’s risk tolerance, time horizon, and financial goals. This helps in maximizing returns while minimizing risks. Further, we offer ongoing monitoring of investment performance and periodic rebalancing to ensure the portfolio remains aligned with the client’s objectives and market conditions."
        content5="At Thrive, we provide strategies to minimize tax liabilities through tax-efficient investment choices, retirement account contributions, and other tax-saving opportunities. As we work closely with tax advisors to ensure that financial plans are integrated with tax planning, we help maximize the client’s overall financial efficiency."
        content6="Assessing the client’s existing insurance policies and identifying gaps in coverage is included in our strengths to the core. In addition, we recommend appropriate insurance products such as life, health, disability, and long-term care insurance. Beyond that, we develop strategies to mitigate financial risks, ensuring that clients are protected against unexpected events that could impact their financial stability."
        heading1="What you get:"
        heading2="Comprehensive Financial Assessment"
        heading3="Goal-Oriented Planning"
        heading4="Investment Management"
        heading5="Tax Optimization"
        heading6="Risk Management and Insurance Planning"
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
        className="financial-planning-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="financial-planning-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="financial-planning-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="financial-planning-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="financial-planning-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-planning-dropdown-toggle1"
            >
              <span className="financial-planning-text">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="financial-planning-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-planning-dropdown-toggle2"
            >
              <span className="financial-planning-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="financial-planning-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="financial-planning-dropdown-toggle3"
            >
              <span className="financial-planning-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FinancialPlanning
