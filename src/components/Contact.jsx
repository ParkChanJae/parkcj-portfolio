import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center' id='contact'>
            <ul className='my-auto pr-6'>
            <li className='flex'>
                <AiFillLinkedin className='w-[70px] h-auto text-gray-300' />
                <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>Contact</h3>
                    <p className='text-gray-400'>Mobile: 010-9998-4308</p>
                    <p className='text-gray-400'>Email: muze4308@naver.com</p>
                </div>
            </li>
            <li className='flex'>
                <AiFillGithub className='w-[70px] h-auto text-gray-300' />
                <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>Github & Notion</h3>
                    <a href='https://github.com/ParkChanJae' target='_blank' className='text-gray-400'>Github 구경 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a href='https://noon-bit-951.notion.site/ark-Chan-Jae-f49f571eb9e845b299f1455b0b222e45' target='_blank' className='text-gray-400'>Notion 구경</a>
                </div>
            </li>
            </ul>

            <form action='https://getform.io/f/pbnvpezb' method='POST' className='max-w-6xl p-5 md:p-12' id='form'>
                <input type='text' id='name' placeholder='이름' name='name'
                 className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                 />
                <input type='email' id='emil' placeholder='이메일' name='email'
                 className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                 />
                <textarea name='textarea' id='textarea' cols="30" rows="4" placeholder='내용을 입력해주세요'
                 className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'/>
                <button type='submit' className='w-full py-3 rounded-md text-gray-200 font-semibold text-xl 
                bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]'>전송</button>
            </form>

    </div>
  )
}

export default Contact