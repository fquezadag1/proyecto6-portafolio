import React from 'react';

import Link from 'next/link';

const Project = ({ imageUrl, title, repourl, despurl }) => {


  return (
    <div className="w-full relative md:w-96 h-[200px] border border-gray-800 rounded shadow m-5 group">
      <img src={imageUrl} alt="Imagen de fondo" className="w-full h-full object-cover" />
      <div className="absolute hidden group-hover:flex bg-gray-900/80 w-full left-0 top-0 h-full transition-all flex-col justify-around items-center p-12 gap-2 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <div className="flex flex-row gap-5">
          <Link href={despurl} className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-xl mt-4">
            Despliegue
          </Link>
          <Link href={repourl} className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl mt-4">
            Repositorio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;