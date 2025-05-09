import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import refresh from "../assets/images/refresh.svg"
import checkcircle from "../assets/images/checkcircle.svg"
import resetpassword from "../assets/images/resetpassword.jpg"
import ActivePanelRow from '../component/ActivePanelRow'

const ChangePasswordPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid>
                        <div className='d-flex justify-content-between mb-md-3'>
                            <h2 className='font-600'>Settings</h2>
                          <img className='img-fluid me-3' src={refresh} alt={refresh} />
                        </div>

                 <ActivePanelRow/>

                        <div className="change-password-container  mb-4">
                            <div className="card border-0 bdr-rds10">
                                <div className="card-body">
                                    <div className="password-head">
                                        <h4 className="font-600">Change Password</h4>
                                        <p className="mb-0">To change your password, please fill in the fields below.</p>
                                    </div>
                                    <Row>
                                        <Col md={6} className='mb-3'>
                                            <div className="password-left">
                                                <img src={resetpassword} alt={resetpassword} className="img-fluid w-100"/>
                                            </div>
                                        </Col>
                                        <Col md={6} className='mb-3'>
                                            <div className="password-right">
                                                <div className="toast align-items-center d-block mb-4 passwordToast" role="alert" aria-live="assertive" aria-atomic="true" id="passToast">
                                                    <div className="d-flex">
                                                        <div className="toast-body">
                                                            Password successfully updated.
                                                        </div>
                                                        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                                <form className="cst-form">
                                                    <div className="mb-4">
                                                        <label for="oldPassword" className="form-label d-flex align-items-center">Old Password
                                                            <img src={checkcircle} alt="check" className="img-fluid ps-1"/></label>
                                                        <div className="d-flex align-items-center passwordInput">
                                                            <input type="password" className="form-control" id="oldPassword" placeholder="Enter your current password"/>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="newPassword" className="form-label">New Password</label>
                                                        <div className="d-flex align-items-center passwordInput">
                                                            <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password"/>
                                                         
                                                        </div>
                                                    </div>
                                                    <p className="mb-3 font-12 text-fail">Please add all necessary characters to create safe
                                                        password.</p>
                                                    <Row className='cst-form-errors mb-2'>
                                                        <div className="col-sm-6">
                                                            <p>Minimum characters 8</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>Maximum characters 50</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>One uppercase character</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>One lowercase character</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>One special character</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>One number</p>
                                                        </div>
                                                    </Row>
                                                    <div className="mb-4 pb-md-2">
                                                        <label for="newPassword" className="form-label">Confirm
                                                            Password</label>
                                                        <div className="d-flex align-items-center passwordInput">
                                                            <input type="password" className="form-control" id="newPassword" placeholder="Re-enter your new password"/>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="btn primary-success-btn py-2 w-100 mb-4">Change
                                                        Password</button>
                                                    <p className="text-center">Wait, I don’t want to change password <span><a href="javascript:void(0)" className="text-decoration-underline ps-3 text-nowrap">Back to Dashboard</a></span>
                                                    </p>
                                                </form>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default ChangePasswordPage
