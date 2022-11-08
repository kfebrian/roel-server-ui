import React from 'react';

const PriceFooter = () => {
    return(
      <>
        <hr className="w-[88%] h-[1px] mx-auto my-9 border-none bg-white md:my-0" />

        <div className="flex flex-col-reverse h-[7rem] justify-between bg-slate-900 md:flex-row mx-0 items-center md:h-[10vh] px-[4rem] text-white pb-1">
        {/* Logo */}
        <div className="flex justify-around space-x-3 items-center">
          <h4 className='text-3xl font-semibold'>ROEL</h4>
          <div className='text-[13px] flex flex-col font-extralight space-y-[-7px]'>
            <p>Serveroel</p>
            <p>uwutechroell inc</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-between items-center w-full font-semibold md:justify-around md:w-[25%]">
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>Youtube</p>
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>Instagram</p>
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>LinkedIn</p>
        </div> 
        </div>
      </>
      
    )
}

export default PriceFooter