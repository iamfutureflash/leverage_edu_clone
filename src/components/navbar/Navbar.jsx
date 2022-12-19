import React from 'react'
import logo from "/assets/logo.svg";
import phone from "/assets/10002.png";
import account from "/assets/10005.png";
import hamburger from "/assets/10006.svg";
import search from "/assets/10007.svg";
function Navbar() {
    return (
        <>
            <div className='navbar-container '>
                <div className='row flex justify-between bg-slate-300 py-2 px-1'>
                    <div className="left  py-2 px-2">
                        <div className='logo flex'>
                            <img className='lg:w-[6rem]' src={logo} />
                            <sup className=' mx-2 px-3 py-3 bg-blue-200 w-fit h-fit text-blue-500 rounded-lg shadow-sm font-medium'>We are hiring</sup>
                        </div>
                    </div>
                    <div className="right flex space-x-4  items-center px-2 capitalize">
                        <div className='Study-Abroad hidden slg:block'><div>Study Abroad </div></div>
                        <div className='Test-Prep hidden slg:block'><div>Test Prep </div></div>
                        <div className='Finance hidden slg:block'><div>Finance </div></div>
                        <div className='Community hidden slg:block'><div>Community </div></div>
                        <div className='products hidden slg:block'><div>products </div></div>
                        <div className='more hidden slg:block'><div>more </div></div>
                        <div className='search hidden slg:block'>
                        <div className='flex space-x-1 xl:bg-slate-100 px-4 rounded-lg'>
                            <img className='w-6' src={search} alt="Loading..." />
                            <input className='hidden xl:block bg-slate-100 px-4 py-2 placeholder:text-sm focus:border-none active:border-none rounded-lg' type="search" placeholder="Search for universities & courses" />
                        </div></div>
                        <div className='phone hidden slg:block'>
                            <img className='w-9' src={phone} alt="Loading..." />
                        </div>
                        <div className='account'>
                            <img className='hidden slg:block w-9 rounded-lg' src={account} alt="Loading..." />
                        </div>
                        <div className='hamburger slg:hidden'>
                            <img className='w-9 cursor-pointer' src={hamburger} alt="Loading..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar