import React from 'react'
import ReportPage from '../../component/ReportsPage';


import spend from '../../assets/images/spend.svg'
import revenue from '../../assets/images/revenue.svg'
import rpc from '../../assets/images/rpc.svg'


const AdscomTerm = () => {
    const SystemReportData = [
        { title: "Total Spend", value: "0", image: spend },
        { title: "Revenues($)", value: "0.7", image: revenue },
        { title: "RPC($)", value: "1.20", image: rpc },
        { title: "Searches", value: "200", image: spend },
        { title: "Clicks", value: "50", image: revenue },
        { title: "CTR(%)", value: "0.30", image: rpc },
    ];
    return (
        <>
            <ReportPage MainReportHeading="Terms Report - Ads.com"
                reportData={SystemReportData}
            />
        </>
    )
}

export default AdscomTerm
