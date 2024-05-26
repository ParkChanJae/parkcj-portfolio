import React, {useState} from 'react'
import project1 from '../assets/lottoport.jpg'
import project2 from '../assets/s1port.png'
import project3 from '../assets/albumport.png'
import mypage from '../assets/mypage/mypage1.png'

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiJava,
    DiMysql,
} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
        <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
            <DiHtml5 className='text-orange-600'/>
            <DiCss3 className='text-blue-600'/>
            <DiBootstrap className='text-purple-600'/>
            <DiJavascript1 className='text-yellow-500'/>
            <DiReact className='text-blue-500'/>
            <DiNodejsSmall className='text-green-500'/>
            <DiJava className='text-red-500'/>
            <DiMysql className='text-blue-800'/>
        </div>
      
        {/* 프로젝트 1 */}
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg 
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project1} alt='project 1' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
            <p className='text-gray-300 mb-4'>
            Html, Css, JavaScript, React, Java, Spring, MySql
            </p>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Tools</h2>
            <p className='text-gray-300 mb-4'>
            Visual Studio Code, Eclipse, Spring framework, Android Studio
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
                <DiJava className='text-red-500'/>
                <DiMysql className='text-blue-800'/>
            </div>
        </div>

        {/* 프로젝트 2 */}
        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>🎓 Education</h2>
            <p className='text-gray-300 mb-4'>
            `2013` 광주 문성고등학교 졸업 <br />
            `2014` 광주 송원대학교 사회체육학과 중퇴 <br />
            `2014` 1군지사령부 병장 전역 <br />
            `2023` 한울직업전문학교 웹&앱 개발자교육 수료 <br />
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
                <DiJava className='text-red-500'/>
            </div>
        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg 
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project3} alt='project 2' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        {/* 프로젝트 3 */}
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg 
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project2} alt='project 3' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>👩‍💻Career </h2>
            <p className='text-gray-300 mb-4'>
                `17.05~20.02`  세움(주) 건설업 창호시공 <br />
                `22.08~23.2`  한울직업전문학교   <br />
                - JKcompany : 팀원들과 협업하여 ERP Web/App 개발  <br />
                `23.02~23.05`  엘림정보네트워크  <br />
                - 회사 내 반응형웹 제작  <br />
                현재 부족한 부분들 공부
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
            </div>
        </div>



    </div>
  )
}

export default About