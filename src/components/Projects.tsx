import React from 'react'
import { PinContainer } from './ui/3d-pin'

export default function Projects() {
    // const navigate = useNavigate();
    return (
        <>
            <div className="py-20">
                <div className='flex justify-center items-center'>
                    <h1 className="text-white text-5xl font-bold mb-0">
                        Projects
                    </h1>
                </div>
                <div className='flex justify-center items-center space-x-* mt-0'>
                    <div className="h-[40rem] w-full flex items-center justify-center ">
                        <PinContainer
                            title="My Notes"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-white shadow-lg sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
                                    My Notes
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white ">
                                        Your ultimate task management tool! Effortlessly Create, Read, Update, and Delete your tasks, all in one place.
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >

                                    <img className='object-cover shadow-lg' src='/myNotes.svg' ></img>

                                </div>
                            </div>
                        </PinContainer>
                    </div>
                    <div className="h-[40rem] w-full flex items-center justify-center ">
                        <PinContainer
                            title="CRUD API"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-white shadow-lg sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
                                    CRUD API
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white ">
                                        Manage tasks effortlessly with our robust CRUD API
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >

                                    <img className='object-cover shadow-inner' src='/Crud.png' width="400px" height="200px"></img>

                                </div>
                            </div>
                        </PinContainer>
                    </div>
                </div>


            </div>
        </>

    )
}

