// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
// import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import HanumantLogo from './assets/company_logo/Hanumant_Technology_Logo.jpeg';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import clgLogo from './assets/education_logo/clg_logo.jpg';

import sclLogo from './assets/education_logo/school_logo.jpg';

// Project Section Logo's
import contactusLogo from './assets/work_logo/contactus.png';
import newsappLogo from './assets/work_logo/newsapp.png'
import calulatorbmiLogo from './assets/work_logo/calulatorbmi.png'
import wanderlustLogo from './assets/work_logo/wanderlust.png'


export const SkillsInfo = [{
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            // { name: 'SASS', logo: sassLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            // { name: 'Angular', logo: angularLogo },
            { name: 'Redux', logo: reduxLogo },
            // { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            // { name: 'GSAP', logo: gsapLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            // { name: 'Springboot', logo: springbootLogo },
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            // { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            //     { name: 'Firebase', logo: firebaseLogo },
            //     { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            // { name: 'C', logo: cLogo },
            // { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            // { name: 'Python', logo: pythonLogo },
            // { name: 'C-Sharp', logo: csharpLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            // { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            // { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            // { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [{
    id: 0,
    img: HanumantLogo,
    role: "Fullstack Developer",
    company: "Hanumant Technology",
    date: "February 2025 - Present",
    desc: "I am currently undergoing training and internship in MERN Stack Development at Hanumant Technology. During this program, I am gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. This opportunity is helping me strengthen my understanding of front-end and back-end development, API integration, and database management. I am also working on real-world projects, collaborating with a team, and learning best practices in coding and software development. This training is a significant step in my journey toward becoming a skilled and job-ready full-stack developer.",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Bootstrap",

    ],
}, ];

export const education = [{
        id: 0,
        img: clgLogo,
        school: "Integral University Lucknow",
        date: "May 2021 - May 2025",
        grade: "8.1 CGPA",
        desc: "I have completed my Bachelor of Technology in Computer Science Engineering from Integral University. During my time at IUL, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Integral University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Technology-B-tech(Computer Science)",
    },

    {
        id: 2,
        img: sclLogo,
        school: "City Montessory Inter College",
        date: "Apr 2019 - March 2020",
        grade: "73.5%",
        desc: "I completed my class 12 education from City Montessory Inter College,  under the Uttar Pradesh board, where I studied Physics, Chemistry, and Mathematics (PCM).",
        degree: "UP Board(XII) - PCM",
    },
    {
        id: 3,
        img: sclLogo,
        school: "City Montessory Inter College",
        date: "Apr 2017 - March 2018",
        grade: "81.83%",
        desc: "I completed my class 10 education from City Montessory Inter College under the Uttar Pradesh board, where I studied Science.",
        degree: "UP(X), Science",
    },
];


// Project
export const projects = [{
        id: 0,
        title: "Wanderlust",
        description: "Wanderlust is a MERN stack-based hotel booking application that enables users to search, filter, and book hotels seamlessly. It offers a responsive React interface, secure Node.js and Express.js backend, and MongoDB database for efficient data management. The platform simplifies reservations, ensuring a smooth and reliable booking experience.",
        image: wanderlustLogo,
        tags: ["JavaScript", "tailwind Css", "React JS", "MongoDB", "Express", "Node.js", ],
        github: "https://github.com/raziuddin555/Wanderlust",
        webapp: "https://wanderlust-razi.netlify.app/",
    },

    {
        id: 1,
        title: "Contact-us",
        description: "The Contact Us page is a full-stack feature developed using React, Express.js, Node.js, and MongoDB. It allows users to submit their name, email, and message through a responsive and user-friendly form. On submission, the data is validated on the client side and sent to the backend API built with Express and Node.js. The backend handles email sending functionality and also stores the messages securely in a MongoDB database for future reference. This implementation ensures reliable communication, data persistence, and seamless integration between frontend and backend.",
        image: contactusLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "Express JS", "Node JS", "MongoDB", "API"],
        github: "https://github.com/raziuddin555/contactus",
        webapp: "https://razi-contactus.netlify.app/",
    },

    {
        id: 2,
        title: "News App",
        description: "This is a responsive and dynamic News Application developed using React.js and integrated with the News API. It fetches real-time news articles from various categories such as business, technology, sports, entertainment, and more. The app features a clean UI, seamless navigation, and efficient API handling to provide users with up-to-date and relevant news content. It also includes features like category-based filtering, loading indicators, and error handling for a smooth user experience.",
        image: newsappLogo,
        tags: ["React JS", "news API"],
        github: "https://github.com/raziuddin555/News-App",
        webapp: "https://newsapp555.netlify.app/",
    },

    {
        id: 3,
        title: "Calculator-BMI",
        description: "The BMI (Body Mass Index) Calculator is a simple and responsive web application built using React.js. It allows users to calculate their BMI by entering their height and weight. Based on the input, the app instantly computes the BMI and displays the result along with a category such as Underweight, Normal, Overweight, or Obese.This project uses React functional components and the useState hook to manage input and output states efficiently. The user interface is clean, intuitive, and mobile-friendly, making it easy for users of all age groups to navigate and understand their health status.",
        image: calulatorbmiLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://calculator-bmi-razi.netlify.app/",
        webapp: "https://github.com/raziuddin555/calculatorBmi",
    },

    // {
    //     id: ,
    //     title: "",
    //     description: "",
    //     image: ,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //     github: "https://calculator-bmi-razi.netlify.app/",
    //     webapp: " ",
    // },

];