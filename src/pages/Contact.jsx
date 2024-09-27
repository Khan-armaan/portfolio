import React from 'react';

const Contact = () => {
  return (
    <>
    <div className=' text-center pt-8 ' > <h1 className='text-3xl font-semibold text-blue-700'>Contact Information</h1> </div>
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <form action="https://formbold.com/s/oPgbb" method="POST">
          <div className="flex gap-5 mb-5">
            <div className="w-1/2 flex flex-col-reverse">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Jane"
                className="w-full pb-2 border-b border-gray-300 bg-white font-medium text-lg text-gray-800 outline-none placeholder-gray-500 focus:border-indigo-600"
              />
              <label
                htmlFor="firstname"
                className="text-gray-800 font-medium text-sm mb-2"
              >
                First name
              </label>
            </div>
            <div className="w-1/2 flex flex-col-reverse">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Cooper"
                className="w-full pb-2 border-b border-gray-300 bg-white font-medium text-lg text-gray-800 outline-none placeholder-gray-500 focus:border-indigo-600"
              />
              <label
                htmlFor="lastname"
                className="text-gray-800 font-medium text-sm mb-2"
              >
                Last name
              </label>
            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="w-1/2 flex flex-col-reverse">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@mail.com"
                className="w-full pb-2 border-b border-gray-300 bg-white font-medium text-lg text-gray-800 outline-none placeholder-gray-500 focus:border-indigo-600"
              />
              <label
                htmlFor="email"
                className="text-gray-800 font-medium text-sm mb-2"
              >
                Email
              </label>
            </div>
            <div className="w-1/2 flex flex-col-reverse">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(319) 555-0115"
                className="w-full pb-2 border-b border-gray-300 bg-white font-medium text-lg text-gray-800 outline-none placeholder-gray-500 focus:border-indigo-600"
              />
              <label
                htmlFor="phone"
                className="text-gray-800 font-medium text-sm mb-2"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="flex flex-col-reverse mb-5">
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Write your message..."
              className="w-full pb-2 border-b border-gray-300 bg-white font-medium text-lg text-gray-800 outline-none placeholder-gray-500 focus:border-indigo-600"
            ></textarea>
            <label
              htmlFor="message"
              className="text-gray-800 font-medium text-sm mb-2"
            >
              Message
            </label>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>website-information-architecture.pdf</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1670_1541)">
                    <path
                      d="M9.00005 7.93906L12.7126 4.22656L13.7731 5.28706L10.0606 8.99956L13.7731 12.7121L12.7126 13.7726L9.00005 10.0601L5.28755 13.7726L4.22705 12.7121L7.93955 8.99956L4.22705 5.28706L5.28755 4.22656L9.00005 7.93906Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1670_1541">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>website-logo.png</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1670_1541)">
                    <path
                      d="M9.00005 7.93906L12.7126 4.22656L13.7731 5.28706L10.0606 8.99956L13.7731 12.7121L12.7126 13.7726L9.00005 10.0601L5.28755 13.7726L4.22705 12.7121L7.93955 8.99956L4.22705 5.28706L5.28755 4.22656L9.00005 7.93906Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1670_1541">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <label
              htmlFor="upload"
              className="flex items-center gap-3 text-indigo-600 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1670_1531)">
                  <path
                    d="M12.3568 6.4644L7.64349 11.1786C7.5639 11.2554 7.50041 11.3474 7.45674 11.4491C7.41307 11.5507 7.39008 11.6601 7.38912 11.7707C7.38815 11.8814 7.40924 11.9911 7.45114 12.0935C7.49304 12.1959 7.55492 12.289 7.63316 12.3672C7.71141 12.4455 7.80445 12.5073 7.90686 12.5492C8.00928 12.5912 8.11901 12.6122 8.22966 12.6113C8.34031 12.6103 8.44966 12.5873 8.55133 12.5436C8.653 12.5 8.74495 12.4365 8.82182 12.3569L13.536 7.64356C14.0049 7.17468 14.2683 6.53875 14.2683 5.87565C14.2683 5.21255 14.0049 4.57661 13.536 4.10773C13.0671 3.63885 12.4312 3.37544 11.7681 3.37544C11.105 3.37544 10.469 3.63885 10.0002 4.10773L5.28599 8.8219C4.89105 9.20701 4.57652 9.6667 4.36062 10.1743C4.14473 10.6819 4.03178 11.2274 4.02832 11.779C4.02487 12.3306 4.13097 12.8774 4.34049 13.3877C4.55 13.8979 4.85876 14.3615 5.24884 14.7516C5.63892 15.1416 6.10256 15.4503 6.61287 15.6597C7.12318 15.8692 7.67 15.9752 8.2216 15.9717C8.77321 15.9681 9.31862 15.8552 9.82629 15.6393C10.3339 15.4234 10.7936 15.1089 11.1787 14.714L16.25 9.64277"
                    stroke="#6366F1"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1670_1531">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Upload files
            </label>
            <input
              type="file"
              name="upload"
              id="upload"
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg mt-8 transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
