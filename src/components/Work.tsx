import { useLayoutEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Alad Pro ERP — Global",
    category: "ERP Web Software",
    tools: "React, Node.js, PostgreSQL, Prisma",
    image: "/images/alad_pro_global.png",
  },
  {
    name: "Alad Pro ERP — GCC",
    category: "ERP Web Software (GCC Countries)",
    tools: "React, Node.js, PostgreSQL, Supabase",
    image: "/images/alad_pro_gcc.png",
  },
  {
    name: "Gold Production",
    category: "Production Management Web App",
    tools: "React, Node.js, MySQL, Express.js",
    image: "/images/gold_production.png",
  },
  {
    name: "WhatsApp Integration",
    category: "Messaging & Automation Platform",
    tools: "Node.js, WhatsApp Business API, Express.js",
    image: "/images/whatsapp_integration.png",
  },
  {
    name: "QMS Management",
    category: "Quality Management System",
    tools: "React, Next.js, PostgreSQL, Prisma",
    image: "/images/qms_management.png",
  },
  {
    name: "Bengaluru Malayali Forum",
    category: "Digital Marketing Website",
    tools: "HTML, CSS, JavaScript, Excel DB",
    image: "/images/bengaluru_malayali.png",
  },
  {
    name: "Van Sales",
    category: "E-Commerce / Sales Platform",
    tools: "Node.js, Express, PostgreSQL, SSL",
    image: "/images/van_sales.png",
  },
  {
    name: "ToyMall",
    category: "E-Commerce Platform",
    tools: "React, Node.js, MongoDB, Admin Dashboard",
    image: "/images/toymall.png",
  },
];

const Work = () => {
  useLayoutEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
