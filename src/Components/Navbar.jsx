import React from 'react'

const Navbar = () => {
  return (
    <div className='container w-[100vw] h-18 p-3 font-pricedown z-50 relative opacity-0'> 
      <nav className='flex gap-5'>
        <div className="contain-text flex flex-col gap-2">
        <div className="line-1 w-32 h-2  bg-white"></div>
        <div className="line-2 w-22 h-2  bg-white"></div>
        <div className="line-3 w-12 h-2  bg-white "></div>
        </div>
<h1 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Rock_star</h1>
      </nav>
    </div>
  )
}

export default Navbar
