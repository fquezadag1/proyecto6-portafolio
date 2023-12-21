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
                  <h1 className="text-xl font-bold">John Doe</h1>
                  <p className="text-gray-700">Software Developer</p>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <ul className="list-none p-0">
                    <li className="mb-2 flex items-center">
                      <MdEmail className="mr-2" /> JavaScript
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaPhoneAlt className="mr-2" /> React
                    </li>
                    <li className="mb-2 flex items-center">
                      <IoLocationSharp className="mr-2" /> Node.js
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                  vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                  suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                  luctus risus rhoncus id.
                </p>
                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                    suscipit.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                    suscipit.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                    suscipit.
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
