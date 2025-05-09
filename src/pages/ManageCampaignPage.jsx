import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import back from '../assets/images/back.svg'
import DemoDataTable from '../component/DemoDataTable'
const ManageCampaignPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid>
                    <div className='d-flex justify-content-between mb-md-4 mb-3'>
                            <h2 className='font-600'> <img className='me-2' src={back} alt="" />Manage Campaign</h2>
                            <Link className='btn primary-success-btn font-14 py-2' >+ Add Inventories</Link>
                        </div>
                    </Container>
                    
                    <DemoDataTable />
                </section>
            </main>
        </>
    )
}

export default ManageCampaignPage
