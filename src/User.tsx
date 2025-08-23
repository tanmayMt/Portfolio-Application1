import { IconBrandGmail } from "@tabler/icons-react";
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin,IconPhoneCall } from "@tabler/icons-react";
import MedicineStore from './Projects/MedicineStore2.png';
import PortfolioApplication from './Projects/Portfolio.png';
import StudentManagementSystem from './Projects/StudentManagementSystem.png';
import TourBookingWebsite from './Projects/TourBookingWeb.png';
import DoctorAppointmentSystem from './Projects/DoctorAppointmentSystem.png';
import ElevateBeauty from './Projects/ElevateBeauty.png';
import RestaurantReservationSystem from './Projects/RestaurantReservationSystem.png';
import LoginRegistrationSystem from './Projects/LoginRegistrationSystem.png';
import BillingSystem from './Projects/BillingSystem.png';
import BlogApplication from './Projects/BlogApplication.png';
import DevToolboxApp from './Projects/DevToolboxApp.png';

const Info = {
    name: "Tanmay Samanta",
    stack: ["Software Developer","Mern Stack Developer","Full Stack Developer","Open Source Contributor","Compuer Science Student"],
    //bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
    // bio: "My name is Tanmay Samanta. I am from Kolkata in West Bengal. I did my graduation in BCA from Burdwan University. Currently I am persuming my master's in MCA from makaut University. My short term goal is improve my technical skill and knowledge from my MCA course. My long term goal is to get a job in a reputed organisation where get a chance to use my knowledge and skill to continue in the progress of organisation as well as myself."
    bio: "Hi, I’m Tanmay Samanta from Kolkata, West Bengal. I completed my Master’s in Computer Applications (MCA). I have hands-on experience with Node.js, Express.js, MongoDB, React and Next.js. I specialize in building full-stack web applications, developing scalable back-end systems, designing responsive front-end interfaces, and ensuring performance optimization across the stack."
}


const ProjectInfo = [
    {
        title: "Medicine Store",
        desc: "A medicine store system, also called pharmacy management software, is a tool to help run a pharmacy. It typically helps with tasks like inventory control, billing, and keeping track of customer purchases.",
        image: MedicineStore,
        live: true,
        technologies: ["NodeJS","ExpessJS","React","MongoDB","Git"],
        link: "https://client-iota-liard.vercel.app",
        github: "https://github.com/tanmayMt/Medicine-Store-Project-Using-MERN"
    },
    {
        title: "Doctor Appointment System",
        desc: "Doctor-Appointment-Application is a system that helps manage and schedule appointments between patients and doctors. It often involves an online platform for booking, allowing for easier appointment scheduling and better organization for both patients and medical professionals.",
        image: DoctorAppointmentSystem,
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://client-henna-iota-93.vercel.app",
        github: "https://github.com/tanmayMt/Doctor-Appointment-System-using_MERN"
    },
    {
        title: "Student Management System",
        desc: "Student Management System is a software application used to manage information about students in an educational institution.",
        image: StudentManagementSystem,
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://client-xi-henna.vercel.app",
        github: "https://github.com/tanmayMt/Student_Management_System_using_Spring_Boot"
    },
    {
        title: "Blog Post Application",
        desc: "Blog Application using MERN is a full-stack web application built with MongoDB, Express.js, React.js, and Node.js. It allows users to create, read, update, and delete (CRUD) blog posts. Users can add comments, and the app ensures secure data storage using MongoDB. 🚀",
        image: BlogApplication ,
        live: true,
        technologies: ["NodeJS","ExpessJS","React","MongoDB","Git"],
        link: "https://blog-application-using-mern.vercel.app",
        github: "https://github.com/tanmayMt/blog-application-using-MERN"
    },    
    {
        title: "Tour Booking Website",
        desc: "Tour booking system helps tour operators and travel agencies manage tours and reservations. It essentially automates the booking process for both the business and the customer.",
        image: TourBookingWebsite,
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://client-five-kappa-68.vercel.app/",
        github: "https://github.com/tanmayMt/Tour-Booking-Project-using-MERN"
    },
    {
        title: "Dev Toolbox App",
        desc: "A full-stack web application that allows users to paste raw JSON data, validate and format it, and optionally view previously formatted JSON history. 🔧 Tech Stack Frontend: React.js, Axios, Bootstrap Backend: Node.js, Express.js, MongoDB (Mongoose)",
        image: DevToolboxApp,
        live: false,
        technologies: ["Node.js", "Express", "MongoDB", "ReactJS", "Bootstrap"],
        link: "https://dev-toolbox-beige.vercel.app",
        github: "https://github.com/tanmayMt/dev-toolbox-app"
    },
    {
        title: "Restaurant Reservation System",
        desc: "A web-based restaurant reservation system where customers can book tables online, and restaurant admins can manage reservations.",
        image: RestaurantReservationSystem,
        live: true,
        technologies: ["NodeJS","ExpressJS","React","MongoDB","Git"],
        link: "https://restaurant-reservation-system-using-mern.vercel.app",
        github: "https://github.com/tanmayMt/Restaurant-Reservation-System-Using-MERN"
    },
    {
        title: "Elevate Beauty",
        desc: "This web application that personalizes product recommendations based on user quiz results. Built with modern web technologies, it integrates an engaging quiz interface to understand user preferences and provides tailored beauty product suggestions. It combines user interactivity with data-driven personalization to enhance the shopping experience.",
        image: ElevateBeauty,
        live: true,
        technologies: ["NodeJS","ExpessJS","React","MongoDB","Git"],
        link: "https://github.com/tanmayMt/elevate-beauty",
        github: "https://github.com/tanmayMt/elevate-beauty"
    },
    {
        title: "Portfolio Web Application",
        desc: "Portfolio Website helps you create and manage a website specifically designed to showcase your work, skills, and experience. It's essentially an online resume builder with a focus on visual presentation.",
        image: PortfolioApplication,
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://client-livid-xi.vercel.app",
        github: "https://github.com/tanmayMt/Portfolio-Application-Project-using-MERN"
    },
    {
        title: "Login & Registration System",
        desc: "It allows users to securely register by creating a unique account and log in using their credentials. The system validates user inputs and stores user details for authentication purposes. It is a fundamental application for understanding file handling and user authentication concepts in C.",
        image: LoginRegistrationSystem,
        live: false,
        technologies: ["Using C Language with File Handling & Structure"],
        link: "https://github.com/tanmayMt/Register-Login-System-using-C",
        github: "https://github.com/tanmayMt/Register-Login-System-using-C"
    },
    {
        title: "Billing System ",
        desc: "This is a Console-based Billing system that allows users to select vegetarian or non-vegetarian items, calculate the bill, and display the total amount.",
        image: BillingSystem,
        live: false,
        technologies: ["Using C++ with Array"],
        link: "https://github.com/tanmayMt/Register-Login-System-using-C/blob/main/BillingSystem.cpp",
        github: "https://github.com/tanmayMt/Register-Login-System-using-C/blob/main/BillingSystem.cpp"
    }
]


const SkillInfo = [
    {
        title: "Programming Languages",
        skills: ["Java","JavaScript","Python","C++","PHP","C"]
    },
    {
        title: "Data Structure ",
        skills: ["DSA","Design Analysis & Algorithm"]
    },
    {
        title: "Database ",
        skills: ["MySQL", "MongoDB"]
    },
    {
        title: "Framework",
        skills: ["NodeJS", "ExpressJS","Springboot" ]
    },
    {
        title: "APIs",
        skills: ["REST API"]
    },
    {
       title: "Libraries/Frontend Technologies",
       skills: ["ReactJS","NextJS"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    },

]


const socialLinks = [
    { link: "https://www.linkedin.com/in/tanmay73", icon: IconBrandLinkedin },
    { link: "https://github.com/tanmayMt", icon: IconBrandGithub },
    { link: "mailto:tanmoy587d@gmail.com", icon: IconBrandGmail }, // Add mail link
    { link: "tel:+918768006557", icon: IconPhoneCall } // Phone call link
];


const ExperienceInfo = [
    {
        role: "MERN Stack Developer",
        company: "Benda Infotech LLP",
        date: "Present",
        //desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        // skills: ["JavaScript","NodeJS", "React JS", "MySQL", "Git","Java"]
        skills: ["NodeJS","ExpressJS", "React JS", "MySQL", "MongoDB","Git","Java","DSA","JavaScript"]

    },
    {
        role: "Nextjs Developer Intern",
        company: "Netware Software Pvt.",
        date: "May 2025 - July 2025",
        //desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        // skills: ["JavaScript","NodeJS", "React JS", "MySQL", "Git","Java"]
        skills: ["NextJS","ReactJS","JavaScript","MySQL", "MongoDB","Git",]

    },
    {
        role: "Web Developer",
        company: "Webspidy Software Private Limited",
        date: "Mar 2023 - Feb 2024",
        //desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        // skills: ["JavaScript","NodeJS", "React JS", "MySQL", "Git","Java"]
        skills: ["NodeJS","ExpressJS","Springboot", "React JS", "MySQL", "MongoDB","Git","Java","DSA","JavaScript"]

    },
    // {
    //     role: "Junior Digital Marketing Executive",
    //     company: "Sen Hardware & Plywood",
    //     date: "Aug 2021 - Mar 2022",
    //     // desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Facebook & E-mail Advertising Campaigns", "Mail Chimp", "Facebook Pixel"]
    // },
    // {
    //     role: "Product Listing Associate",
    //     company: "Arnob Grocery Store",
    //     date: "Jun 2020 - Feb 2021",
    //     // desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Amazon & Flipkart Seller", "Microsoft Excel", "Keyword Research"]
    // }
]


const EducationInfo = [
    {
        degree: "Master of Computer Application (MCA)",
        dgpa: "8.72",
        year: "2024",
        university: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    },
    {
        degree: "Bachelor of Computer Application (BCA)",
        percentage: "72.34%",
        year: "2021",
        university: "University of Burdwan",
    }
];


const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "nodedotjs",
    "express",
    "mysql",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "github"
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, EducationInfo, Slugs };
