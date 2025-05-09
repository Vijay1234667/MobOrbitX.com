import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import back from "../assets/images/back.svg"

const AssignUserPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-md-2'>
                    <Container fluid>
                        <div>
                            <h2 className='font-600  mb-md-3'><img className='me-2' src={back} alt="" />Assign Users</h2>
                        </div>
                        <div className="assign-user-body-content mb-4">
                            <div className="card border-0 bdr-rds23 shadow-sm">
                                <div className="card-body">
                                    <h4 className="font-600">Manage user</h4>
                                    <p>Assign or remove users from this account.</p>
                                    <form className="add-article-form">
                                        <Row>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="metaDesc" className="form-label">Platform</label>
                                                    <input type="text" className="form-control" id="metaDesc" placeholder="Facebook" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="metaKeyword" className="form-label">Ad Account Name</label>
                                                    <input type="text" className="form-control" id="metaKeyword" placeholder="Account 5" />
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <div className="mb-4">
                                                    <label for="title" className="form-label">Username</label>
                                                    <select className="form-select" aria-label="author" id="author">
                                                        <option selected="">Select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col sm={3} className='align-items-center d-flex'>
                                                <a href="javascript:void(0)" className="btn primary-success-btn   py-2">Assign Users</a>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </div>
                      
                    </Container>
                </section>
            </main>
        </>
    )
}

export default AssignUserPage
