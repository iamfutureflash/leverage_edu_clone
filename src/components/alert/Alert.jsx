import React from 'react'

function Alert() {
    return (
        <div className='AlertsContainer bg-dark-blue'>
            <div className='Row flex text-sm md:text-base justify-center px-2 py-4 space-x-4'>
                <div className='text-white'>Leverage Edu Scholarship Worth ₹ 7,00,00,000</div>
                <button className='text-white border-2 border-white rounded-md px-2 py-[0.1 hover:bg-white hover:text-black'>Apply Now</button>
            </div>
        </div>
    )
}

export default Alert;