import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero93 from '../components/hero93'
import Features22 from '../components/features22'
import ContentList21 from '../components/content-list21'
import FAQ1 from '../components/faq1'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './bookkeeping-payroll-and-bpo.css'

const BookkeepingPayrollAndBPO = (props) => {
  return (
    <div className="bookkeeping-payroll-and-bpo-container">
      <Helmet>
        <title>Bookkeeping-Payroll-and-BPO - Thrive Advisors</title>
        <meta
          property="og:title"
          content="Bookkeeping-Payroll-and-BPO - Thrive Advisors"
        />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name6"
      ></Navbar3>
      <Hero93
        heading1="Bookkeeping, Payroll and BPO Services"
        image1Src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFjY291bnRpbmd8ZW58MHx8fHwxNzE4NzQ1NTI1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero93>
      <Features22
        sectionTitle="What we offer:"
        feature1Title="Accurate Record-Keeping:"
        feature2Title="Efficient Payroll Management:"
        feature3Title="Cost-Effective Solutions:"
        feature4Title="Scalable Services:"
        feature5Title="Expert Compliance Support:"
        feature1ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature2ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature4ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature5ImageSrc="https://images.unsplash.com/photo-1617957718587-60a442884bee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxncmVlbiUyMGNvbG9yJTIwc3dhdGNofGVufDB8fHx8MTcxODY0MTM5NHww&amp;ixlib=rb-4.0.3&amp;h=200"
        feature1Description="Ensure precise and up-to-date financial records to facilitate informed business decisions and maintain regulatory compliance."
        feature2Description="Streamline payroll processes to ensure timely and accurate employee compensation, reducing administrative burden."
        feature3Description="Provide affordable outsourcing options that reduce operational costs while maintaining high-quality service standards."
        feature4Description="Offer flexible solutions that can easily scale with your business growth, adapting to changing needs and demands."
        feature5Description="Ensure adherence to all relevant laws and regulations, minimizing the risk of non-compliance penalties and issues."
      ></Features22>
      <ContentList21
        content2="We maintain meticulous records of your financial transactions, ensuring accuracy and consistency in your financial data. Our detailed bookkeeping services provide a solid foundation for all your financial activities, making it easier to manage and review your finances."
        content3="Our payroll services ensure that your employees are paid accurately and on time, every time. We handle all aspects of payroll processing, including tax deductions and compliance, so you can focus on your core business activities without worrying about payroll complexities."
        content4="We offer comprehensive BPO services to streamline your back-office operations. From administrative tasks to customer support, our BPO solutions help reduce operational costs and enhance efficiency, allowing you to concentrate on strategic growth."
        content5="We ensure that your bookkeeping and payroll processes comply with all relevant regulations and standards. Our rigorous approach to compliance reduces the risk of penalties and legal issues, providing peace of mind and safeguarding your business."
        content6="We prioritize the security and confidentiality of your financial data. With robust security measures and protocols in place, we protect your sensitive information from unauthorized access and breaches, ensuring your business data remains safe and secure."
        heading1="What you get:"
        heading2="Precise Bookkeeping"
        heading3="Efficient Payroll Management"
        heading4="Business Process Outsourcing (BPO)"
        heading5="Regulatory Compliance and Reporting"
        heading6="Data Security and Confidentiality"
      ></ContentList21>
      <FAQ1
        action1={
          <fragment>
            <span className="thq-body-small">Contact</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text01 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text02 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">
              Our Bookkeeping and Accounting Services include:
            </span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="thq-heading-2">Still have a question?</span>
          </fragment>
        }
        faq1Answer={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq2Answer={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq3Answer={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq4Answer={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq5Answer={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </fragment>
        }
        faq1Question={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text12 thq-body-large">
              Reconcilation
            </span>
          </fragment>
        }
        faq2Question={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text13 thq-body-large">
              Cash-Flow Services
            </span>
          </fragment>
        }
        faq3Question={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text14 thq-body-large">
              Accounts Payable and Receivable
            </span>
          </fragment>
        }
        faq4Question={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text15 thq-body-large">
              Management Reporting
            </span>
          </fragment>
        }
        faq5Question={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text16 thq-body-large">
              Journal Entry and Year-end Accounting
            </span>
          </fragment>
        }
        faq5Question1={
          <fragment>
            <span className="bookkeeping-payroll-and-bpo-text17 thq-body-large">
              Frequently Asked Questions
            </span>
          </fragment>
        }
      ></FAQ1>
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
        className="bookkeeping-payroll-and-bpo-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="bookkeeping-payroll-and-bpo-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="bookkeeping-payroll-and-bpo-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="bookkeeping-payroll-and-bpo-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="bookkeeping-payroll-and-bpo-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="bookkeeping-payroll-and-bpo-dropdown-toggle1"
            >
              <span className="bookkeeping-payroll-and-bpo-text18">
                Sub-menu Item
              </span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="bookkeeping-payroll-and-bpo-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="bookkeeping-payroll-and-bpo-dropdown-toggle2"
            >
              <span className="bookkeeping-payroll-and-bpo-text19">
                Sub-menu Item
              </span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="bookkeeping-payroll-and-bpo-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="bookkeeping-payroll-and-bpo-dropdown-toggle3"
            >
              <span className="bookkeeping-payroll-and-bpo-text20">
                Sub-menu Item
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BookkeepingPayrollAndBPO
