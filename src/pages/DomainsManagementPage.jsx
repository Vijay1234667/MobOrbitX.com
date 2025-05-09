import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DomainsManagementPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid>
                        <div className='d-flex justify-content-between flex-wrap mb-md-4'>
                            <h2 className='font-600'>Domain Management</h2>
                            <Link className='btn primary-success-btn font-14 py-2' >Compare Categories</Link>
                        </div>
                    </Container>

                    <Row>
                            <Col md={12}>
                                <div className='article-editor-body-content'>
                                    <div className='bg-grey py-md-4 py-2 bdr-rds10 mb-md-3'>
                                        <div className='bg-white bdr-rds8 mx-md-4'>
                                            <ul className='d-flex justify-content-around p-0 mb-0'>
                                                <li>
                                                    <Link className='text-secondary active font-14 font-500'>
                                                        Domain
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='text-secondary  font-14 font-500'>
                                                        Category
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='text-secondary  font-14 font-500'>
                                                        Subcategory
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                </section>
            </main>

        </>
    )
}

export default DomainsManagementPage
