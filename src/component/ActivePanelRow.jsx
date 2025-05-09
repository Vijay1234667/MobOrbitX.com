import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActivePanelRow = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <div className='article-editor-body-content'>
                        <div className='bg-grey py-md-4 py-2 bdr-rds10 mb-md-3'>
                            <div className='bg-white bdr-rds8 mx-md-4 mx-2'>
                                <ul className='d-flex flex-wrap justify-content-around p-0 mb-0'>
                                    <li>
                                        <Link className='text-secondary font-14 font-500'>
                                            Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='text-secondary active font-14 font-500'>
                                            Control Panel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='text-secondary font-14 font-500'>
                                            Switch Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='text-secondary font-14 font-500 '>
                                            Performance Report
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='text-secondary font-14 font-500 '>
                                            Change Password
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ActivePanelRow
