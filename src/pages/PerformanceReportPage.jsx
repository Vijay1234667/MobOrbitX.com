import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import refresh from "../assets/images/refresh.svg"
import TreeMapChartPage from '../component/TreeMapChartPage'


const PerformanceReportPage = () => {
    return (
        <>
            <main>
                <section>
                    <Container fluid>
                        <div className='d-flex justify-content-between mb-md-4'>
                            <h2 className='font-600'>Settings</h2>
                            <Link><img className='img-fluid me-3' src={refresh} alt={refresh} /></Link>
                        </div>
                         <Row>
                                                 <Col md={12}>
                                                     <div className='article-editor-body-content'>
                                                         <div className='bg-grey py-md-4 py-2 bdr-rds10 mb-md-3'>
                                                             <div className='bg-white bdr-rds8 mx-md-4'>
                                                                 <ul className='d-flex justify-content-around p-0 mb-0'>
                                                                     <li>
                                                                         <Link to="/controlpanel" className='text-secondary active font-14 font-500'>
                                                                            Manages Users
                                                                         </Link>
                                                                     </li>
                                                                     <li>
                                                                         <Link to="/performanceReport" className='text-secondary  font-14 font-500'>
                                                                            Performance Report
                                                                         </Link>
                                                                     </li>
                                                                     <li>
                                                                         <Link to="/switchAccount" className='text-secondary  font-14 font-500'>
                                                                            Switch Account
                                                                         </Link>
                                                                     </li>
                                                                 </ul>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </Col>
                                             </Row>
                        <TreeMapChartPage/>
                    
                    </Container>
                </section>
            </main>
        </>
    )
}

export default PerformanceReportPage
