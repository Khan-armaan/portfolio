import bannerImage from '../assets/cropped_image1.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';
import { useRef, useEffect, useState } from 'react';

const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend developer", "Backend developer", "Fullstack developer"], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const [links, setLinks] = useState([
    {
      id: 1,
      href: "https://www.facebook.com/",
      logo: "fa-brands fa-facebook text-2xl sm:text-4xl",
    },
    {
      id: 2,
      href: "https://www.instagram.com/",
      logo: "fa-brands fa-instagram text-2xl sm:text-4xl",
    },
    {
      id: 3,
      href: "https://www.linkedin.com/",
      logo: "fa-brands fa-linkedin text-2xl sm:text-4xl",
    },
    {
      id: 4,
      href: "https://github.com/",
      logo: "fa-brands fa-github text-2xl sm:text-4xl",
    },
  ]);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col-reverse sm:flex-row justify-center items-center py-10 sm:py-20"
    >
      <div className="flex flex-col items-center sm:items-start sm:ps-24 text-white sm:h-2/3 sm:w-2/3 w-full px-5 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-semibold">Hi, I am</h3>
        <h1 className="pt-1 text-2xl sm:text-3xl font-bold">Armaan Khan</h1>
        <div>
          <h2 className="text-xl sm:text-2xl">
            I am a <span className="font-bold underline" ref={el}></span>
          </h2>
        </div>
        <p className="pt-2 mb-3 text-center sm:pe-24   sm:text-left">
          A student with a passion for web development, specializing in both
          front-end and back-end technologies. I’m always excited to learn,
          grow, and take on new challenges in the world of web development.
        </p>
        <div className="icons-container pb-4 flex justify-around sm:justify-between w-full sm:w-auto sm:space-x-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              className="hover:bg-orange-500 border cursor-pointer w-12 h-12 sm:w-16 sm:h-16 p-3 sm:px-3 sm:py-3 rounded-full flex justify-center items-center bg-gray-800 transition-all"
            >
              <i className={link.logo}></i>
            </a>
          ))}
        </div>
        <a
          href="/Contact"
          className="px-4 py-2 text-lg sm:text-xl bg-orange-500 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition-all"
        >
          Contact Me
        </a>
      </div>

      <div className="flex justify-center sm:pe-20 pb-5 sm:pb-0 w-full sm:w-auto">
        {/**Image */}
        <img
          className="rounded-full shadow-sm w-1/2 sm:w-auto"
          src={bannerImage}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
