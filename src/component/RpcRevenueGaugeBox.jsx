import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import info from '../assets/images/info.svg';
import SolidGaugeChart from './SolidGaugeChart';

const RpcRevenueGaugeBox = ({ Days, Amount, greenupArrow }) => {
  return (
   
      <div className="card bdr-normal h-100 bdr-rds20 ">
        <div className="card-body">
          <p className="font-13 text-secondary font-600">
            {Days} <img className='ms-1' src={info} alt="info" />
          </p>
          <div className="d-flex justify-content-between bdr-bottom-thin pb-3 mb-3">
            <h2 className="font-800 mb-0">{Amount}</h2>
            <span className="Decrement-circle px-2 py-1">
              <img className="img-fluid" src={greenupArrow} alt="Arrow" />
              8.0
            </span>
          </div>

          <Tabs
            defaultActiveKey="rpc"
            id="rpc-revenue-tabs"
            mountOnEnter
            className="mb-3 justify-content-center bg-secondary-tab"
          >
            <Tab eventKey="Revenue" title="Revenue">
              <div className="text-center py-3">Revenue content here</div>
            </Tab>
            <Tab eventKey="rpc" title="RPC">
              <div className="text-center py-3">
                <SolidGaugeChart />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
  );
};

export default RpcRevenueGaugeBox;
