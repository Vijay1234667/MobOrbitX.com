import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginNavbar from './LoginNavbar'

import contactusmiddle from '../assets/images/contact/contactusmiddle.jpg'

const ContactUsPage = () => {
    return (
        <>
            <LoginNavbar />
            <section className='contact-us-section mb-md-5 mb-3'>
                <Container fluid className='p-0'>
                    <Row>
                        <Col lg={12}>
                            <div className='text-center'>
                                <h1 className="font-600 text-white">Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item "><Link to="/">HOMEPAGE</Link></li>
                                        <li className="breadcrumb-item  text-white" aria-current="page">CONTACT US</li>
                                    </ol>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='contact-us-middle-content mb-3'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={4}>
                            <div className='mb-3 mb-md-5 text-center'>
                                <img className='img-fluid' src={contactusmiddle} alt={contactusmiddle} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h6 className='mb-3 font-600 text-secondary'>CONNECT</h6>
                                <h2 className='mb-2 font-600 font-30'>Get in Touch with Us!</h2>
                                <p>Welcome to our Contact Us page! We're excited to connect with you and provide the best possible experience. Whether you have questions about our product, need support, or simply want to say hello, we're here to listen. Our team is committed to responding to every message within 24 hours, so you can count on a quick and helpful reply from us.
                                </p>
                                <Link className='btn infonbtn font-14 mb-md-5 mb-2'>
                                    contact@moborbitx.com
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container fluid>
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

export default ContactUsPage
