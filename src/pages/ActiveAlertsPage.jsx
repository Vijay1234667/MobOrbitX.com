import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import refresh from '../assets/images/refresh.svg'
import DemoDataTable from '../component/DemoDataTable'


const ActiveAlertsPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid className='px-md-3'>
                        <div className='d-flex justify-content-between mb-md-4'>
                            <h2 className='font-600'>Notification</h2>
                            <Link className=' font-14 py-2' ><img src={refresh} alt={refresh} /></Link>
                        </div>

                        <Row>
                            <Col md={12}>
                                <div className='article-editor-body-content'>
                                    <div className='bg-grey py-md-4 py-2 bdr-rds10 mb-md-3'>
                                        <div className='bg-white bdr-rds8 mx-md-4'>
                                            <ul className='d-flex justify-content-around p-0 mb-0'>
                                                <li>
                                                    <Link className='text-secondary active font-14 font-500'>
                                                        Active Alert
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='text-secondary  font-14 font-500'>
                                                        Closed Alert
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <DemoDataTable />
                </section>
            </main>
        </>
    )
}

export default ActiveAlertsPage
