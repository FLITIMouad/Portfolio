import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sqli,
  sgs,
  carrent,
  CV,
  loyer,
  nabil,
  mehdi,
  medbr,
  profile,
  khalil,
  portfolio,
  dotnet,
  sql,
  azure,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "terminal",
    title: "Open Terminal",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "DevOps engineer",
    icon: mobile,
  },
  {
    title: "Lead Tech",
    icon: creator,
  },

];

const technologies = [
  {
    name: "Dot Net",
    icon: dotnet,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "SQl server",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Team Lead - Plateforme APM/AP",
    company_name: "SQLI - SGS",
    date: "2023 - Present",
    icon:sgs,
    iconBg: "#1d1836",
    points: [
      "Managing DevOps, frontend, backend, and reporting.",
      "Optimized audit planning and implemented an offline-first architecture.",
      "Spearheaded communication between developers and stakeholders.",
      "Ensured seamless synchronization between online and offline modes.",
    ],
  },
  {
    title: "Fullstack Developer - Plateforme CertiQ",
    company_name: "SQLI - SGS",
    date: "2022 - 2023",
    iconBg: "#232631",
    icon:sgs,
    points: [
      "Optimized audit management system by enhancing data security and automation.",
      "Refactored platform for improved maintainability.",
      "Collaborated with stakeholders to integrate critical features.",
      "Improved data synchronization and contract automation.",
    ],
  },
  {
    title: "Software Engineer - Solution PIM Composable",
    company_name: "SQLI",
    date: "2022",
    iconBg: "#1d1836",
    icon:sqli,
    points: [
      "Developed a modular and scalable e-commerce product management system.",
      "Implemented deployment automation, improving efficiency by 40%.",
      "Adopted a flexible, composable architecture for scalability.",
    ],
  },
  {
    title: "CRM UI Customization - Microsoft Dynamics 365",
    company_name: "SQLI",
    date: "2021 - 2022",
    iconBg: "#232631",
    icon:sqli,
    points: [
      "Customized UI to enhance the user experience on mobile and web.",
      "Developed Proof of Concepts (POCs) for client-specific UI needs.",
      "Optimized system performance for faster and smoother operations.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Mouad is not just an exceptional developer, but a true problem solver. He adapts to any technology thrown his way and consistently finds solutions. His contributions have been invaluable to the team, demonstrating his dedication and expertise.",
    name: "Khalil ALCRDATE",
    designation: "Project Manager",
    company: "SQLI",
    image: khalil,
  },
  {
    testimonial:
      "As a PM, I highly recommend Mouad. He takes initiative, leads when needed, and has been the central pillar of the team. His young age does not define his expertise—his work speaks for itself.",
    name: "Mohamed RHERBAOUI",
    designation: "Scrum Master",
    company: "SQLI",
    image: medbr,
  },
  {
    testimonial:
      "Mouad is an exemplary professional, committed to his work, and an innovative thinker. He consistently surpasses expectations, showcasing technical expertise and adaptability in demanding environments.",
    name: "Mohamed El Hilali",
    designation: "Solution Architect & eCommerce Service Manager",
    company: "SQLI",
    image: profile,
  },
  {
    testimonial:
      "Mouad embodies the role of a 'Software Engineer' with dedication and creativity. His passion for innovation enables him to propose groundbreaking solutions and excel in complex development challenges.",
    name: "El Mehdi MOZOUNA",
    designation: "Senior Manager @ Deloitte | ☁️ Azure & AWS Solutions Architect",
    company: "Deloitte",
    image: mehdi,
  },
  {
    testimonial:
      "Mouad's commitment to his work is commendable. He builds strong connections within the project and upholds the team's reputation. His enthusiasm and drive are inspiring, and he will continue to excel in any endeavor he pursues. Although Mouad has only a few years of experience, he was able to mentor junior developers and solve problems that even senior developers struggled with. He played a crucial role in NoSQL database design, CI/CD deployment pipelines, and Pull Request approvals.",
    name: "Nabil Droussi",
    designation: "Technical Architect | Consultant | Fullstack Software Engineer",
    company: "SQLI",
    image: nabil,
  },
];


const projects = [
  {
    name: "CarsShop",
    description:
      "A real-time auction platform for cars using a microservices architecture, ensuring high performance and scalability for bidding in real-time.",
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/FLITIMouad/Auction",
  },
  {
    name: "Avocat Cross-Platform",
    description:
      "A cross-platform legal case management application for managing client files and legal documents efficiently.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Electron",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: loyer,
    source_code_link: "https://github.com/FLITIMouad/Avocat_App_Across_Platform",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences with an interactive terminal interface.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/your-repo/portfolio",
  },
];
const commands = {
  init:     `
    ███╗   ███╗ ██████╗ ██╗   ██╗ █████╗ ██████╗ 
    ████╗ ████║██╔═══██╗██║   ██║██╔══██╗██╔══██╗
    ██╔████╔██║██║   ██║██║   ██║███████║██║  ██║
    ██║╚██╔╝██║██║   ██║██║   ██║██╔══██║██║  ██║
    ██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║  ██║██████╔╝
    ╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝ 

  Welcome to my portfolio. Type  'mouad help' to see available commands.`,
  help: (
    <pre className="whitespace-pre-wrap text-green-400">
      {`
            Usage: mouad.exe [help | -h] [about | -a] [experience | -e] 
                             [projects | -p] [contact | -c] [clear | clr]
                             [download | -d]

            Available commands:
            help, -h     Display this help menu
            about,  -a   Show information about me
            experience, -e  Show my work experience
            projects, -p  List my projects
            contact, -c  Display contact information
            download -d  Download my CV
            clear, clr    Clear the terminal
            `}
    </pre>
  ),
  about: (
    <pre className='whitespace-pre-wrap text-green-400'>
      {`
      =============================
           ABOUT MOuAD FLITI
      =============================
      
      👨‍💻 Full-Stack .NET Developer | Team Lead
      📅 3+ Years of Experience
      🚀 Expert in .NET / .Net Core, React, Angular ...
      ☁️ Cloud & DevOps: Azure, Terraform, CI/CD
      🏗️ Software Architecture: CQRS, DDD, TDD
      🎯 Passionate about problem-solving & leadership
      
      Type 'skills' to see my technical stack.
      `}
    </pre>
  ),
  skills: (
    <pre className='whitespace-pre-wrap text-green-400'>
      {`
      =============================
             TECHNICAL SKILLS
      =============================
      
      🖥️ Languages: C#, Python, JavaScript, TypeScript
      📦 Frameworks: .NET Core, ASP.NET, Vue.js, Blazor, Angular, React.js
      🗄️ Databases: SQL Server, MongoDB, PostgreSQL, CosmosDB
      ☁️ Cloud: Azure, AWS
      ⚙️ DevOps: Azure DevOps, Docker, Terraform, Git
      🛠️ Testing: Xunit, Jest, Selenium
      🏗️ Architecture: CQRS, Microservices, Domain-Driven Design (DDD), Test-Driven Development (TDD)
      🛠️ CRM: Microsoft Dynamics 365, Microsoft Power Platform
      
      =============================
         TRANSVERSAL SKILLS
      =============================
      
      🤝 Leadership d’équipe
      🎯 Gestion des priorités
      🔄 Collaboration interfonctionnelle
      ⚡ Optimisation des processus
      
      Type 'experience' to see my work history.
      `}
    </pre>
  ),
  experiences: (
    <pre className='whitespace-pre-wrap text-green-400'>
      {`
    =============================
           WORK EXPERIENCE
    =============================
    
    🔹 Plateforme DIGIAPP(APM/AP) (2023 – Present)
       🛠️ Tech Lead managing DevOps, frontend, backend, and reporting
       🚀 Improved audit planning and offline-first architecture
       🔗 Technologies: .NET Core, Angular, Azure Cosmos DB, Azure Event Hub, Docker
    
    🔹 Plateforme CertiQ (2022 – 2023)
       🔍 Optimized an audit management platform
       🛠️ Enhanced data integration, security, and contract automation
       🔗 Technologies: .NET Core, Vue.js, SQL Server, Azure Event Hub, Stimulsoft
    
    🔹 Solution PIM Composable (2022)
       ⚙️ Developed a flexible e-commerce product management system
       📈 Automated deployments (40% efficiency boost) with modular design
       🔗 Technologies: .NET Core, Terraform, Azure Functions
    
    🔹 CRM UI Customization (2021 – 2022)
       📱 Optimized UI for Microsoft Dynamics 365 on mobile & web
       🛠️ Developed POCs and enhanced performance across platforms
       🔗 Technologies: Dynamics 365, Power Platform, .NET Framework, XrmToolBox, JavaScript
    
    Type 'projects' to see my featured projects.
    `}
    </pre>
  ),
  projects:
    (
      <pre className='whitespace-pre-wrap text-green-400'>
        {`
=============================
       PROJECTS
=============================

🚗 CarsShop - Real-time Auction Platform
 🏗️ Built using Microservices Architecture
 🔗 Technologies: .NET Core, PostgreSQL, MongoDB, RabbitMQ, CQRS

⚖️ Avocat Cross-Platform - Legal Case Management
 📱 Developed a web & desktop app for document management
 🔗 Technologies: React.js, Electron, Node.js, MongoDB

💼 Portfolio Website
 🌐 An interactive portfolio showcasing my work & skills
 🔗 Technologies: React.js, Tailwind CSS, Three.js

Type 'contact' to reach out!
`}
      </pre>
    ),
  contact: (
    <pre className='whitespace-pre-wrap text-green-400 text-center'>
      {`
=============================
     CONTACT INFO
=============================
`}<p className="pl-5">📧 Email:  <a href='mailto:mouadfliti@gmail.com' target='_blank' className="text-green-400">➤ mouadfliti@example.com</a></p>
      <p>🔗 LinkedIn:  <a href='https://linkedin.com/in/mouad-fliti/' target='_blank' className="text-green-400">➤ mouad fliti</a></p>
      <p>🐙 GitHub:  <a href='https://github.com/FLITIMouad' target='_blank' className="text-green-400">➤ mouad fliti</a></p>
      <p>📞 Phone: +212 6 59 14 57 69</p>
      <p>Type 'help | -h' to see available commands.</p>
    </pre>
  ),
  download:( <pre className='whitespace-pre-wrap text-green-400 text-center'>
    {`
=============================
       DOWNLOAD CV
=============================`}
  <p>📄 Click below to download my CV:</p>
  <a href={CV} download className='text-blue-400 underline'>Download CV</a>

  <p>Type 'help | -h' to see available commands.</p>
  </pre>),
  clear: "clear",

}

const shortCutcommands = {
  "-i": commands.init,
  "-h": commands.help,
  "-a": commands.about,
  "-s": commands.skills,
  "-e": commands.experiences,
  "-p": commands.projects,
  "-c": commands.contact,
  "-d": commands.download,
  clr: commands.clear,

}
export { services, technologies, experiences, testimonials, projects, commands, shortCutcommands };
