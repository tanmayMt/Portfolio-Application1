

import { Avatar } from "@mantine/core";
import Java from './Icons/Java.png';
import JavaScript from './Icons/JavaScript.png';
import Python from './Icons/Python.png';
import CPlusPlus from './Icons/C++.png';
import PHP from './Icons/PHP.png';
import C from './Icons/C.png';
import DSA from './Icons/DSA.png';
import DesignAnalysisAlgorithm from './Icons/Design Analysis & Algorithm.png';
import MySQL from './Icons/MySQL.png';
import MongoDB from './Icons/MongoDB.png';
import NodeJS from './Icons/NodeJS.png';
import ExpressJS from './Icons/ExpressJS.png';
import Springboot from './Icons/Springboot.png';
import ReactJS from './Icons/ReactJS.png';
import NextJS from './Icons/NextJS.png';
import Git from './Icons/Git.png';
import Github from './Icons/Github.png';
import VSCode from './Icons/VSCode.png';
import Postman from './Icons/Postman.png';
import MongoDBCompass from './Icons/MongoDBCompass.png';
import RestApi from './Icons/RestAPI.png';

// Map skill names to corresponding logos
const skillLogos: Record<string, string> = {
  Java,
  JavaScript,
  Python,
  "C++":CPlusPlus,
  PHP,
  C,
  DSA,
  "Design Analysis & Algorithm": DesignAnalysisAlgorithm,
  MySQL,
  MongoDB,
  NodeJS,
  ExpressJS,
  Springboot,
  "REST API":RestApi,
  ReactJS,
  NextJS,
  Git,
  Github,
  "VS Code":VSCode,
  Postman,
  "MongoDB Compass":MongoDBCompass,
};

// Map skill names to corresponding GitHub repositories
const skillRepos: Record<string, string> = {
  Java: "https://github.com/tanmayMt/Let-s_Learn_Java.git",
  JavaScript: "https://github.com/tanmayMt/Let-s_Learn_JavaScript.git",
  Python: "https://github.com/tanmayMt/Let-s-Learn-Python.git",
  "C++": "https://github.com/tanmayMt/tanmayMt-Let-s-Learn-C-Plus_Plus.git",
  PHP: "https://github.com/tanmayMt/Let-s-Learn-PHP",
  C: "https://github.com/tanmayMt/Let-s-Learn-C",
  DSA: "https://github.com/tanmayMt/Let-s-Learn-Data_Structure",
  "Design Analysis & Algorithm": "https://github.com/tanmayMt/design-algorithm",
  MySQL: "https://github.com/tanmayMt/SQL-Qusestions-Answers",
  MongoDB: "https://github.com/tanmayMt/Let-s_Learn_mongodb.git",
  NodeJS: "https://github.com/tanmayMt/Let-s_Learn_NodeJS_ExpressJS",
  ExpressJS: "https://github.com/tanmayMt/Let-s_Learn_NodeJS_ExpressJS",
  Springboot: "https://github.com/tanmayMt/Student_Management_System_using_Spring_Boot",
  "REST API": "https://github.com/tanmayMt/RESTs_API_Onging_Project",
  ReactJS: "https://github.com/tanmayMt/Let-s_Learn_ReactJS",
  NextJS: "https://github.com/tanmayMt/Let-s-Learn-NextJs",
  Git: "https://github.com/tanmayMt/Let-s-learn-Git-GitHub",
  Github: "https://github.com/tanmayMt/Let-s-learn-Git-GitHub",
  "VS Code": "https://code.visualstudio.com/",
  Postman: "https://www.postman.com/tanmay30112000",
  "MongoDB Compass": "https://www.mongodb.com/",
};


const SkillBadge = (skills: string[]) => {
  return skills.map((skill: string, index: number) => (
    <a
      key={index}
      href={skillRepos[skill] || "#"} // Link to repo or "#" if no link
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
          <div
      // key={index}
      className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1"
    >
      {/* Dynamically load the corresponding logo */}
      <img
        className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"
        src={skillLogos[skill]} // Access the logo from the mapping
        alt={`${skill} logo`}
      />
      <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm">
        {skill}
      </div>
    </div>
    </a>

  ));
};

const SkillCard = (props: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full"
    >
      <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold">
        {props.title}
      </div>
      <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
