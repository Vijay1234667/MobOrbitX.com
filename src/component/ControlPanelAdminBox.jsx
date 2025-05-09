import React from 'react'

const ControlPanelAdminBox = ({Number, Status , Image, alt}) => {
    return (
        <>
            <div className="controlpanel-admin-card">
                <img src={Image} width={35} alt={alt} className="img-fluid mb-3"/>
                    <h2 className="font-24 font-600 mb-3">{Number}</h2>
                    <p className="font-12 text-md-nowrap mb-0">{Status}</p>
            </div>
        </>
    )
}

export default ControlPanelAdminBox
