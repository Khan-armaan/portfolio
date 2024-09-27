import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Armaan Khan");
  const [menuLink, setMenuLink] = useState([
    {
      title: "Home",
      link: "/Home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/Expertise",
      id: 3,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 4,
    },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "https://mag.wcoomd.org/uploads/2018/05/blank.pdf",
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-30 px-4 sm:px-16 py-4 sm:py-2 border shadow-md bg-gray-200">
        <div className="mb-4 sm:mb-0">
          {/**Brand logo */}
          <h1 className="text-2xl sm:text-3xl font-bold">{brandName}</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3 text-center sm:text-left mb-4 sm:mb-0">
          {/**Menu links */}
          {menuLink.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-orange-300 py-2 sm:py-0"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/**Action button */}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-800 text-white px-4 py-2 text-sm sm:text-xl border shadow rounded-full hover:bg-orange-700 transition-all"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
