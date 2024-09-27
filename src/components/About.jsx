import { useState } from 'react';
import bannerImage from '../assets/Banner_image.svg';

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Full Stack Developer",
    desc1:
      "I’m a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. My journey into web development started with a curiosity for how things work on the internet, and it has grown into a deep-seated love for creating intuitive, efficient, and scalable web applications.",
    desc2:
      "With experience in a range of programming languages and frameworks, I thrive on solving complex problems and bringing innovative ideas to life. Whether I’m working on the user interface or the server-side logic, my goal is always to deliver a seamless and engaging experience for users.",
    actionButton: {
      title: "Read More",
      link: "/readmore",
    },
  });

  return (
    <>
      <div className="main-container border py-8 sm:py-16 bg-gray-100">
        <h1 className="text-center text-3xl sm:text-4xl underline font-bold mb-6">
          About Me
        </h1>

        <div className="flex flex-col-reverse sm:flex-row items-center px-5 sm:px-10">
          <div className="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0">
            {/**Image container */}
            <img className="w-3/4 sm:w-2/3" src={data.image} alt="Banner" />
          </div>

          <div className="w-full sm:w-1/2 sm:pl-16 flex flex-col justify-center items-center sm:items-start">
            {/**Text container */}
            <div className="space-y-4 sm:space-y-5 w-full sm:w-2/3 text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-semibold">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg ">{data.desc1}</p>
              <p className="text-base sm:text-lg ">{data.desc2}</p>
           <div className='mt-6'>  <a
                href={data.actionButton.link}
                className="bg-orange-500 px-4 py-2   text-lg sm:text-2xl rounded-full shadow-lg text-white hover:bg-orange-600 transition-all"
              >
                {data.actionButton.title}
              </a> </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
