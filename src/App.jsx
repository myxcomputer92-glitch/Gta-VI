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
    const mm=gsap.matchMedia()
    mm.add('(min-width:1281px)',()=>{

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
      
    })
    mm.add('(min-width:1025px) and (max-width:1280px)',()=>{

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
      
    })

    mm.add('(min-width:769px) and (max-width:1024px)',()=>{

      tl.to('.special-text',{
        scale:2.7,
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
      
    })
    mm.add('(min-width:481px) and (max-width:768px)',()=>{

      tl.to('.special-text',{
        scale:2.3,
        duration:1,
        opacity:1,
        x:'-15vw'
      })
      tl.to('.special-text',{
        display:'none',
        duration:0.1,
      })
      
      tl.to('.big-img , .sky-img',{
        opacity:1,
        duration:1,
      })
      
    })
    mm.add('(max-width:480px)',()=>{

      tl.to('.special-text',{
        scale:1.7,
        duration:1,
        opacity:1,
        x:'-20vw'
      })
      tl.to('.special-text',{
        display:'none',
        duration:0.1,
      })
      
      tl.to('.big-img , .sky-img',{
        opacity:1,
        duration:1,
      })
      
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
