import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [count, setCount] = useState(0)

  useGSAP(()=>{
    const tl=gsap.timeline()
    tl.to('.special-text',{
      scale:3,
      duration:1,
      opacity:1,
    })
tl.to('.special-text',{
  display:'none',
  duration:0.1,
})

tl.to('.big-img , .sky-img',{
  opacity:1,
  duration:1,
})

tl.to('.cont-3',{
  display:'inline'
})

  })

  return (
    <>
    <h1 className='special-text font-pricedown opacity-0'>VI</h1>
    <div className="sky-img bg-[url('/images/sky.png')] object-cover opacity-0">
    <div className="big-img bg-[url('/images/bg.png')] object-cover overflow-hidden opacity-0">
<Navbar/>
<Hero/>
    </div>
    </div>
<About/>
    </>
  )
}

export default App
