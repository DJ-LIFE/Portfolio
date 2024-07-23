'use client'
import React from 'react'





export default function Skills() {
  // const navigate = useNavigate();
  return (
    <div>
      <div className='flex items-center justify-center'>
          <h3 className="text-white text-5xl font-bold mb-0">
            Skills
          </h3>
        </div>
      <div className="flex justify-center mt-10 ">
        <div id='icons' className="grid grid-cols-4 justify-around ">
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50 " src="/react.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="/javascript.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="/next-js.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="/java.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="mongodb-icon-2.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="typescript.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="html.svg" />
          <img className="w-40 h-40 m-2 transition delay-150 hover:bg-main hover:shadow-lg hover:shadow-indigo-500/50" src="css.svg" />
        </div>
      </div>

    </div>
  )
}

