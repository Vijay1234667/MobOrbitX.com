import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import refresh from "../assets/images/refresh.svg"
import { Link } from 'react-router-dom'
import ControlPanelAdminBox from '../component/ControlPanelAdminBox'

import all from "../assets/images/all.jpg"
import active from "../assets/images/active.jpg"
import inactive from "../assets/images/inactive.jpg"
import pedingrequests from "../assets/images/pedingrequests.jpg"
import DemoDataTable from '../component/DemoDataTable'

const ControlPanelPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-md-0'>
                    <Container fluid>
                        <div className='d-flex justify-content-between mb-md-4'>
                            <h2 className='font-600'>Settings</h2>
                            <img className='img-fluid me-3' src={refresh} alt={refresh} />
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className='article-editor-body-content'>
                                    <div className='bg-grey py-md-4 py-2 bdr-rds10 mb-md-3'>
                                        <div className='bg-white bdr-rds8 mx-md-4'>
                                            <ul className='d-flex justify-content-around p-0 mb-0'>
                                                <li>
                                                    <Link to="controlpanel" className='text-secondary active font-14 font-500'>
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


                        <Row>
                            <Col md={12} lg={8} className='mb-3 mb-lg-0'>
                                <div className="card  bdr-rds23 border-0 h-100">
                                    <div className="card-body">
                                        <div className='admin-control-panel-box-left '>
                                            <div className='bg-white mb-md-3 '>
                                                <h4 className='font-600'>Admin Control Panel</h4>
                                                <p>Tracking our path to prosperity, one dollar at a time.</p>
                                            </div>
                                            <Row className=' mb-4'>
                                                <Col md={3}>
                                                    <ControlPanelAdminBox Number="14" Status="all" Image={all} />
                                                </Col>
                                                <Col md={3}>
                                                    <ControlPanelAdminBox Number="13" Status="active" Image={active} />
                                                </Col>
                                                <Col md={3}>
                                                    <ControlPanelAdminBox Number="01" Status="inactive" Image={inactive} />
                                                </Col>
                                                <Col md={3}>
                                                    <ControlPanelAdminBox Number="01" Status="Pending Requests" Image={pedingrequests} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </Col>

                            <Col md={6} lg={4} className='mb-3 mb-lg-0'>
                                <div className="card bdr-rds23 border-0 h-100 admin-control-panel-box-right">
                                    <div className="card-body">
                                        <h4 className='font-600 mb-md-3'>Add New User Account</h4>
                                        <p>Create and manage new user accounts effortlessly. Set roles, permissions, and access controls in a few clicks for seamless onboarding.</p>
                                        <Link href="javascript:void(0)" className="btn primary-success-btn w-50 py-2 font-14 font-500">+ Add New Account</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <DemoDataTable columns={[
                        { field: 'name', header: 'Name' },
                        { field: 'email', header: 'Email' }
                    ]} />
                </section>
            </main>
        </>
    )
}

export default ControlPanelPage

