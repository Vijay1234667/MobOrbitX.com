import React, { useState } from 'react';
import { Col, Container, Dropdown, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

// icons
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MediationOutlinedIcon from '@mui/icons-material/MediationOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// images
import logo from '../assets/images/signin/logo.svg';
import sidebardashboard from "../assets/images/sidebardashboard.svg";
import switchaccount from '../assets/images/switchaccount.svg';
import latesttrends from "../assets/images/latesttrends.svg";
import notificationbell from "../assets/images/notificationbell.svg";
import activeprofile from "../assets/images/activeprofile.svg";

const SideWithNav = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };



    const reportSections = [
        {
            icon: <MediationOutlinedIcon className='fs-5 me-2 ms-2' />,
            title: "System1 Reports",
            links: [
                { label: "Overview", to: "systemreport/overview" },
                { label: "Hourly", to: "systemreport/hourly" },
                { label: "Hourly Campaign", to: "systemreport/hourlycampaign" },
                { label: "Timeframe", to: "systemreport/timeframereport " },
                { label: "Campaign", to: "systemreport/campaign" },
                { label: "DSP", to: "systemreport/dsp" },
            ],
        },
        {
            icon: <MediationOutlinedIcon className='fs-5 me-2 ms-2' />,
            title: "Inmobi (RSOC)",
            links: [
                { label: "Articles", to: "/report" },
                { label: "Keywords", to: "/report" },
                { label: "Real Time Raw Data", to: "/report" },
                { label: "Real Time Article Data", to: "/report" },
            ],
        },
        {
            icon: <MediationOutlinedIcon className='fs-5 me-2 ms-2' />,
            title: "System1(Chillofy)",
            links: [
                { label: "Overview", to: "system1/overview" },
                { label: "Hourly", to: "system1/hourly" },
                { label: "Hourly Campaign", to: "system1/hourlycampaign" },
                { label: "Timeframe", to: "system1/timeframe" },
                { label: "Campaign", to: "system1/campaign" },
                { label: "DSP", to: "system1/dsp" },
            ],
        },
        {
            icon: <EventNoteOutlinedIcon className='fs-5 me-2 ms-2' />,
            title: "Ads.com Reports",
            links: [
                { label: "Overview", to: "adscom/overview" },
                { label: "Hourly", to: "adscom/hourly" },
                { label: "Hourly Campaign", to: "/adscom/hourlycampaign" },
                { label: "Timeframe", to: "/adscom/timeframe" },
                { label: "Campaign(FB)", to: "/adscom/campaign" },
                { label: "Country", to: "/adscom/country" },
                { label: "Term", to: "/adscom/term" },
            ],
        },
        {
            icon: <EventNoteOutlinedIcon className='fs-5 me-2 ms-2' />,
            title: "Reports",
            links: [
                { label: "Performance", to: "/report" },
                { label: "Inventory", to: "/report" },
                { label: "Cost VS Revenue", to: "/report" },
            ],
        },
    ];

    const navItems = [
        { label: "Supermetric Spends", to: "/supermetricslist", icon: <EventNoteOutlinedIcon className='fs-5 me-2' /> },
        { label: "Domains", to: "/domains", icon: <EditCalendarOutlinedIcon className='fs-5 me-2' /> },
        { label: "Facebook CEBO", to: "/cebo", icon: <EditCalendarOutlinedIcon className='fs-5 me-2' /> },
    ];


    return (
        <>
            <Navbar expand="lg" className="mb-md-4 bg-white p-0 mainnavbar fixed-top">
                <Container fluid className="p-0 mb-md-0 mb-3">
                    <Row className="justify-content-between align-items-center w-100">
                        <Col md={12} xs={12} lg={3} xl={3}>
                            <div className="bg-light-blue navbar-trends">
                                <div className="d-flex align-items-center">
                                    <img className='img-fluid me-2' src={latesttrends} alt={latesttrends} />
                                    <div>
                                        <h6 className="font-600 mb-1">Latest Trends</h6>
                                        <p className="font-9 mb-0">System1 : 28 August, 2024 : 15:30 PM</p>
                                        <p className="font-9 mb-0">Adscom: 28 August, 2024 : 15:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={12} xs={12} lg={5} xl={6}>
                            <div className="marquee d-flex align-items-center mb-0 text-nowrap ps-0 py-3">
                                <Marquee speed={90}>
                                    <ul>
                                        <li className="marquee-item">
                                            Lorem ipsum dolor sit.
                                            <span className="bordericon increaseicon text-success font-12 ms-2">52%</span>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li className="marquee-item">
                                            Lorem ipsum dolor sit.
                                            <span className="bordericon decreaseicon text-danger font-12 ms-2">12%</span>
                                        </li>
                                    </ul>
                                </Marquee>
                            </div>
                        </Col>

                        <Col md={6} xs={8} lg={4} xl={3}>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="me-3 border-end border-black border-start ps-1 pe-1">
                                    <img src={notificationbell} alt="Notification Bell" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="transparent" className="border-0 d-flex align-items-center">
                                        <div className="me-3">
                                            <img src={activeprofile} alt={activeprofile} />
                                        </div>
                                        <div className="me-2 text-start">
                                            <h4 className="font-12  text-secondary mb-1">Kunal Kothari</h4>
                                            <p className="font-10 mb-0 text-secondary">Super Admin</p>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="bg-dark">
                                        {[
                                            { to: "/controlpanel", label: "Control Panel" },
                                            { to: "/login", label: "Setting" },
                                            { to: "/login", label: "Logout" }
                                        ].map((item, index) => (
                                            <Dropdown.Item key={index} className="font-14 text-white">
                                                <Link to={item.to} className="text-white">{item.label}</Link>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>

                        <Col md={1} xs={4} lg={6} className="d-lg-none text-end">
                            <button onClick={toggleSidebar} className="btn toggle-menu-open-btn border-0 shadow-none">
                                {sidebarVisible ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            <aside className={`left-sidebar-section py-3 ${sidebarVisible ? 'show' : ''}`}>
                <Container>
                    <div className='sidebar'>
                        <div className='sidebar-menu'>
                            <div className='bdr-bottom pb-3 mb-3'>
                                <Link to="/"><img className='img-fluid' src={logo} alt={logo} /></Link>
                            </div>
                            <div>
                                <select className="form-select bg-transparent text-white border border-secondary font-14 mb-md-3 mb-2">
                                    <option value="UTC" className='bg-dark'>UTC</option>
                                    <option value="IST" className='bg-dark'>IST</option>
                                    <option value="EST" className='bg-dark'>EST</option>
                                </select>
                            </div>


                            <h6 className='text-warning font-10'>Main</h6>
                            <div className='sidebar-menu-list bdr-bottom mb-3'>
                                <Link to="/" className='sidebar-menu-list-item btn mb-2'>
                                    <img className='img-fluid me-2' src={sidebardashboard} alt="dashboard" />Dashboard
                                </Link>

                                {reportSections.map((section, i) => (
                                    <div className='sidebar-menu-list-item-accordian-body mb-3' key={i}>
                                        <Accordion>
                                            <Accordion.Item className='border-0' eventKey={String(i)}>
                                                <Accordion.Header>
                                                    {section.icon}
                                                    {section.title}
                                                </Accordion.Header>
                                                <Accordion.Body className='p-0 sidebar-menu-list-white-line-body'>
                                                    <ul className="list-unstyled sidebar-menu-list-white-line ps-4">
                                                        {section.links.map((link, j) => (
                                                            <li key={j}>
                                                                <Link to={link.to} className="sidebar-menu-list-item-accordian font-12 text-start">
                                                                    {link.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                ))}


                                {navItems.map((item, index) => (
                                    <Link to={item.to} key={index} className='sidebar-menu-list-item btn mb-2'>
                                        {item.icon}{item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className='sidebar-menu-list bdr-bottom mb-3'>
                                <h6 className='text-warning font-10'>Campaign</h6>
                                <Link to="/searchtoken" className='sidebar-menu-list-item btn mb-2'>
                                    <SettingsRoundedIcon className='fs-5 me-2' />Search Tokens
                                </Link>

                                <Link to="/manageadaccount" className='sidebar-menu-list-item btn mb-3'>
                                    <ControlPointRoundedIcon className='fs-5 me-2' />Manage AdAccount
                                </Link>
                            </div>

                            <div className="sidebar-menu-list dark-bg  rounded py-2 px-2 ">
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <h6 className='font-10 text-warning mb-0'>SWITCH ACCOUNT</h6>
                                    <img className='img-fluid mb-0' src={switchaccount} alt={switchaccount} />
                                </div>
                                <div className="users sidebar-menu-list-users">
                                    {['Kunal Kothari', 'Monica Davis', 'Ross Geller', 'Parth', 'Mayank'].map(user => (
                                        <div key={user} className="form-check d-flex align-items-center justify-content-between ps-0 w-100 mb-3">
                                            <label className="form-check-label w100 text-ellipses" htmlFor={user}>
                                                <AccountCircleOutlinedIcon className='fs-5 me-2' />{user}
                                            </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={user} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='sidebar-menu-list '>
                                <Link to="/login" className='sidebar-menu-list-item btn'>
                                    <LoginRoundedIcon className='fs-5 me-2' />Logout Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </aside>
        </>
    )
}

export default SideWithNav
