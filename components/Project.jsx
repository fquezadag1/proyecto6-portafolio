'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({
    title = '',
    description = '',
    bgCardImage = '',
    urlDespliegue = '',
    urlRepositorio = ''
}) => {

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.1,
            transition: {
                duration: 0.5,
            },
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    }
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className={`w-full relative md:w-96 p-5 min-h-[200px]  border  border-gray-800 rounded shadow m-5 group`}
        >
            <div
                className="w-full h-full absolute top-0 left-0 -z-10 rounded"
            >
                <Image
                    src={bgCardImage}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded -z-10 top-0 left-0"
                />
            </div>
            <div
                className="bg-gray-900 bg-opacity-50 rounded p-2 backdrop-blur-md"
            >
                <h3 className="font-bold text-lg text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>
                {/* <div>
          {tecnologies.map((tecnology) => (
            <Image
              key={tecnology}
              src={`/images/tecnologies/${tecnology}.png`}
              alt={tecnology}
              width={32}
              height={32}
            />
          ))}
        </div> */}
            </div>
            <div className="absolute hidden group-hover:flex bg-gray-900/80 w-full left-0 top-0 h-full transition-all flex-col justify-around items-center p-12 gap-2 backdrop-blur-sm">
                <h3 className="text-white">
                    Puedes ver mas detalles de este proyecto en los siguientes enlaces:
                </h3>
                <div className="flex flex-row gap-5">
                    <Link href={urlDespliegue} className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-xl mt-4">
                        Despliegue
                    </Link>
                    <Link href={urlRepositorio} className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl mt-4">
                        Repositorio
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Project