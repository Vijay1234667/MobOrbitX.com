import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import back from '../assets/images/back.svg'
import refresh from '../assets/images/refresh.svg'
import copy from '../assets/images/copy.svg'
import fmrmain from '../assets/images/fmrmain.jpg'
import DemoDataTable from '../component/DemoDataTable'
import ActivePanelRow from '../component/ActivePanelRow'

const ArticleEditorsPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid className='px-md-3'>
                        <div className='d-flex justify-content-between mb-md-4 '>
                            <h2 className='font-600'><img className='me-2' src={back} alt="" />Article Editor Page</h2>
                            <Link>
                                <img src={refresh} alt="" />
                            </Link>
                        </div>


                   <ActivePanelRow/>

                        <div className="editors-body-desc border-bottom pb-md-4 mb-4 mt-3 mt-lg-0">
                            <Row className='align-items-center'>
                                <Col md={2} xs={4} className='mb-2'>
                                    <img src={fmrmain} alt="fmr" className="img-fluid w-100" />
                                </Col>
                                <Col md={7} className='mb-3'>
                                    <h2 className="font-24 font-600">Find My Response</h2>
                                    <p><a href="javascript:void(0)" className="text-reset">www.findmyresponse.com <img src={copy} alt="copy" className="img-fluid" /></a></p>
                                    <Row>
                                        <Col md={2}>
                                            <p className="font-12 font-500 mb-2 text-nowrap">Articles
                                            </p>
                                            <h2 className="font-600">1200</h2>
                                        </Col>
                                        <Col md={2}>
                                            <p className="font-12 font-500 mb-2 text-nowrap">Categories
                                            </p>
                                            <h2 className="font-600">06</h2>
                                        </Col>
                                        <Col md={2}>
                                            <p className="font-12 font-500 mb-2 text-nowrap">Author</p>
                                            <h2 className="font-600">12</h2>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3} className='d-flex align-items-md-center justify-content-center flex-column mb-3'>
                                    <a href="javascript:void(0)" className="btn font-14 py-2 primary-success-btn mb-2"><i className="fa-solid fa-plus pe-1"></i> Add New Article</a>
                                    <p className="font-12">Want to post an article?</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    
                    <DemoDataTable columns={[{ field: 'email', header: 'Email' }]} />
                </section>
            </main>
        </>
    )
}

export default ArticleEditorsPage
