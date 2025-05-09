import React from 'react'
import SideWithNav from '../layout/SideWithNav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ManageAdAccount = () => {
  return (
    <>
      <main>
        <section className='py-3 py-lg-2'>
          <Container fluid>
            <div className='d-flex justify-content-between flex-wrap mb-md-4'>
              <h2 className='font-600'>Ad Account Management</h2>
              <Link className='btn primary-success-btn font-16 py-2' >+ Bulk Upload</Link>
              <Link className='btn primary-success-btn font-16 py-2' >+ Generate Token</Link>
            </div>
          </Container>
        </section>
      </main>

    </>
  )
}

export default ManageAdAccount
