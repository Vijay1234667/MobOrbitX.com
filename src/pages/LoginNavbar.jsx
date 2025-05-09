import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// icon
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import PhoneIcon from '@mui/icons-material/Phone';
// images
import logo from "../assets/images/signin/logo.svg"
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <main className='ms-0 mt-0'>
            <Navbar expand="lg" className="px-md-1 py-3 py-md-2 signin-Top-navbar top-0 position-absolute w-100">
            <Container fluid>
                <Navbar.Brand href="/"><img className='img-fluid' src={logo} alt={logo} width={200} /></Navbar.Brand>
                <Navbar.Toggle className='shadow-none border-0' aria-controls="navbarScroll">
                    <MenuIcon className='text-white fs-1' />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 px-md-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className=' font-500 font-15 me-md-4 me-0' to="/about"><GroupIcon className='me-2 fs-5' />About</Link>
                        <Link className=' font-500 font-15 ' to="/contact"><PhoneIcon className='me-1 fs-5' />Contact Us</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </main>
    )
}

export default LoginNavbar
