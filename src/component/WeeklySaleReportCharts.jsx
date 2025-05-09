import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserGrowthChart from '../component/UserGrowthChart'
import UserPerformanceLineChart from './UserPerformanceLineChart'

const WeeklySaleReportCharts = () => {
    return (
        <>
            <section className='WeeklySaleReportCharts'>
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <div className=' bg-white bdr-rds23 mb-3 py-4 '>
                                <div className='px-md-4 px-2 mb-md-4'>
                                    <h2 className='font-600 '>Total Revenue</h2>
                                    <p>A comparative analysis of total revenue generated across platform.s</p>
                                </div>
                                <UserGrowthChart />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=' bg-white bdr-rds23 mb-3 py-4 '>
                                <div className='px-md-4 px-3 mb-md-4'>
                                    <h2 className='font-600 '>Performance Comparison</h2>
                                    <p>Analyzing key metrics across ad campaigns and system performance.</p>
                                </div>
                               <UserPerformanceLineChart/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WeeklySaleReportCharts
