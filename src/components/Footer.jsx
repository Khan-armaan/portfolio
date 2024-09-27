const Footer = () => {
  return (
    <>
      <div className="py-5 bg-gray-100 flex flex-col sm:flex-row justify-between items-center px-5 sm:px-32 text-center sm:text-left">
        <div className="text mb-3 sm:mb-0">
          <p>
            ©2024 Armaan Khan <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="links space-y-3 sm:space-y-0 sm:space-x-5">
          <a href="/about" className="hover:underline block sm:inline">
            About
          </a>
          <a href="/privacy-policy" className="hover:underline block sm:inline">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline block sm:inline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline block sm:inline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
