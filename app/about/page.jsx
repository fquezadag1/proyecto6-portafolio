import AnimationEffect from '@/components/animations/AnimationEffect';
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const about = () => {

  return (

    <AnimationEffect>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img src="https://i.imgur.com/4U5tBXC.png" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                  <h1 className="text-xl font-bold">Felipe Quezada</h1>
                  <p className="text-gray-700">Ingeniero Civil en Informatica</p>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <ul className="list-none p-0">
                    <li className="mb-2 flex items-center">
                      <MdEmail className="mr-2" /> fquezadag1@gmail.com
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaPhoneAlt className="mr-2" />+5699999999
                    </li>
                    <li className="mb-2 flex items-center">
                      <IoLocationSharp className="mr-2" /> Concepción, Chile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Sobre Mí</h2>
                <p className="text-gray-700">Soy Igeniero civil en Informatica de profesión, las oportunidades laborales hasta ahora me han alejado del camino de la programación, 
                por eso he decidido comenzar a dar mis primeros pasos en este mundo inmenso del desarrollo web.
                </p>
                <h2 className="text-xl font-bold mt-6 mb-4">Estudios</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Desarrollo web Full Stack</span>
                    <p>
                      <span className="text-gray-700 mr-2">en Universidad del Desarrollo </span>
                      <span className="text-gray-700">Abril 2023 - Diciembre 2023</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Bootcamp que abarca todos los contenidos necesarios dentro del stack MERN para el desarrollo tanto del frontend como del backend de una aplicacion web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationEffect>
  )
}

export default about
