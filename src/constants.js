// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';


// Experience Section Logo's
import HanumantLogo from './assets/company_logo/Hanumant_Technology_Logo.jpeg';
import InternshalaLogo from './assets/company_logo/Internshala.jpeg';



// Education Section Logo's
import clgLogo from './assets/education_logo/clg_logo.jpg';
import sclLogo from './assets/education_logo/school_logo.jpg';


// Project Section Logo's
import razicartLogo from './assets/work_logo/razicart.jpeg';
import razicartAdminLogo from './assets/work_logo/raziadmin.jpeg';
import airbnbLogo from './assets/work_logo/airbnb.jpeg'
import examnotesLogo from './assets/work_logo/examnotes.jpeg'
import contactusLogo from './assets/work_logo/contactus.png';
import newsappLogo from './assets/work_logo/newsapp.png'
import calulatorbmiLogo from './assets/work_logo/calulatorbmi.png'
import weatherLogo from './assets/work_logo/weather.jpeg'



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
        date: "February 2025 - July 2025",
        desc: "Completed a 6-month MERN Stack Full Stack Development training program at Hanumant Technology Pvt. Ltd., Lucknow (February 2025 – July 2025). Gained practical experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Learned frontend development, backend development, RESTful API integration, database management, user authentication, and responsive UI design. Worked on hands-on projects to strengthen programming, problem-solving, and real-world application development skills. Also gained experience with JavaScript, Git, GitHub, and modern web development tools.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            "Express JS",
            "DSA",
            "REST API",
            "Git",
            "GitHub",

        ],
    },

    {
        id: 1,
        img: InternshalaLogo,
        role: "Full Stack Development Internship",
        company: "Internshala",
        date: "14 January 2026 - 14 July 2026",
        desc: "Successfully completed a 6-month online Internship + Training program in MERN Stack Full Stack Development with AI through Internshala (14 January – 14 July). Gained hands-on experience in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Learned to build RESTful APIs, manage databases, implement authentication and authorization, and develop responsive user interfaces. Also gained practical knowledge of AI integration using AI APIs, Git, and GitHub. Worked on practical projects that strengthened my problem-solving skills and ability to develop modern, scalable, AI-powered web applications.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            "Express JS",
            "DSA",
            "AI API",
            "Git",
            "GitHub",
            "REST API",

        ],

    }

];


// Education 
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
export const projects = [

    {
        id: 0,
        title: "AirBnb Clone",
        description: "Airbnb Clone is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), allowing users to explore property listings, add new properties, manage accommodations, and share reviews through a responsive and user-friendly interface.",
        image: airbnbLogo,
        tags: ["JavaScript", "tailwind Css", "React JS", "MongoDB", "Express", "Node.js", ],
        github: "https://github.com/raziuddin555/Airbnb",
        webapp: "https://airbnb-frontend-qpvk.onrender.com",
    },


    {
        id: 2,
        title: "ExamNotes.AI",
        description: "ExamNotes.AI is an AI-powered study platform built using the MERN stack and Google Gemini API. It helps students generate smart study notes, create summaries, and organize learning materials efficiently. The platform also includes PDF generation, payment integration, data visualization, and interactive diagrams to enhance the learning experience.",
        image: examnotesLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/raziuddin555/ExamNotes.AI",
        webapp: "https://examnotes-aiclient-ukmk.onrender.com",
    },



    {
        id: 3,
        title: "RaziCart AI Powered E-Commerce",
        description: "RaziCart is an AI-powered full-stack e-commerce web application built using the MERN stack. It provides a seamless shopping experience with intelligent product recommendations, user authentication, product management, shopping cart functionality, and secure payment integration. Designed with a responsive and user-friendly interface for a smooth online shopping experience.",
        image: razicartLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/raziuddin555/AI-Powered-E-Commerce-RaziCart",
        webapp: "https://razicart-frontend.onrender.com",
    },

    {
        id: 4,
        title: "RaziCart_Amin",
        description: "Razi Admin is an admin dashboard for managing the RaziCart AI-powered e-commerce platform. Built using modern web technologies, it enables administrators to manage products, monitor orders, track sales, manage users, and analyze business performance through an intuitive and responsive interface.",
        image: razicartAdminLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/raziuddin555/AI-Powered-E-Commerce-RaziCart",
        webapp: " https://razicart-admin.onrender.com",
    },

    {
        id: 5,
        title: "Weather Forecast Application",
        description: "A responsive Weather Forecast App built with HTML, CSS, and JavaScript using the OpenWeather API to display real-time weather information for different cities.",
        image: weatherLogo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/raziuddin555/Weather-Forecast-Application",
        webapp: "https://weather-forecast-razi.netlify.app/",
    },




    {
        id: 6,
        title: "News App",
        description: "This is a responsive and dynamic News Application developed using React.js and integrated with the News API. It fetches real-time news articles from various categories such as business, technology, sports, entertainment, and more. The app features a clean UI, seamless navigation, and efficient API handling to provide users with up-to-date and relevant news content. It also includes features like category-based filtering, loading indicators, and error handling for a smooth user experience.",
        image: newsappLogo,
        tags: ["React JS", "news API"],
        github: "https://github.com/raziuddin555/News-App",
        webapp: "https://news-app-razi.netlify.app/",
    },

    {
        id: 7,
        title: "Calculator-BMI",
        description: "The BMI (Body Mass Index) Calculator is a simple and responsive web application built using React.js. It allows users to calculate their BMI by entering their height and weight. Based on the input, the app instantly computes the BMI and displays the result along with a category such as Underweight, Normal, Overweight, or Obese.This project uses React functional components and the useState hook to manage input and output states efficiently. The user interface is clean, intuitive, and mobile-friendly, making it easy for users of all age groups to navigate and understand their health status.",
        image: calulatorbmiLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/raziuddin555/calculatorBmi",
        webapp: "https://calculator-bmi-razi.netlify.app/",
    },

    // {
    //     id: ,
    //     title: "",
    //     description: "",
    //     image: ,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //     github: "",
    //     webapp: "",
    // },

];