import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InventoriesArticleDetailsBox from '../component/InventoriesArticleDetailsBox'

const InventoriesOverview = () => {
    return (
        <>
            <main>
                <section>
                    <Container fluid className='px-md-3'>
                        <div className='d-flex justify-content-between mb-md-4'>
                            <h2 className='font-600'>Overview</h2>
                            <Link className='btn primary-success-btn font-14 py-2' >+ Add Inventories</Link>
                        </div>

                        <div className='inventories'>
                            <Row>
                                <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                               <Col md={6} lg={4} className='mb-md-4 mb-3'>
                                    <InventoriesArticleDetailsBox />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default InventoriesOverview
