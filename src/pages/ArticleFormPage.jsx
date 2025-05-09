import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import back from "../assets/images/back.svg"
import refresh from "../assets/images/refresh.svg"
import { Link } from 'react-router-dom'
import ActivePanelRow from '../component/ActivePanelRow'

const ArticleFormPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-md-2'>
                    <Container fluid>
                        <div className='d-flex justify-content-between'>
                            <div className='mb-md-3'>
                                <h2><img className='me-2' src={back} alt={back} />Article Editor Page</h2>
                            </div>
                            <img className='img-fluid me-md-3' src={refresh} alt={refresh} />
                        </div>
                        
                        <ActivePanelRow/>
                  

                        <div className="add-article mb-4">
                            <div className="card border-0 bdr-rds20">
                                <div className="card-body">
                                    <h2 className="font-22 font-600 mb-4 pb-md-2">Add New Article</h2>
                                    <form className="add-article-form">
                                        <Row>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="title" className="form-label">Title</label>
                                                    <textarea className="form-control" placeholder="Enter Title" id="title"></textarea>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="title" className="form-label">Title Image URL</label>
                                                    <textarea className="form-control" placeholder="Enter Title" id="title"></textarea>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="title" className="form-label">Description 1</label>
                                                    <textarea className="form-control" placeholder="Enter Title" id="title"></textarea>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="title" className="form-label">Description 2</label>
                                                    <textarea className="form-control" placeholder="Enter Title" id="title"></textarea>
                                                </div>
                                            </Col>

                                            <Col md={12}>
                                                <div className="mb-4">
                                                    <label for="pageUrl" className="form-label">Page URL</label>
                                                    <input type="text" className="form-control" id="pageUrl" placeholder="Enter url" />
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="categories" className="form-label">Categories</label>
                                                    <select className="form-select" aria-label="categories" id="categories">
                                                        <option selected="">Select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="author" className="form-label">Author</label>
                                                    <select className="form-select" aria-label="author" id="author">
                                                        <option selected="">Select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="userId" className="form-label">User Id</label>
                                                    <input type="text" className="form-control" id="userId" placeholder="Enter User Id" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="totalComments" className="form-label">Total Comments</label>
                                                    <input type="text" className="form-control" id="totalComments" placeholder="Enter Total Comments" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="readTime" className="form-label">Read Time</label>
                                                    <input type="text" className="form-control" id="readTime" placeholder="Enter Read Time" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="totalViews" className="form-label">Total Views</label>
                                                    <input type="text" className="form-control" id="totalViews" placeholder="Enter Total Views" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="metaTitle" className="form-label">Meta Title</label>
                                                    <input type="text" className="form-control" id="metaTitle" placeholder="Enter Meta Title" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="metaDesc" className="form-label">Meta Description</label>
                                                    <input type="text" className="form-control" id="metaDesc" placeholder="Enter Meta Description" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="metaKeyword" className="form-label">Meta Keywords</label>
                                                    <input type="text" className="form-control" id="metaKeyword" placeholder="Enter Meta Keywords" />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-4">
                                                    <label for="publishDate" className="form-label">Publish Date</label>
                                                    <input type="text" className="form-control" id="publishDate" placeholder="mm/dd/yyyy" />
                                                </div>
                                            </Col>
                                            <Col sm={6} className='mb-3'>
                                                <a href="javascript:void(0)" className="btn border border-black w-100 py-2">Back</a>
                                            </Col>
                                            <Col sm={6}>
                                                <a href="javascript:void(0)" className="btn primary-success-btn w-100 py-2">Publish</a>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

        </>
    )
}

export default ArticleFormPage
