import React from 'react'

const Hero = () => {
  return (
    <div className='cont-2 h-[91vh] overflow-hidden font-pricedown'>
      <div className="parent flex flex-col items-center">

      <div className="contain-text-2 flex flex-col gap-6">
        <h1 className='xl:text-8xl xl:transform xl: translate-x-52 '>Grand</h1>
        <h1 className='xl:text-8xl xl:transform  xl:-translate-x-52 '>Theft</h1>
        <h1 className='xl:text-8xl xl:transform xl: translate-x-52 '>Auto</h1>
      </div>
{/* transform translate-x-60  */}

<img src="/images/girlbg.png" className='xl:object-cover w-[50%] relative left-0 bottom-[210px]'/>
<img src="/images/logo18.png" className='xl:w-25 absolute top-70 right-35'/>

<footer className='flex justify-center gap-20 w-full absolute bottom-0'>
  <h2 className='pt-4 xl:text-xl'>scroll down</h2>
  <img src="/images/ps5.png" alt=""  className='w-70'/>
</footer>


      </div>
    </div>
  )
}

export default Hero
