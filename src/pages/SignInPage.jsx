import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap';

// images
import signin from "../assets/images/signin/signin.png"
import LoginNavbar from './LoginNavbar';

const SignInPage = () => {
    return ( 
        <>
            <LoginNavbar />
            <section className='signinpage-section'>
                <Container fluid>
                    <Row className='align-items-center mb-4'>
                        <Col lg={7} className='mb-md-3 mb-4'>
                            <div>
                                <img className='img-fluid' src={signin} alt={signin} />
                            </div>
                        </Col>
                        <Col lg={5} className='px-md-3 px-lg-5 mb-4'>
                            <div className='signin-right-content'>
                                <h1 className="font-28 font-700 mb-3">Welcome 👋</h1>
                                <p className="font-16 mb-4">Please login to continue to your account.</p>

                                <form action="" className='signin-form-box'>
                                    <div className="mb-4">
                                        <label for="email" className="form-label">Email</label>
                                        <div className="d-flex align-items-center">
                                            <input type="email" className="form-control py-3" id="email"
                                                placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label for="Password" className="form-label">Password</label>
                                        <div className="d-flex align-items-center passwordInput">
                                            <input type="password" className="form-control py-3" id="Password"
                                                placeholder="Enter Password" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn primarybtn w-100">Sign in</button>
                                </form>
                            </div>
                        </Col>
                    </Row>



                    <Row className='py-2'>
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

export default SignInPage
