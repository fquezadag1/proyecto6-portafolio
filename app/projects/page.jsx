import Project from '@/components/Project'
import AnimationEffect from '@/components/animations/AnimationEffect'

const projects = () => {
  return (
    <AnimationEffect>
      <div className="w-full mx-auto">

        <h1 className="text-4xl font-bold text-center mt-5">
          Mis proyectos
        </h1>

        <div className="flex flex-wrap p-10 md:p-36 justify-around items-center">
          <Project
            imageUrl="https://i.ibb.co/5WpNfRR/Captura-de-pantalla-2023-12-20-184107.png"
            title="Landing Page"
            repourl="https://github.com/fquezadag1/Proyecto1-Landing"
            despurl="https://fquezadag1.github.io/Proyecto1-Landing/"
          />

          <Project
            imageUrl="https://i.ibb.co/sWXNZc6/Captura-de-pantalla-2023-12-20-184201.png"
            title="CRUD"
            repourl="https://github.com/fquezadag1/Proyecto2-CRUD.git"
            despurl="https://fquezadag1.github.io/Proyecto2-CRUD/"
          />

          <Project
            imageUrl="https://i.ibb.co/FB4fcp1/Captura-de-pantalla-2023-12-20-184243.png"
            title="Dashboard de Datos"
            repourl="https://github.com/fquezadag1/Proyecto3-dashboard"
            despurl="https://fquezadag1.github.io/Proyecto3-dashboard/"
          />

          <Project
            imageUrl="https://i.ibb.co/pZsHK71/Captura-de-pantalla-2023-12-20-184335.png"
            title="App Restaurant"
            repourl="https://fquezadag1.github.io/Proyecto4-Restaurant/"
            despurl="https://github.com/fquezadag1/Proyecto4-Restaurant"
          />

          <Project
            imageUrl="https://i.ibb.co/mcLKNJ8/Captura-de-pantalla-2023-12-20-184607.png"
            title="E-commerce"
            repourl="https://github.com/fquezadag1/Proyecto5-frontend"
            despurl="https://fquezadag1.github.io/Proyecto5-frontend/"
          />
        </div>
      </div>
    </AnimationEffect>
  )
}

export default projects