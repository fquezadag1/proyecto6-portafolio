import Skill from '@/components/Skill'
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import AnimationEffect from '@/components/animations/AnimationEffect';


export default function Home() {
  return (
    <AnimationEffect>
    <main>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
          <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button size="lg" color="primary" variant="shadow" endContent={<FaArrowRight />}>
            Take a photo
          </Button>
          <Button size="lg" color="danger" variant="shadow" endContent={<IoMdDownload />}>
            Take a photo
          </Button>
        </div>

        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">mis redes sociales</span>
          <div className="flex flex-wrap justify-center items-center mt-8">
            <a href="#">
              <svg className="rounded-lg sm:outline outline-cyan-500 hover:outline-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mx-auto my-10'>
        <div>
          <h1 className="text-2xl font-bold mb-4">Mis Habilidades</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 justify-items-center">
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JS" title="JS" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for MongoDB" title="MongoDB" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="The logo icon for Boostrap" title="Boostrap" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="The logo icon for Firebase" title="Firebase" />
          <Skill className="p-2 md:p-4 lg:p-6" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="The logo icon for Ex´ress" title="Express" />
        </div>
      </div>
    </main>
    </AnimationEffect>

  )
}
