import constructionwebsite from "../assets/images/constructionwebsite.png";
import akarauto from "../assets/images/akarauto.png";
// import sagemind from "../assets/images/sagemind.png";
import grinderwebsite from "../assets/images/grinderwebsite.png";
// import handymanwebsite from "../assets/images/themasterhandymanwebsite.png";
import vivaroofing from "../assets/images/vivaroofing.png";

export const portfolio = {
  title: "Our Portfolio",
  topper: "Example Works",
  description:
    "Explore a diverse array of projects that showcase our ability to transform ideas into impactful digital solutions. From sleek and modern website designs to feature-rich platforms, every project reflects our commitment to quality and innovation. With each portfolio piece, we demonstrate a seamless blend of creativity, functionality, and performance excellence tailored to meet unique client needs.",
  projects: [
    {
      projectImage: vivaroofing,
      alt: "Viva roofing and home improvement website built by NCAT Digital",
      projectName: "Viva Roofing and Home Improvement",
      projectDescription:
        "A simple, modern website landing page for viva roofing and home improvement. Showcasing their services and contact info.",
      projectLink: "https://vivaroofinghomeimprovement.com/",
    },
    {
      projectImage: akarauto,
      alt: "Akar Auto Center website built by NCAT Digital",
      projectName: "Akar Auto Center",
      projectDescription:
        "A responsive website for Akar Auto Center, highlighting automotive expertise with project galleries and client testimonials.",
      projectLink: "https://akarautocenter.com/",
    },
    // {
    //   "projectImage": constructionwebsite,
    //   "alt": "Kirck Construction website built by NCAT Digital",
    //   "projectName": "Kirck Construction",
    //   "projectDescription": "A modern, responsive website highlighting Kirck Construction's expertise in renovations and builds, featuring detailed project galleries and client testimonials.",
    //   "projectLink": "https://kirckconstruction.netlify.app/"
    // },
    // {
    //   "projectImage": handymanwebsite,
    //   "alt": "Handyman website built by NCAT Digital",
    //   "projectName": "The Master Handyman",
    //   "projectDescription": "An efficient and professional website for The Master Handyman, providing easy navigation through services, booking options, and project showcases.",
    //   "projectLink": "https://www.handymanmastery.com/"
    // },
    {
      projectImage: grinderwebsite,
      alt: "Restaurant website built by NCAT Digital",
      projectName: "Liberty's Mediterranean Grinders",
      projectDescription:
        "A sleek, elegant website for Liberty's, featuring stunning food photography, a menu display, and online reservations.",
      projectLink: "https://libertysmediterraneangrinders.com/",
    },
  ],
};
