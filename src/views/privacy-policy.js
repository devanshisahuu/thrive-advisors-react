import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import ContentList23 from '../components/content-list23'
import ContentList24 from '../components/content-list24'
import ContactForm2 from '../components/contact-form2'
import Footer41 from '../components/footer41'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy-Policy - Thrive Advisors</title>
        <meta property="og:title" content="Privacy-Policy - Thrive Advisors" />
      </Helmet>
      <Navbar3
        link3="Industries"
        link4="About "
        logoSrc="/logo-light.svg"
        rootClassName="navbar3-root-class-name25"
      ></Navbar3>
      <ContentList23
        content1="Privacy Policy for Thrive Advisors"
        content2="We collect personal information such as your name, contact details, and financial information when you engage with our services. Additionally, we collect information on how our website and services are accessed and used, including your IP address, browser type, and pages visited."
        content3="We use your information to provide and maintain our accounting services, to contact you with updates, marketing, and promotional materials, and to analyze data to improve our services and user experience."
        content4="We do not sell or share your personal information with third parties except with service providers who assist us in delivering our services, and if required to comply with a legal obligation or protect our rights."
        content5="We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
        content6="You have the right to access, update, or delete your personal information. You can exercise these rights by contacting us by filling the contact form given below."
        content7="Terms and Conditions for Thrive Advisors"
        content9='Thrive Advisors offers a range of financial and accounting services, including financial planning, bookkeeping, payroll management, and business process outsourcing (BPO). Fees and payment terms are detailed in individual service agreements, and we ensure confidentiality of your financial information. We reserve the right to modify or discontinue services without notice. Services are provided "as is" without warranties, and either party may terminate the agreement with written notice. For questions about our products and services, contact us through the contact form given below.'
        heading2="Information We Collect"
        heading3="How We Use Your Information"
        heading4="Data Sharing and Disclosure"
        heading5="Data Security"
        heading6="Your Rights"
      ></ContentList23>
      <ContentList24
        content1={
          <fragment>
            <span className="privacy-policy-text thq-body-small">
              Your Data is our foremost priority. Below is how we ensure it:
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="thq-body-small">
              We Use licensed software within their Security Architecture
            </span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="thq-body-small">
              <span>
                Our Network is protected by latest Firewall with the added layer
                of security with anti-virus subscriptions.
              </span>
              <br></br>
              <span>
                • Removable Storage devices are restricted on our workstations.
              </span>
              <br></br>
              <span>• Personal Emails and Cloud Storage is Prohibited.</span>
              <span>
                Removable Storage devices are restricted on our workstations.
              </span>
              <br></br>
              <span>
                •
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Personal Emails and Cloud Storage is Prohibited.</span>
            </span>
          </fragment>
        }
        content4={
          <fragment>
            <span className="thq-body-small">
              <span>
                Surveillance throughout our facility for monitoring and securing
                our work environment
              </span>
              <br></br>
              <span>
                • The Server room is Password-protected and only IT Team member
                with authorised access can enter.
              </span>
            </span>
          </fragment>
        }
        content5={
          <fragment>
            <span className="thq-body-small">
              Employees are hired after going through rigorous background
              checks.
            </span>
          </fragment>
        }
        content6={
          <fragment>
            <span className="thq-body-small">
              <span>
                Being an Accounting &amp; bookkeeping Service Provider, we
                understand the sensitivity of data shared by our client with us.
                All
              </span>
              <br></br>
              <span>our employees are strictly bound with NDA.</span>
              <br></br>
              <span>
                • Employees carrying Smart Devices on the operations Floor are
                closely monitored.
              </span>
            </span>
          </fragment>
        }
        content7={
          <fragment>
            <span className="privacy-policy-text23 thq-body-small">
              Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam
              voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque!
              Qui accusamus assumenda et molestias eius et error sunt. Id
              recusandae nostrum ea officiis voluptatem in nisi consequatur sed
              quia tenetur sit alias molestias qui illum soluta. Est nesciunt
              perferendis eum sint rerum 33 cupiditate dolorem id corrupti
              laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur.
              Et nobis quasi et cumque adipisci aut molestiae eligendi quo
              inventore dicta ea suscipit sequi sed veritatis nemo.
            </span>
          </fragment>
        }
        content9={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="privacy-policy-text25 thq-heading-2">
              Data Protection and Security
            </span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="thq-heading-3">Types of data we collect</span>
          </fragment>
        }
        heading3={
          <fragment>
            <span className="thq-heading-3">How we use your data</span>
          </fragment>
        }
        heading4={
          <fragment>
            <span className="thq-heading-3">
              Sharing your data with 3rd parties
            </span>
          </fragment>
        }
        heading5={
          <fragment>
            <span className="thq-heading-3">Campaign tracking</span>
          </fragment>
        }
        heading6={
          <fragment>
            <span className="thq-heading-3">Cookies</span>
          </fragment>
        }
        heading7={
          <fragment>
            <span className="privacy-policy-text31 thq-heading-2">
              Terms of service
            </span>
          </fragment>
        }
        heading8={
          <fragment>
            <span className="thq-heading-3">General Terms and Conditions</span>
          </fragment>
        }
        heading9={
          <fragment>
            <span className="thq-heading-3">Products and Services</span>
          </fragment>
        }
      ></ContentList24>
      <ContactForm2></ContactForm2>
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
        className="privacy-policy-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="privacy-policy-dropdown-toggle"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="privacy-policy-dropdown-arrow"
          ></div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="privacy-policy-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="privacy-policy-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="privacy-policy-dropdown-toggle1"
            >
              <span className="privacy-policy-text34">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="privacy-policy-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="privacy-policy-dropdown-toggle2"
            >
              <span className="privacy-policy-text35">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="privacy-policy-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="privacy-policy-dropdown-toggle3"
            >
              <span className="privacy-policy-text36">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicy
