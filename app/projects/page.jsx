import React from 'react'
import Project from '@/components/ProjectCard'
import AnimationEffect from '@/components/animations/AnimationEffect'

const projects = () => {
  return (
    <div className="w-full mx-auto">
      <AnimationEffect>
        <h1 className="text-4xl font-bold text-center mt-5">
          Mis proyectos
        </h1>
      </AnimationEffect>
      <div className="flex flex-wrap p-10 md:p-36 justify-around items-center">
        <Project
          title="Landing Page"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
        <Project
          title="CRUD App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
        <Project
          title="Dashboard de Datos"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
        <Project
          title="Restaurant App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
        <Project
          title="E-Commerce App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
      </div>
    </div>
  )
}

export default projects