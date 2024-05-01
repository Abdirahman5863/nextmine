import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const ProjectCard = ({image,title,description,link}) => {
  return (
 
        <div className='flex flex-col items-center justify-center bg-[#FFF8E1] w-[400px] gap-5 h-[350px] shadow-lg shadow-[#FFF8E1] rounded-[41px]'>
<div>
    <Image src={image} alt='' width={100} height={100} className='w-[163px] h-[163px] '/>
</div>
<div>
  <h1 className='text-[#1D2729] text-[25px] font-[700] leading-[32.57px] '>{title}</h1>
  <p className='font-[400] leading-[15.6px] text-[13px] text-[#555555] '>
  {description}
  </p>
</div>
<div className='flex justify-between items-center space-x-10'>
<Link href={link}>View Project</Link>
</div>
</div>
  )
}

export default ProjectCard