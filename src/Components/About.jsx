import React from 'react'

const About = () => {
  return (
    <div className='cont-3 h-[100vh] hidden'>
      <div className="parent-2 flex w-[100%]">
        <div className="left w-[50%]">
          <img src="/images/imag.png" alt="" />
        </div>
        <div className="right flex flex-col items-center gap-5 w-[50%] mt-40">
          <p className='w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eum suscipit eligendi. Doloribus culpa dicta eius nostrum tenetur inventore error quas, dolor praesentium animi neque earum iste commodi incidunt harum, possimus dolorum illum! Maxime, perferendis. Tempore aspernatur omnis asperiores.</p>
          <p className='w-[70%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur molestias quo facilis sapiente voluptatum, quasi nam fuga sequi veniam odit? Adipisci doloremque autem voluptatum nesciunt recusandae eligendi minus quidem eveniet, excepturi nam, quos accusamus, possimus libero! Quasi, iure quia.</p>
          <button className='bg-yellow-300 text-black w-50 h-14 text-lg font-pricedown cursor-pointer'>Download now</button>
        </div>
      </div>
    </div>
  )
}

export default About
