import gsap from "gsap";
import React,{useState} from "react";


const Hero = () => {

const [position, setposition] = useState({x:0,y:0})

const Change_Position=(e)=>{
  
  setposition({
    x:e.clientX,
    y:e.clientY,
  });
  gsap.to('.parent .contain-text-2',{
    x:e.clientX * 0.09,
    y:e.clientY * 0.1
  })
  gsap.to('.sky-img',{
    x:e.clientX * 0.05,
    y:e.clientY * 0.001
  })
  gsap.to('.big-img',{
    x:e.clientX * 0.05,
    y:e.clientY * 0.001
  })
// console.log("X:", e.clientX, "Y:", e.clientY);
}

console.log(Change_Position)

  return (
    <div onMouseMove={Change_Position} className="cont-2 z-50 relative h-[96vh] overflow-hidden opacity-0 font-pricedown">
      <div className="parent flex flex-col items-center">
        <div className="contain-text-2 mt-22 flex flex-col gap-6 xl:mt-0 lg:mt-0 md:mt-12 sm:mt-16">
          <h1 className="transform translate-x-22 text-5xl xl:text-8xl xl:translate-x-52 lg:text-8xl lg:translate-x-52  md:text-7xl md:translate-x-42  sm:text-6xl sm:translate-x-52">
            Grand
          </h1>
          <h1 className="transform -translate-x-22 text-5xl xl:text-8xl xl:-translate-x-52 lg:text-8xl lg:-translate-x-52 md:text-7xl md:-translate-x-42 sm:text-6xl sm:-translate-x-52">
            Theft
          </h1>
          <h1 className="transform translate-x-22 text-5xl xl:text-8xl xl:transform xl:translate-x-52 lg:text-8xl lg:translate-x-52 md:text-7xl md:translate-x-42 sm:text-6xl sm:translate-x-52">
            Auto
          </h1>
        </div>
        {/* transform translate-x-60  */}

        <img
          src="/images/girlbg.png"
          className="object-cover w-[500px] relative bottom-[20px] xl:bottom-[190px] xl:w-[600px] lg:bottom-[140px] lg:w-[540px] md:bottom-[110px] md:w-[540px] sm:bottom-[130px] sm:w-[600px]"
        />
        <img
          src="/images/logo18.png"
          className="absolute top-80 left-2 w-12 xl:w-25 xl:right-12 lg:w-16 lg:right-12 md:w-12 md:right-2 sm:w-10 sm:right-2"
        />

        <footer className="flex justify-center gap-16 w-full absolute bottom-0">
          <h2 className="pt-1 xl:text-xl lg:text-xl font-sans">scroll down</h2>
          <img
            src="/images/ps5.png"
            alt=""
            className="w-[170px] xl:w-60 lg:w-50 md:w-40 
  sm:w-40"
          />
        </footer>
      </div>
    </div>
  );
};

export default Hero;
