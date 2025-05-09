import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import InsightsDetailsBox from './InsightsDetailsBox';
import UserGrowthChart from './UserGrowthChart'

// images

import greenup from '../assets/images/greenup.svg'

const ReportPage = ({ MainReportHeading, reportData }) => {
    return (
        <main>
            <section>
                <Container fluid>
                    <section className='py-md-2 py-3'>
                        <h2 className='font-600 mb-4'>{MainReportHeading}</h2>
                        <Row className="px-md-3">
                            <Col md={12} lg={7}>
                                <Row className="bg-white py-2 bdr-rds10 mb-4 mb-md-4">
                                    {reportData?.map((item, index) => (
                                        <Col key={index} md={6} lg={6} xl={4} className="mb-2">
                                            <InsightsDetailsBox
                                                InsightsTitle={item.title}
                                                InsightsPrice={item.value}
                                                greenupArrow={greenup}
                                                Image={item.image}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            
                            <Col md={12} lg={5} className="mb-3">
                                <div className="card bdr-rds20 border-0">
                                    <div className="card-body">
                                        <UserGrowthChart />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </section>
        </main>
    );
}


export default ReportPage
