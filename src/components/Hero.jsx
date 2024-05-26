import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
      <div className='max-w-[800px]'>
        <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
        Welcome to<br />
            <span className=''>CHAN JAE</span> <br />
            <TypeAnimation 
              sequence={[
                "Developer",
                1000,
                "Front End",
                1000,
                "Web",
                1000
              ]}
              speed={50}
              repeat={Infinity}
              className='font-bold italic'
            />
        </p>
        <h2 className='text-gray-300'>어제보다 더 발전한 오늘이 되겠습니다.</h2>

      </div>


              <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
                <div className='hidden md:block'>
                   <ShinyEffect left={100} top={200} size={1400}/>
                </div>
                  <ShinyEffect left={-100} top={0} size={1200}/>
              </div>

      <img src={profilepic} className='w-[300px] md:w-[500px] rounded-full'/>
    </div>
  )
}

export default Hero