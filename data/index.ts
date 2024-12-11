export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a NextJS Apps",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "ProjectHub : Projects Sharing Platform",
      des: "Discover and share innovative projects on ProjectHub, a platform designed for creators to showcase their work and connect with a vibrant community of tech enthusiasts.",
      img: "/p1.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.svg" ],
      link: "https://project-hub-sand.vercel.app/",
      redirectText : "Check Live Site"
    },
    {
      id: 2,
      title: "Realtime Chat App",
      des: "A fast, secure chat and video conferencing platform built with Next.js, Tailwind CSS, TypeScript, and Agora APIs.",
      img: "/p2.svg",
      iconLists: ["/flutter.svg", "/dart.svg", "/firebase.svg","./agora.svg"],
      link: "Link Will Be Available Soon  ",
      redirectText : "View Code"
    },
    {
      id: 3,
      title: "Neshaytech: Software Development Company",
      des: "A comprehensive software development company specializing in creating robust solutions, including chat and video conferencing platforms, powered by Next.js, Tailwind CSS, TypeScript, and Agora APIs.",
      img: "/p3.svg",
      iconLists: ["/html.svg", "/js.svg", "/bootstrap.svg","/netlify.svg"],
      link: "https://neshaytech.com/",
      redirectText : "Check Live Site"
    },
    {
      id: 4,
      title: "Drone Landing Automation",
      des: "An innovative system designed for autonomous drone landing, utilizing Python, OpenCV, NVIDIA hardware, and Pixhawk for precision and safety in automated drone operations.",
      img: "/drone.jpg",
      iconLists: ["/python.svg", "/opencv.svg", "/nvidia.svg","/pixhawk.svg"],
      link: "Link Will Be Available Soon",
      redirectText : "Working Video"
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Dhruv was a fantastic experience. He demonstrated exceptional technical expertise and a clear understanding of our project requirements. The solution he delivered was not only efficient but also scalable, with clean and maintainable code. His proactive communication ensured we were always aligned, and he was quick to incorporate feedback. The final product exceeded our expectations, and I would gladly work with Dhruv again on future projects!",
      name: "Janvi Shah",
      title: "Client From Gujrat",
    },
    {
      quote:
        "I am incredibly impressed by Dhruv&apos;s ability to turn complex ideas into functional and user-friendly solutions. From the initial consultation to the delivery of our app, he showed immense creativity, professionalism, and reliability. He went above and beyond to suggest innovative features we hadn't considered, adding significant value to the project. Dhruv is not just a developer; he&apos;s a problem solver who cares deeply about his client&apos;s success.",
      name: "Sunil Pandit",
      title: "Client From Maharashtra",
    },
    {
      quote:
        "Working with Dhruv was a great experience. He developed a website for me using Python and Flask, and took the time to make sure it was exactly how I wanted. He was patient, open to feedback, and made all the changes I requested. Dhruv focused on delivering quality and ensuring my satisfaction rather than rushing through the project. His skill and dedication were evident, and I highly recommend him!.",
      name: "Alex",
      title: "Client Form London, UK",
    },

 
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Flutter App Developer",
      desc: "Developed cross-platform mobile apps with Flutter, focusing on performance and UI.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "React Native App Dev",
      desc: "Built mobile apps for iOS & Android using React Native with responsive UI.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led end-to-end mobile app development, from concept to app store deployment.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Educator at YouTube",
      desc: "Created tutorials on mobile and web development using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/dhruvarne22"
    },
    {
      id: 2,
      img: "/insta.svg",
      link : "https://www.instagram.com/dhruv_arne/"
    },
    {
      id: 3,
      img: "/link.svg",      
      link : "https://www.linkedin.com/in/dhananjay-arne-709204203/"

    },
    {
      id: 4,
      img: "/youtube.svg",
      link : "https://www.youtube.com/@CodeWithDhruv"
    },
  ];