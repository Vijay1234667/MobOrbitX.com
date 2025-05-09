import React from 'react'

const InsightsDetailsBox = ({ InsightsTitle, InsightsPrice, Image, greenupArrow }) => {
    return (
        <>
                <div className='card insights-details h-100'>
                    <div className="card-body">
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <p className='mb-0 text-secondary'>{InsightsTitle}</p>
                            <img className='img-fluid' src={Image} alt={Image} />
                        </div>

                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <h2 className='font-600 mb-0'>{InsightsPrice}</h2>
                            <span className='increment-circle'>
                                <img className='img-fluid' src={greenupArrow} alt={greenupArrow} />
                                8.0
                            </span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default InsightsDetailsBox
