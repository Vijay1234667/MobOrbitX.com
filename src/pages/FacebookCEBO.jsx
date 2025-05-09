import React from 'react'
import SideWithNav from '../layout/SideWithNav'
import { Col, Container, Row } from 'react-bootstrap'

import fbcebo from "../assets/images/fbcebo.png"
import { Link } from 'react-router-dom'

const FacebookCEBO = () => {
    return (
        <>
            <main>
                <section>
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <div className="card border-0 bdr-rds23">
                                    <div className="card-body">
                                        <div>
                                            <h4 className='font-600'>Facebook Cost Explorer and Budget Optimizer</h4>
                                            <p className='font-14 text-secondary'>Cost Explorer: Uncover Hidden Opportunities in Your Facebook Ads Budget</p>
                                        </div>
                                        <Link>
                                        <img src={fbcebo} alt={fbcebo} />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default FacebookCEBO
