/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Image from 'next/image'

export default function Hero() {
  // const navigate = useNavigate();
  return (
    <div className='pb-20 pt-36 h-lvh'>
      <div className='grid grid-cols-2 gap-3'>
        <div className='relative place-items-center ml-40'>
          {/* <Image className='absolute'
            src="/Gradient.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <Image className='absolute'
            src="/Ellipse3.png"
            width={400}
            height={400}
            alt="Picture of the author"
          /> */}
          <Image className='absolute z-10 shadow-2xl shadow-neutral-400 rounded-full object-cover sm'
            src="/profile2.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className='flex flex-start justify-center relative my-20 z-10 mr-20'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Crafting Seamless Digital Experiences From Front to Back'
            />
            <p id='detail' className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white'>
              Hi! I'm Gaurav Kumar Thakur, a Full Stack Developer
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}



