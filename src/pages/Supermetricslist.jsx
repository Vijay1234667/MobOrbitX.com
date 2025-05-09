import React from 'react'
import SideWithNav from '../layout/SideWithNav'
import { Col, Container, Row } from 'react-bootstrap'
import DemoDataTable from '../component/DemoDataTable'

const Supermetricslist = () => {
    return (
        <>
            <main>
                <>
                    <section>
                        <Container fluid>
                            <Row>
                                <Col md={5}>
                                    <div className="d-flex">
                                        <input
                                            type="date"
                                            className="form-control me-2 py-2 font-12"
                                            placeholder="Enter text"
                                        />
                                        <button className="btn primary-success-btn font-14" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <DemoDataTable columns={[
                                { field: 'name', header: 'Name' },
                                { field: 'email', header: 'Email' }
                            ]} />
                        </Container>
                    </section>
                </>
            </main>
        </>
    )
}

export default Supermetricslist
