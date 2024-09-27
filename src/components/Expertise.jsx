import { useState } from 'react';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
  return (
    <>
      <div className="top-level-div py-6 sm:py-10">
        <div className="text-3xl sm:text-4xl font-bold underline">
          <h1 className="text-center">My Expertise</h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 items-center px-5 sm:px-0 py-8"
      >
        <div className="box-container text-white text-center sm:text-left space-y-4 sm:ps-20 py-6 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            I love these technologies
          </h1>
          <p className="text-base sm:text-lg px-2 sm:px-0  sm:pe-10
          ">
            I’m passionate about working with cutting-edge technologies that
            drive innovation in web development. Whether it’s mastering new
            frameworks, optimizing cloud deployments, or exploring the latest in
            database management.
          </p>
    <div className=''>     <a
            href="/Contact"
            className="bg-orange-500 px-4 py-2 text-white rounded-full shadow-lg text-lg sm:text-2xl"
          >
            Contact
          </a></div> 
        </div>
        <div className="skills-container flex justify-center mt-6 sm:mt-0">
          <div className="flex justify-center space-x-3 space-y-3 flex-wrap w-full sm:w-2/3">
            {[
              "JavaScript",
              "Java",
              "NodeJS",
              "ReactJS",
              "MongoDB",
              "PostgreSQL",
              "Prisma (ORM)",
              "State Management",
              "Authentication",
              "AWS EC2",
              "Cloudflare Worker",
              "Tailwind CSS",
              "Docker",
            ].map((skill, index) => (
              <p
                key={index}
                className="bg-gray-100 hover:bg-orange-400 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full text-sm sm:text-base"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
