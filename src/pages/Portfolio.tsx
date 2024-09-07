import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaLink, FaBars, FaTimes } from 'react-icons/fa'
import { MdArrowOutward } from "react-icons/md";
// import {MoveUpRight} from "lucide-react"


const skills = [
  "JavaScript", "TypeScript", "PHP", "C/C++", "React", "Context API", "Recoil", "Redux",
  "Next.js", "HTML", "CSS", "Tailwind CSS", "Turborepo", "Node.js", "Express", "Prisma",
  "Mongoose", "Auth", "Cloudflare", "OPEN API specs", "Zod", "Nginx", "Reverse Proxies",
  "DDOS protection", "Rate Limiting", "Captchas", "Basic AWS", "WebSockets", "WebRTC",
  "Socket.io", "Pub/Sub", "Postgres SQL", "MongoDB", "Arduino", "Ki CAD"
]

const projects = [
  { 
    name: "Live Link", 
    skills: ["React", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS"], 
    repo: "https://github.com/yasharth-0910/LiveLink",
    description: "Live Link is a real-time video conferencing app with screen sharing capabilities. It includes a signaling server implemented using Socket.IO to manage connection establishment and media stream signaling. The app features functionalities like mic/camera toggling, remote video muting, and real-time status updates. Error handling and Socket.IO reconnections are optimized for consistent performance, ensuring a seamless and user-friendly experience."
  },
  { 
    name: "We-Talk", 
    skills: ["React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL","JWT","Node.js"], 
    repo: "https://github.com/yasharth-0910/We-Talks",
    description: "We-Talk is a blogging website where users can sign up, create accounts, and publish blogs. The platform uses TypeScript and Prisma for efficient back-end management and PostgreSQL for database handling. Users can manage their content, and each post is timestamped, providing a user-friendly platform for content creation and management."
  },
  { 
    name: "Kaze India", 
    skills: ["Next js", "Postgress", "MongoDB", "Tailwind CSS", "shad CN"], 
    repo: "https://github.com/yasharth-0910/Kaze-India",
    description: "Kaze India is a mobile payment app that allows users to sign up, add money to their wallet via net banking, and transfer money to others using their mobile number. The app ensures secure authentication and smooth transaction handling, providing a seamless and user-friendly platform for digital payments and peer-to-peer money transfers."
  },
  {
    name: "Lab-observation-website",
    skills: ["HTML", "CSS", "JavaScript"],
    repo:"https://github.com/yasharth-0910/Lab-Observation-Website",
    description: "LazyLab, created by our team at JIIT, aims to simplify lab reporting for JIIT'ians. We understand the challenges of university life and aim to streamline your lab experience. Spend less time on paperwork and more on learning with LazyLab!"
  }
]

const sections = ["home", "projects", "skills", "responsibilities", "resume"]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sectionRefs = useRef<React.RefObject<HTMLElement>[]>(sections.map(() => React.createRef()))

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs.current[sections.indexOf(sectionId)].current
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans flex flex-col md:flex-row">
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1DB954] text-white p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`w-full md:w-1/4 bg-black p-4 md:p-8 md:fixed md:h-full overflow-auto flex flex-col justify-between transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#1DB954]">Yasharth Singh</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Computer Science Engineering Student
            </p>
            <p className="text-md md:text-lg text-gray-400">
              Jaypee Institute of Information Technology, Noida
            </p>
          </div>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
                  activeSection === section ? 'bg-[#1DB954] text-white' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://github.com/yasharth-0910" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors duration-200">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/yasharth-singh-b2493b284/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors duration-200">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/Yash_mera_naam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors duration-200">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://linktr.ee/Singh_Yasharth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors duration-200">
              <FaLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </aside>

      <main className="w-full md:w-3/4 md:ml-[25%] p-4 md:p-8 space-y-12">
        <section id="home" ref={sectionRefs.current[0]} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1DB954]">About Me</h2>
          <p className="text-md md:text-lg leading-relaxed mb-6 text-gray-300 max-w-2xl">
          My name is Yasharth Singh, a 2nd-year CSE student with a primary interest in Web Development. I am proficient
          in various frontend and backend technologies, with foundational knowledge in DevOps, website security, and
          real-time communication. My projects span different tech stacks, from Next.js to React. I am passionate about
          creating innovative solutions that challenge me and offer opportunities to learn and grow
          </p>
        </section>

        <section id="projects" ref={sectionRefs.current[1]} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1DB954]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#181818] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-[#282828] cursor-pointer"
                onClick={() => window.open(project.repo, '_blank')}>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-[#1DB954] text-black text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                  <p className="text-[#1DB954] hover:underline">View on GitHub <MdArrowOutward className="inline-block" /> </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="https://projects.yasharth.in" className="text-[#1DB954] hover:underline text-lg">
              Explore More Projects <MdArrowOutward className="inline-block" />
            </a>
          </div>
        </section>

        <section id="skills" ref={sectionRefs.current[2]} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1DB954]">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-[#181818] text-[#1DB954] border border-[#1DB954] rounded-full text-sm transition-all duration-300 hover:bg-[#1DB954] hover:text-black cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="responsibilities" ref={sectionRefs.current[3]} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1DB954]">Positions of Responsibility</h2>
          <div className="bg-[#181818] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">CICR</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg md:text-xl font-medium text-[#1DB954]">2023 - Aug 2024 (Volunteer)</h4>
                <p className="text-gray-300">
                  • Contributed to organizing tech events and workshops
                  <br />
                  • Assisted in managing the club's social media presence
                </p>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-[#1DB954]">Aug 2024 - Present (Core Team Member)</h4>
                <p className="text-gray-300">
                  • Lead the development of the club's official website
                  <br />
                  • Coordinate with other team members to plan and execute tech initiatives
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" ref={sectionRefs.current[4]} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1DB954]">Resume</h2>
          <a 
            href="src\Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1DB954] hover:bg-[#1ED760] text-black text-lg py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Download Resume
          </a>
        </section>
      </main>
    </div>
  )
}