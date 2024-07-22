import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero1 from '../components/hero1'
import Features10 from '../components/features10'
import ContentList1 from '../components/content-list1'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Thrive Advisors</title>
        <meta property="og:title" content="Thrive Advisors" />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name"
      ></Navbar3>
      <Hero1
        image1Src="/pexels-anntarazevich-14751274%20(1)-1400w.jpg"
        rootClassName="hero1-root-class-name"
      ></Hero1>
      <Features10
        sectionTitle="What we offer:"
        feature1Title="Bookkeeping, Payroll &amp; BPO"
        feature2Title="Financial Accounting Services"
        feature3Title="Personalized Financial Planning"
        feature1ImageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature2ImageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGFjY291bnRpbmd8ZW58MHx8fHwxNzE4NzQ1NTI1fDA&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageAlt="Personalized Financial Planning"
        feature3ImageSrc="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;w=1400ttps://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxODc0NTUyNXww&amp;ixlib=rb-4.0.3&amp;h=200"
        sectionDescription="Discover new heights of Financial Achievements with our wide range of services."
        feature1Description="Streamline your business operations with efficient bookkeeping, precise payroll management, and comprehensive business process outsourcing."
        feature2Description="Ensure accurate and compliant financial reporting for better decision-making and regulatory adherence."
        feature3Description="Create customized financial strategies to achieve long-term business goals and enhance financial stability."
      ></Features10>
      <ContentList1
        content1="Benefits of Offshore Accounting include:"
        content2="Offshore accounting can significantly reduce operational costs due to lower labor expenses in certain countries. This allows businesses to allocate resources more efficiently and invest in other growth opportunities."
        content3="Offshore accounting firms often have highly skilled professionals with specialized knowledge in various accounting practices. This provides businesses with access to top-tier expertise without the need for extensive in-house training and development."
        content4="Leveraging offshore accounting services can streamline financial processes, leading to improved efficiency. These firms utilize advanced technologies and methodologies, ensuring timely and accurate financial reporting and analysis."
        content5="Offshore accounting services offer scalability, allowing businesses to easily adjust the level of support based on their needs. This flexibility is particularly beneficial during periods of growth or when dealing with fluctuating workloads."
        content6="By outsourcing accounting functions, businesses can focus more on their core activities and strategic initiatives. This shift allows internal teams to concentrate on driving growth and enhancing competitive advantage, rather than being bogged down by routine accounting tasks."
        heading1="Why choose Offshore Accounting?"
        heading2="Cost Savings"
        heading3="Access to Expertise"
        heading4="Increased Efficiency"
        heading5="Scalability"
        heading6="Focus on Core Business Activities"
      ></ContentList1>
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
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
          <div
            data-thq="thq-dropdown-arrow"
            className="home-dropdown-arrow"
          ></div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <span className="home-text">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle2"
            >
              <span className="home-text1">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle3"
            >
              <span className="home-text2">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
