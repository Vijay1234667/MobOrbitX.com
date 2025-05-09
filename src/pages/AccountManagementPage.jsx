import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AccountManagementPage = () => {
    return (
        <>
            <main>
                <section className='py-3 py-lg-0'>
                    <Container fluid>
                        <div className='d-flex justify-content-between flex-wrap mb-md-4'>
                            <h2 className='font-600'>Ad Account Management</h2>
                            <Link className='btn primary-success-btn font-14 py-2' >+ Add Account</Link>
                        </div>
                    </Container>

                </section>
            </main>

        </>
    )
}

export default AccountManagementPage
