import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaLink, FaBars, FaTimes } from 'react-icons/fa'
import { MdArrowOutward } from "react-icons/md"

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
    skills: ["React js", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS", "shad CN"], 
    repo: "https://github.com/yasharth-0910/LiveLink",
    description: "Live Link is a real-time video conferencing app with screen sharing capabilities. It includes a signaling server implemented using Socket.IO to manage connection establishment and media stream signaling. The app features functionalities like mic/camera toggling, remote video muting, and real-time status updates. Error handling and Socket.IO reconnections are optimized for consistent performance, ensuring a seamless and user-friendly experience."
  },
  { 
    name: "We-Talk", 
    skills: ["React js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL","JWT","Node.js"], 
    repo: "https://github.com/yasharth-0910/We-Talks",
    description: "We-Talk is a blogging website where users can sign up, create accounts, and publish blogs. The platform uses TypeScript and Prisma for efficient back-end management and PostgreSQL for database handling. Users can manage their content, and each post is timestamped, providing a user-friendly platform for content creation and management."
  },
  { 
    name: "Kaze India", 
    skills: ["Next js", "Postgress", "MongoDB", "Tailwind CSS", "shad CN", "prisma"], 
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans">
      <header className="md:hidden bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Yasharth Singh</h1>
        <button 
          className="text-cyan-400 p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      <div className="flex flex-col md:flex-row">
        <aside className={`
          w-full md:w-1/4 bg-gray-900 bg-opacity-95 backdrop-blur-lg
          md:p-8 md:fixed md:h-full md:overflow-auto
          flex flex-col justify-between transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'fixed inset-0 z-40' : 'hidden md:flex'}
        `}>
          <div>
            <div className="mb-10 p-4 md:p-0 space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Yasharth Singh</h1>
              <div className="space-y-2">
                <p className="text-lg md:text-xl pt-3 text-cyan-300 font-semibold">
                  Computer Science Engineering Student
                </p>
                <p className="text-base md:text-lg text-gray-400">
                  Jaypee Institute of Information Technology, Noida
                </p>
              </div>
            </div>
            <nav className="space-y-2 p-4 md:p-0">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-4 rounded text-base md:text-lg transition-all duration-300 ${
                    activeSection === section ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/50' : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-500/30'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 p-4 md:p-0">
            <div className="flex justify-center space-x-6 mb-4 pt-4">
              <a href="https://github.com/yasharth-0910" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/yasharth-singh-b2493b284/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/Yash_mera_naam" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linktr.ee/Singh_Yasharth" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <FaLink className="h-6 w-6" />
              </a>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 md:ml-[25%] p-6 md:p-10 space-y-16">
          <section id="home" ref={sectionRefs.current[0]} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">About Me</h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200 max-w-3xl">
            I am Yasharth Singh, a 2nd-year Computer Science student with a deep passion for Web Development. My expertise spans both frontend and backend technologies, including the latest frameworks and tools, with a solid foundation in DevOps, website security, and real-time communication.

I have worked on diverse projects using tech stacks like Next.js, React, and more, always seeking innovative solutions that push boundaries and fuel my curiosity. I am dedicated to continuous learning and excited to tackle new challenges that drive growth and impact.
            </p>
          </section>

          <section id="projects" ref={sectionRefs.current[1]} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:bg-gray-700 cursor-pointer group"
                  onClick={() => window.open(project.repo, '_blank')}>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200">{project.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-900 text-cyan-200 text-xs md:text-sm rounded-full">{skill}</span>
                      ))}
                    </div>
                    <p className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 flex items-center text-sm md:text-base">
                      View on GitHub <MdArrowOutward className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://projects.yasharth.in" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-base md:text-lg flex items-center group">
                Explore More Projects <MdArrowOutward className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </section>

          <section id="skills" ref={sectionRefs.current[2]} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm md:text-base transition-all duration-300 hover:bg-cyan-900 hover:text-white hover:shadow-md hover:shadow-cyan-500/30 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="responsibilities" ref={sectionRefs.current[3]} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Positions of Responsibility</h2>
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300">CICR</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg md:text-xl font-medium text-cyan-400 mb-2">2023 - Aug 2024 (Volunteer)</h4>
                  <ul className="text-gray-200 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Contributed to organizing tech events and workshops</li>
                    <li>Assisted in managing the club's social media presence</li>
                    <li>Made and currently managing club Linkedin Page</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-medium text-cyan-400 mb-2">Aug 2024 - Present (Core Team Member)</h4>
                  <ul className="text-gray-200 list-disc list-inside space-y-1 text-sm md:text-base">
                    <li>Leading the development of the club's official website</li>
                    <li>Coordinate with other team members to plan and execute tech initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="resume" ref={sectionRefs.current[4]} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Resume</h2>
          <a 
            href="/Yasharth-Resume.pdf" 
            download="Yasharth-Resume.pdf"
            className="bg-cyan-600 hover:bg-cyan-700 text-white text-base md:text-lg py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            Download Resume
          </a>
        </section>
        </main>
      </div>
    </div>
  )
}