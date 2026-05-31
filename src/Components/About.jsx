import React from 'react'

const About = () => {
  return (
    <div className='cont-3 hidden h-fit bg-black flex flex-col gap-8 md:flex-col lg:flex-row xl:flex-row'>
      <div className="parent-2 flex flex-col items-center gap-12 w-[100%] lg:flex-row xl:flex-row">
        <div className="left w-[100%] flex flex-col items-center lg:w-[50%] xl:w-[50%]">
          <img src="/images/imag.png" alt=""  className='mt-28 w-62 sm:w-full h-auto max-w-[500px] md:w-full h-auto max-w-[500px] lg:w-full h-auto max-w-[500px] xl:w-full h-auto max-w-[500px]'/>
        </div>
        <div className="right p-5 flex flex-col items-center gap-5 w-[100%] mt-14 lg:w-[50%] xl:w-[50%]">
          <p className='min-w-[300px] h-auto max-w-auto xl:text-[0.5cm] lg:text-[0.45cm] lg:w-[96%] md:text-[0.4cm] md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eum suscipit eligendi. Doloribus culpa dicta eius nostrum tenetur inventore error quas, dolor praesentium animi neque earum iste commodi incidunt harum, possimus dolorum illum! Maxime, perferendis. Tempore aspernatur omnis asperiores.</p>
          <p className='min-w-[300px] h-auto max-w-auto xl:text-[0.5cm] lg:text-[0.45cm] lg:w-[96%] md:text-[0.4cm] md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur molestias quo facilis sapiente voluptatum, quasi nam fuga sequi veniam odit? Adipisci doloremque autem voluptatum nesciunt recusandae eligendi minus quidem eveniet, excepturi nam, quos accusamus, possimus libero! Quasi, iure quia.</p>
          <button className='bg-yellow-300 mt-12 text-black w-50 h-14 text-lg font-pricedown cursor-pointer'>Download now</button>
        </div>
      </div>
    </div>
  )
}

export default About
