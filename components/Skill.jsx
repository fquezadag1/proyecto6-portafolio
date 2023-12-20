import React from 'react'
import Image from 'next/image'

const Skill = ({source, alt, title}) => {
  return (
    <Image src={source} alt={alt} title={title}/>
  )
}

export default Skill