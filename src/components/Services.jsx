import { useState } from "react";

const Services = () => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Frontend Dev",
      icon: "fa-solid fa-code text-4xl",
      description: `My focus is on delivering responsive and user-friendly designs that provide an intuitive experience across all devices. With a strong foundation in HTML, CSS, and JavaScript, along with experience in modern frameworks like React`,
      actionButton: {
        title: 'Check',
        link: '/check'
      }
    },
    {
      id: "2",
      title: "Backend Dev",
      icon: "fa-solid fa-server text-4xl",
      description: `I focus on building the robust and scalable foundations that power web applications. I have a strong command of server-side languages. My work ensures that data is efficiently processed, and readily accessible, enabling the frontend to operate seamlessly.`,
      actionButton: {
        title:'Check',
        link: '/checkl'
      }
    },
    {
      id: "3",
      title: "Cloud and Databases",
      icon: "fa-brands fa-aws text-4xl",
      description:`With expertise in cloud computing and database management, I ensure that web applications are not only scalable but also reliable and secure.`,
      actionButton: {
        title: 'Check',
        link: '/check'
      }
    }
  ]);

  return (
    <>
      <div className="main-container py-8 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container flex flex-col sm:grid sm:grid-cols-3 items-center gap-8 mt-8 sm:mt-10 px-5 sm:px-10">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="services cursor-pointer hover:bg-slate-100 bg-slate-200 p-6 text-center space-y-4 shadow-lg rounded-xl"
            >
              <i className={dataItem.icon}></i>
              <h1 className="text-2xl sm:text-4xl">{dataItem.title}</h1>
              <p className="text-base sm:text-lg">
                {dataItem.description}
              </p>
         <div className="mt-4">     <a
                href={dataItem.actionButton.link}
                className="px-4 py-2 bg-orange-500 rounded-full shadow-md text-lg sm:text-2xl text-white hover:bg-orange-600 transition-all"
              >
                {dataItem.actionButton.title}
              </a> </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
