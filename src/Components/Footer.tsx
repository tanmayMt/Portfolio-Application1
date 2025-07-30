import { Info, socialLinks } from "../User";
import { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  //manage date and time
  // const currentYear = new Date().getFullYear(); // Get the current year dynamically
  // State to manage date and time
  const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format date and time
  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const socialIcons = socialLinks.map((socialLink, index) => {
    return <a key={index} href={`${socialLink.link}`} target="_blank" rel="noopener noreferrer" className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
      <socialLink.icon stroke={1.5} size={25} />
    </a>
  })
  return <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
    <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">{Info.name}</div>
    <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
    <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
    {/* Display current date and time */}
    <div className="datetime-container">
      <p className="date-text">
        📅 <span className="date-highlight">{formattedDate}</span>
      </p>
      <p className="time-text">
        ⏰ <span className="time-highlight">{formattedTime}</span>
      </p>
    </div>
  </div>
}
export default Footer;