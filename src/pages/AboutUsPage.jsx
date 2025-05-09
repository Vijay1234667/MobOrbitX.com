import React from 'react'

import Container from 'react-bootstrap/Container';

// images
import aboutbg from "../assets/images/about/aboutbg.png"
import aboutusmiddle from "../assets/images/about/aboutusmiddle.jpg"

import LoginNavbar from './LoginNavbar';
import { Col, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AboutUsPage = () => {
  return (
    <>
      <LoginNavbar />
      <section className='about-us-section mb-md-5 mb-3'>
        <Container fluid className='p-0'>
          <Row>
            <Col lg={12}>
              <div className='text-center'>
                <h1 className="font-600 text-white">About Us</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item "><Link to="/">HOMEPAGE</Link></li>
                    <li className="breadcrumb-item  text-white" aria-current="page">ABOUT US</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-us-middle-content mb-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={4}>
              <div className='mb-3 mb-md-5 text-center'>
                <img className='img-fluid' src={aboutusmiddle} alt={aboutusmiddle} />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h6 className='mb-3 font-600 text-secondary'>WHO WE ARE</h6>
                <h2 className='mb-2 font-600 font-30'>Maximize Your Online Impact with mobOrbitX</h2>
                <p>At mobOrbitX, we're dedicated to empowering businesses with the tools they need to succeed in digital marketing. With years of experience and expertise, we've seen the challenges that come with optimizing ad spend and achieving real results. That's why we developed mobOrbitX – an AI-powered solution that helps you take control of your Facebook ad budget. Our technology automatically optimizes your campaigns to deliver maximum ROI, ensuring that every dollar works harder to drive real conversions and boost your online performance.
                </p>
                <p className='mb-3 text-dark font-600'>Our mission is to help businesses like yours succeed in the digital landscape. With mobOrbitX, you'll be able to:
                </p>
                <ul className='ps-3 disc'>
                  <li className='mb-2'>
                    Optimize your Facebook ad budget for maximum impact
                  </li>
                  <li className='mb-2'>
                    Drive more conversions and sales
                  </li>
                  <li className='mb-2'>
                    Reach a larger audience with precision targeting
                  </li>
                  <li className='mb-2'>
                    Make data-driven decisions with our intuitive dashboard
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-us-middle-content py-1'>
        <Container fluid>
          <Row className='mb-3 mb-md-4'>
            <Col md={4} className='mb-4'>
              <div>
                <img className='img-fluid' src={aboutbg} alt={aboutbg} />
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div>
                <img className='img-fluid' src={aboutbg} alt={aboutbg} />
              </div>
            </Col>
            <Col md={4} >
              <div>
                <img className='img-fluid' src={aboutbg} alt={aboutbg} />
              </div>
            </Col>

          </Row>

          <Row className='py-md-2 py-1'>
            <Col lg={12}>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="ps-lg-5 font-15 text-dark">© Copyrights <span id="currentYear"></span> | All Rights Reserved. Crafted with ❤️ by Mobavenue
                </p>
                <ul className=" d-flex align-items-center justify-content-end flex-wrap p-0">
                  <li className='border-end pe-3 border-black'>
                    <NavLink className='font-15 text-dark' to="/">
                      Privacy Policy
                    </NavLink>
                  </li>

                  <li className='ms-4'>
                    <NavLink className='font-15 text-dark' to="/">
                      Terms & Condition
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>

          </Row>
        </Container>
      </section>



    </>
  )
}

export default AboutUsPage
