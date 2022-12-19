import React from 'react'
import collage_video_bg_1 from '/public/pexels-taryn-elliott-7490427.mp4';
import collage_video_bg_2 from '/public/production-ID-4696147.mp4';
import collage_video_bg_3 from '/public/pexels-taryn-elliott-7490428.mp4';
import list_of_company from '/public/assets/10027.png';
function Main() {
  return (
    <div className='herosection w-full h-[100vh] flex  flex-col '>
      <video className='w-full h-[90vh] object-cover relative' src={collage_video_bg_3} autoPlay loop muted />
      <div className='hero-content absolute w-full h-full top-30 flex flex-col gap-4 '>
        <div className='left flex flex-col  items-center  w-[100vw] h-[100vh] px-4 md:items-start md:px-0'>
          <div className=' top_hero bg-gradient-to-b from-slate-300 to-slate-300/10 py-8 px-4 w-[100vw] h-[40vh] md:w-[100vw] lg:w-[80vw] xl:w-[60vw]  md:bg-gradient-to-r md:h-[90vh]'>
            <div className='text-5xl  xxsm:text-left xxsm:mx-auto  md:py-3 lg:text-7xl'>
              <h1 className='text-black font-black'>Your <span className='text-blue-400 '>  Study Abroad Expert
                {/* <hr className=' border-8 border-blue-200/60 -mt-1 mb-4  w-[75vw] sm:w-[67vw] sm:ml-32 items-end md:w-[65vw] md:ml-46 lg:w-[79vw] xl:w-[38vw] ' /> */}
              </span></h1>
            </div>
            <div className=' md:py-3'>
              <p className='text-black font-black text-sm md:w-[30rem] lg:text-2xl lg:font-bold lg:w-[35rem]'>The largest Personalised Student Counselling Study Abroad Platform in the world. Obsessed with Student Success.</p>
            </div>
            <div className='buttons flex flex-col justify-start items-start gap-y-4 mt-4 md:space-y-4'>
              <button className='text-white bg-dark-blue font-black px-4 py-2 rounded-xl border-2 border-slate-300 w-fit shadow-md shadow-slate-300 capitalize lg:text-2xl'>Get Your Shortlist for FREE</button>
              <button className='text-white bg-black/30 font-black hover:bg-dark-blue hover:text-white px-4 py-2 rounded-xl w-fit border-2 border-slate-300 shadow-md shadow-slate-300 capitalize lg:text-2xl'>Talk to an Expert</button>
            </div>
          </div>
        </div>
        <div className='right bg-red-200/20 w-[50%] h-0'>
          {/* <h1>Welcome to my site</h1>
          <h1>to my site</h1> */}
        </div>

      </div>
      <div className='bottom_hero text-black mx-4 py-2 md:-mt-[20rem] md:z-10 md:w-[30rem] lg:-mt-[15rem]'>
        <p className='text-base text-center md:text-left md:mt-4 md:font-semibold lg:text-2xl'>95% of our students get an admit in less than 4 weeks</p>
        <p className='text-base 600 text-center md:text-left md:mb-4 md:font-semibold lg:text-2xl'>Our students finished University to work at global offices of</p>
        <div className='image   '>
          <img className='py-4 w-auto mx-auto md:w-[30rem] md:mx-0 lg:w-[40rem] ' src={list_of_company} alt="Loading.." />
        </div>
      </div>
    </div>

  )
}

export default Main