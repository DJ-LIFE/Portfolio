import React from 'react'
import { socialMedia } from '../../data';
// import { useNavigate } from 'react-router-dom'

export default function Contact() {
    // const navigate = useNavigate();
  return (
    
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* <a href="https://github.com/DJ-LIFE" target="_blank" rel="noreferrer"><img src={info.img} alt="icons" width={20} height={20} /></a> */}
              <a href={info.link} target="_blank" rel="noreferrer"><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};


