import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InsightsDetailsBox from '../component/InsightsDetailsBox'
import RpcRevenueGaugeBox from '../component/RpcRevenueGaugeBox'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom'
import ModePiaGraph from '../component/ModePiaGraph'
import TreeMapChartPage from '../component/TreeMapChartPage'
import WeeklySaleReportCharts from '../component/WeeklySaleReportCharts'
import DemoDataTable from '../component/DemoDataTable'
import UserGrowthChart from '../component/UserGrowthChart'



// image
import revenue from '../assets/images/revenue.svg'
import rpc from '../assets/images/rpc.svg'
import clicks from '../assets/images/clicks.svg'
import searches from '../assets/images/searches.svg'
import greenup from '../assets/images/greenup.svg'
import secondarystartvector from '../assets/images/secondarystartvector.svg'
import refresh from '../assets/images/refresh.svg'

// icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const DashboardPage = () => {
  return (
    <>
      <main>
        <section className='paddingTopBtm py-md-0 py-3'>
          <Container fluid>
            <div className='mb-md-3 mb-3 d-flex justify-content-between mt-3 mt-md-0'>
              <h2 className='font-600'>Dashboard</h2>
              <Link><img src={refresh} alt={refresh} /></Link>
            </div>

            <Row>
              <Col md={12}>
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className= "tab-container-wrapper mb-3 justify-content-around bg-body-secondary py-4 bdr-rds23">
                  <Tab eventKey="home" title="Overview">
                    <div className='insights bg-white px-md-3 px-3 bdr-rds23 py-3 mb-md-4 mb-3'>
                      <div className='insights-body-container'>
                        <Row className='justify-content-between'>
                          <Col md={6}>
                            <div>
                              <h4 className='font-600'>System1 Report</h4>
                              <p>Daily performance comparison at a glance.</p>
                            </div>
                          </Col>
                          <Col md={6} className='text-end'>
                            <div className='mb-3 mb-md-1'>
                              <span className='text-secondary font-500'><CalendarMonthIcon className='fs-5 text-dark me-1' />Today vs Yesterday</span>
                            </div>
                          </Col>
                        </Row>
                        <Row className='mb-1 versus-parent'>
                          <Col md={6} lg={6}>
                            <Row>
                              <Col md={12} className='mb-2 text-center ps-0'>
                                <Link className='btn font-12 font-600 border w-100'>
                                  <img src={secondarystartvector} alt={secondarystartvector} /> Today Insights <img src={secondarystartvector} alt={secondarystartvector} />
                                </Link>
                              </Col>

                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Revenue($)" InsightsPrice="0.20" Image={revenue} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="RPC($)" InsightsPrice="0.30" Image={rpc} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Clicks" InsightsPrice="220" Image={clicks} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="Searches" InsightsPrice="30" Image={searches} greenupArrow={greenup} />
                              </Col>
                            </Row>
                          </Col>

                          <Col md={6} lg={6}>
                            <Row>
                              <Col md={12} className='mb-2 text-center pe-0'>
                                <Link className='btn font-12 font-600 border w-100'>
                                  <img src={secondarystartvector} alt={secondarystartvector} /> Yesterday Insights <img src={secondarystartvector} alt={secondarystartvector} />
                                </Link>
                              </Col>

                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 '>
                                <InsightsDetailsBox InsightsTitle="Revenue($)" InsightsPrice="0" Image={revenue} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="RPC($)" InsightsPrice="0.7" Image={rpc} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="Clicks" InsightsPrice="10" Image={clicks} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Searches" InsightsPrice="1.33" Image={searches} greenupArrow={greenup} />
                              </Col>
                            </Row>
                          </Col>
                          <span className="rpc-versus bg-white text-dark p-2 rounded">v/s</span>
                        </Row>
                      </div>
                    </div>
                    
                    <div className='insights bg-white px-md-3 px-3 bdr-rds23 py-3 mb-md-4 mb-3'>
                      <div className='insights-body-container'>
                        <Row className='justify-content-between'>
                          <Col md={6}>
                            <div>
                              <h4 className='font-600'>Ads.com</h4>
                              <p>Daily performance comparison at a glance.</p>
                            </div>
                          </Col>
                          <Col md={6} className='text-end'>
                            <div className='mb-3 mb-md-1'>
                              <span className='text-secondary font-500'><CalendarMonthIcon className='fs-5 text-dark me-1' />Today vs Yesterday</span>
                            </div>
                          </Col>
                        </Row>
                        <Row className='mb-1 versus-parent'>
                          <Col md={6} lg={6}>
                            <Row>
                              <Col md={12} className='mb-2 text-center ps-0'>
                                <Link className='btn font-12 font-600 border w-100'>
                                  <img src={secondarystartvector} alt={secondarystartvector} /> Today Insights <img src={secondarystartvector} alt={secondarystartvector} />
                                </Link>
                              </Col>

                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Revenue($)" InsightsPrice="0.3" Image={revenue} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="RPC($)" InsightsPrice="10" Image={rpc} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Clicks" InsightsPrice="0.9" Image={clicks} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="Searches" InsightsPrice="20" Image={searches} greenupArrow={greenup} />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={6} lg={6}>
                            <Row>
                              <Col md={12} className='mb-2 text-center pe-0'>
                                <Link className='btn font-12 font-600 border w-100'>
                                  <img src={secondarystartvector} alt={secondarystartvector} /> Yesterday Insights <img src={secondarystartvector} alt={secondarystartvector} />
                                </Link>
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="Revenue($)" InsightsPrice="0" Image={revenue} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="RPC($)" InsightsPrice="120" Image={rpc} greenupArrow={greenup} />
                              </Col>

                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2'>
                                <InsightsDetailsBox InsightsTitle="Clicks" InsightsPrice="0.7" Image={clicks} greenupArrow={greenup} />
                              </Col>
                              <Col md={6} lg={6} xl={6} xs={12} className='mb-3 mb-md-2 p-0'>
                                <InsightsDetailsBox InsightsTitle="Searches" InsightsPrice="0" Image={searches} greenupArrow={greenup} />
                              </Col>
                            </Row>
                          </Col>
                          <span className="rpc-versus bg-white text-dark p-2 rounded">v/s</span>

                        </Row>
                      </div>
                    </div>
                    <WeeklySaleReportCharts />
                    <section className='rpc rpc-wrapper'>
                      <Container fluid>
                        <div className='px-md-4 px-3 bg-white bdr-rds23 mb-3 py-4 '>
                          <Row className=''>
                            <Col md={12}>
                              <div className='mb-md-4'>
                                <h4 className='font-600 '>Revenue & RPC</h4>
                                <p>Revenue at a glance: insights that inspire action.</p>
                              </div>
                            </Col>

                            <Row>
                              <Col md={12} lg={6} className='mb-3 '>
                                <Row className='versus-parent'>
                                  <span className="rpc-versus bg-white text-dark p-2 rounded">v/s</span>

                                  <Col md={6} lg={6} className='p-0'>
                                    <RpcRevenueGaugeBox Days="Yesterday" Amount="$707.9" greenupArrow={greenup} />
                                  </Col>
                                  <Col md={6} lg={6}>
                                    <RpcRevenueGaugeBox Days="Today" Amount="$707.9" greenupArrow={greenup} />
                                  </Col>
                                </Row>
                              </Col>
                              <Col md={12} lg={6} >
                                <Row className='versus-parent'>
                                  <span className="rpc-versus bg-white text-dark p-2 rounded">v/s</span>
                                  <Col md={6} lg={6} >
                                    <RpcRevenueGaugeBox Days="Yesterday" Amount="$707.9" greenupArrow={greenup} />
                                  </Col>
                                  <Col md={6} lg={6} className='p-0'>
                                    <RpcRevenueGaugeBox Days="Today" Amount="$707.9" greenupArrow={greenup} />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Row>
                        </div>
                      </Container>
                    </section>

                    <section className='performance-Report-section'>
                      <Container fluid>
                        <div className='px-md-4 px-3  bg-white bdr-rds23 mb-3 py-4 '>
                          <Row>
                            <Col md={12}>
                              <div className='mb-md-4'>
                                <h4 className='font-600 '>Performance Report</h4>
                                <p>Tracking our path to prosperity, one dollar at a time.</p>
                              </div>
                            </Col>
                          </Row>
                          <TreeMapChartPage />
                        </div>
                      </Container>
                    </section>

                    <section>
                      <Container fluid>
                        <Row>
                          <Col md={6}>
                            <div className=' bg-white bdr-rds23 mb-3 py-4 '>
                              <div className='px-md-4 px-3 mb-md-4'>
                                <h2 className='font-600 '>Top Performance Domain</h2>
                                <p>A visual breakdown of domain performance across ad campaigns.</p>
                              </div>
                              <ModePiaGraph />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className=' bg-white bdr-rds23 mb-3 py-4 '>
                              <div className='px-md-4 px-3 mb-md-4'>
                                <h2 className='font-600 '>Top Performance Campaigns</h2>
                                <p>A breakdown of campaign performance based on key metrics.</p>
                              </div>
                              <ModePiaGraph />
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </section>
                  </Tab>
                  <Tab eventKey="profile" title="Insights">
                    <div>
                      <Row className='mb-4'>
                        <Col lg={3} md={6} xs={6}>
                          <div className='d-flex align-items-baseline'>
                            <h4 className=' me-2 font-12 border-0'>Date:</h4>
                            <div>
                              <select className="form-select font-14 bdr-normal" aria-label="categories" id="categories">
                                <option selected="">Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className='mb-3 '>
                        <Col lg={3} md={3} xs={12} className='mb-2'>
                          <div className='d-flex align-items-baseline'>
                            <h4 className=' me-2 font-12 border-0'>Filter:</h4>
                            <div className='w-100'>
                              <select className="form-select font-14 bdr-normal" aria-label="categories" id="categories">
                                <option selected="">Campaign</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} md={3} xs={6}>
                          <div className='d-flex align-items-center'>
                            <div className="mb-4 w-100">
                              <select className="form-select font-14 bdr-normal" aria-label="categories" id="categories">
                                <option selected="">Type value</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} xs={6}>
                          <div className='d-flex align-items-center'>
                            <div className="mb-4 w-100">
                              <select className="form-select font-14 bdr-normal" aria-label="categories" id="categories">
                                <option selected="" className=''>Visit</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                          <Link className='btn primary-success-btn w-75 font-12 py-2'>Submit</Link>
                        </Col>
                      </Row>
                      <Row className=''>
                        
                        <Tabs
                          transition={false}
                          id="noanim-tab-example"
                          className="mb-3 justify-content-around text-center">
                          <Tab className='' eventKey="PerformanceData" title="Performance Data">
                            <Row className='justify-content-center text-center'>

                              <Col md={12} lg={6} className='mb-3'>
                                <DemoDataTable columns={[
                                  { field: 'name', header: 'Name' },
                                  { field: 'email', header: 'Email' }
                                ]} />
                              </Col>
                              <Col md={12} lg={6}>
                                <DemoDataTable columns={[
                                  { field: 'name', header: 'Name' },
                                  { field: 'email', header: 'Email' }
                                ]} />
                              </Col>

                            </Row>
                          </Tab>
                          <Tab eventKey="profile" title="Visual Analytics">
                            <Row className='justify-content-center text-center'>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <UserGrowthChart />
                                  </div>
                                </div>
                              </Col>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <UserGrowthChart />
                                  </div>
                                </div>
                              </Col>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <UserGrowthChart />
                                  </div>
                                </div>
                              </Col>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <UserGrowthChart />
                                  </div>
                                </div>
                              </Col>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <ModePiaGraph />
                                  </div>
                                </div>
                              </Col>
                              <Col md={6} className='mb-3'>
                                <div className="card border-0  bdr-rds20">
                                  <div className="card-body">
                                    <ModePiaGraph />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Tab>
                        </Tabs>
                      </Row>
                    </div>

                  </Tab>
                  <Tab eventKey="contact" title="Suggestion" disabled>
                    Tab content for Contact
                  </Tab>
                </Tabs>
              </Col>
            </Row>


          </Container>
        </section>




      </main>
    </>
  )
}

export default DashboardPage
