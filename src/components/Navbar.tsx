'use client'
import React from 'react'
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import Link from 'next/link'



export default function Navbar() {
  return (
    <div className=' grid grid-cols-3 gap-3 m-0 p-0 justify-items-center space-x-10 text-white  '>
      <div className='my-3'>
        Hello
      </div>
      <div className='flex flex-auto my-2 '>
        <Link href="/"><Button id='home' variant="secondary" className='mx-1 font-light text-white transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50'>Home</Button></Link>
        <Link href="/Projects"><Button id='projects' variant="secondary" className='mx-1 font-light text-white transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50'>Projects</Button></Link>
        <Link href="/Skills"><Button id='Skills' variant="secondary" className='mx-1 font-light text-white transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50'>Skills</Button></Link>
        <Link href="Contacts"><Button id='Contact' variant="secondary" className='mx-1 font-light text-white transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50'>Contact</Button></Link>
      </div>
      <div className=' my-3'><FaGithub size={25} /></div>
    </div>
  )
}