import React, {useEffect, useState} from 'react'
import project1 from '../assets/lottoport.jpg'
import project2 from '../assets/s1port.png'
import project3 from '../assets/albumport.png'
import project6 from '../assets/carrotport.png'
import lottoabout from '../assets/lotto/about.png'
import lottopage from '../assets/lotto/lottoAllpage.png'
import lottoprice from '../assets/lotto/price1.png'
import album2 from '../assets/album/album2.png'
import album3 from '../assets/album/album3.png'
import album4 from '../assets/album/album4.png'
import s1_1 from '../assets/s1/s1-2.png'
import s1_2 from '../assets/s1/s1-3.png'
import s1_3 from '../assets/s1/s1-1.png'
import carrot2 from '../assets/carrot/carrot1.png'
import carrot3 from '../assets/carrot/carrot2.png'
import carrot4 from '../assets/carrot/carrot3.png'
import carrot5 from '../assets/carrot/carrot4.png'
import carrot6 from '../assets/carrot/carrot5.png'
import carrot7 from '../assets/carrot/carrot6.png'
import movie1 from '../assets/movie/movie1.png'
import movie2 from '../assets/movie/movie2.png'
import movie3 from '../assets/movie/movie3.png'
import movie4 from '../assets/movie/movie4.png'
import mypage1 from '../assets/mypage/mypage1.png'
import mypage2 from '../assets/mypage/mypage2.png'
import mypage3 from '../assets/mypage/mypage3.png'
import mypage4 from '../assets/mypage/mypage4.png'
import mypage5 from '../assets/mypage/mypage5.png'
import mypage6 from '../assets/mypage/mypage6.png'

import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect'
import Modal from './Modal'
import '../modal.css'


const projects = [
    {
        img: [mypage1, mypage2, mypage3, mypage4, mypage5, mypage6],
        title: "프로젝트 #1",
        description: "포트폴리오 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
    {
        img: [project2, s1_1, s1_2, s1_3],
        title: "프로젝트 #2",
        description: "인테리어 회사 홈페이지 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
    {
        img: [project1, lottoabout, lottopage, lottoprice],
        title: "프로젝트 #3",
        description: "로또 추천 번호 사이트 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
    {
        img: [movie1, movie2, movie3, movie4],
        title: "프로젝트 #4",
        description: "영화 사이트 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
    {
        img: [project3, album2, album3, album4],
        title: "프로젝트 #5",
        description: "보고싶은 사진 검색 사이트 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
  
    {
        img: [carrot7, project6, carrot2, carrot3, carrot4, carrot5, carrot6],
        title: "프로젝트 #6",
        description: "당근마켓 클론코딩 (이미지를 클릭하세요)",
        links: {
            notion: "https://noon-bit-951.notion.site/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=74",
            github: "https://github.com/ParkChanJae"
        }
    },
   
    
]

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const escHandle = (e) => {
            if(e.key === 'Escape') {
                setModalOpen(false);
            }
        }
        document.addEventListener("keydown", escHandle);
        return () => {
        document.removeEventListener("keydown", escHandle);
        }
    }, [])

    const openModal = () => {
      setModalOpen(true);
    }
    const closeModal = () => {
      setModalOpen(false);
    }

    const [currentProject, setCurrentProject] = useState(0);
  return (
    
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='portfolio'>
        
        <div className='z-10 glass p-6 w-full border-2 max-w-[600px]'>
            <div className='w-full h-80' onClick={openModal}>
            
                <img src={projects[currentProject].img[0]} alt={projects[currentProject].title} className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>
            <p className='text-gray-200 my-4'>
            {projects[currentProject].description}
            </p>
            <div className='flex space-x-4'>
                <a href={projects[currentProject].links.notion} target='_blank' className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                <a href={projects[currentProject].links.github} target='_blank' className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub /></a>
            </div>

        </div>

        <div className='absolute inset-0'>
                <div className='hidden md:block'>
                   <ShinyEffect left={100} top={0} size={900}/>
                </div>
              </div>


        <ul className='z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
            {projects.map((project, index) => (
                 <li key={index} onClick={() => setCurrentProject(index)} className={`cursor-pointer text-gray-300 
                 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition
                 duration-300 ${currentProject === index ? "bg-slate-900" : ""}`}>
                    {project.title}
                 </li>
            ))}
        </ul>

        <Modal open={modalOpen} close={closeModal} header={projects[currentProject].title}>
            <div className='text-center text-gray-500 font-bold text-xl'>Esc 또는 닫기 버튼을 누르세요!</div>
         <div className='h-[300px] overflow-y-scroll md:h-[600px] flex flex-wrap'>
           {projects[currentProject].img.map((project, index) => (
            <img className='p-2 md:w-1/2 border border-slate-300 rounded-xl' key={index} src={project} alt={projects[currentProject].title} />
           ))}
        </div>
        </Modal>
    </div>
  )
}

export default Portfolio