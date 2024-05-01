"use client"
import ProjectCard from '../components/projectCard'
import { Projects } from '@/constant'
import React from 'react'


const Page = () => {
  
  return (
    <div className='flex  flex-col  justify-center gap-10  items-center h-full max-sm:h-full' >
      
    <h1 className='font-[400] text-[64px] leading-[83.39px] text-[#FFF8E1]'>Project</h1>
    
    <div className='flex items-center max-sm:flex-col md:flex-initial md:items-center md:p-5 md:bg-[#776426] md:w-full  gap-9 md:gap-10 md:-skew-y-12 h-[500px]'>
      
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link ={project.link}
          />
        ))}
      </div>
      </div>

  )
}

export default Page