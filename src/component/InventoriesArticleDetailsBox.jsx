import React from 'react'

import fmr from '../assets/images/fmr.jpg'
import copy from '../assets/images/copy.svg'
import Dropdown from 'react-bootstrap/Dropdown';

const InventoriesArticleDetailsBox = () => {
    return (
        <>
            <div className="card border-0 bdr-rds10">
                <div className="card-body">
                    <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                        <div className="inventories-head-left d-flex align-items-center">
                            <img src={fmr} alt="fmr" className="img-fluid pe-2" />
                            <div className="inventories-head-left-desc">
                                <h6 className="font-600 mb-1">Find My Response</h6>
                                <p className="font-10 mb-0">www.findmyresponse.com <a href="javascript:void(0)"><img src={copy} alt="copy" className="img-fluid ps-1" /></a></p>
                            </div>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle className='bg-transparent border-0 text-dark' >
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="inventories-body border-bottom mb-3 pb-2">
                        <div className="row">
                            <div className="col-4">
                                <p className="font-13 font-500 mb-2 text-nowrap text-secondary">Articles</p>
                                <h2 className="font-600">1200</h2>
                            </div>
                            <div className="col-4">
                                <p className="font-13 font-500 mb-2 text-nowrap text-secondary">Categories</p>
                                <h2 className="font-600">06</h2>
                            </div>
                            <div className="col-4">
                                <p className="font-13 font-500 mb-2 text-nowrap text-secondary">Author</p>
                                <h2 className="font-600">12</h2>
                            </div>
                        </div>
                    </div>
                    <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                        <p className="font-12 mb-2">Want to post an article?</p>
                        <a href="javascript:void(0)" className="btn  primary-success-btn py-2 px-3 mb-2 font-14">View More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InventoriesArticleDetailsBox
