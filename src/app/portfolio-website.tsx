'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Linkedin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll to section and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">Apeksha P Shetty</h1>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className={`text-sm font-medium ${activeSection === 'experience' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`text-sm font-medium ${activeSection === 'projects' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`text-sm font-medium ${activeSection === 'skills' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-500'}`}
              >
                Contact
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>


      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Apeksha P Shetty
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl">
                Frontend Developer & Information Science Engineering Student
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <a 
                  href="mailto:apekshashetty761@gmail.com" 
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md flex items-center hover:bg-gray-100"
                >
                  <Mail size={16} className="mr-2" />
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-800"
                >
                  View Projects
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate Information Science and Engineering student at BNM Institute of Technology, maintaining a CGPA of 9.68. I'm dedicated to continuous learning and skill enhancement, seeking opportunities to contribute effectively in technology-driven roles.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="mb-4">
                  <p className="font-medium text-gray-900">B.E., Information Science and Engineering</p>
                  <p className="text-gray-700">BNM Institute of Technology | 2021 - Present</p>
                  <p className="text-gray-600">CGPA: 9.68</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Pre-University College, Science</p>
                  <p className="text-gray-700">Amratha Bharathi PU College | July 2021</p>
                  <p className="text-gray-600">Percentage: 98</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Experience 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Frontend Developer (React/Next.js)</h3>
                  <p className="text-indigo-600 text-sm">Nov 2024 - Present</p>
                </div>
                <p className="text-gray-600 mb-4">Clinking Goblets Celebrifi Private Limited, Bengaluru, India | Hybrid</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Developed and maintained a dynamic event management platform using Next.js, React, and Tailwind CSS.</li>
                  <li>Integrated REST APIs for fetching event data, implemented authentication, and optimized UI for a seamless user experience.</li>
                </ul>
              </div>
              
              {/* Experience 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Full Stack with AI/ML Intern</h3>
                  <p className="text-indigo-600 text-sm">Oct 2023 - Nov 2023</p>
                </div>
                <p className="text-gray-600 mb-4">Contrivers Technologies, Bengaluru, India | Remote</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Focused on full-stack development integrated with machine learning and artificial intelligence.</li>
                  <li>Developed deep learning based chatbot uses neural networks to understand and generate text.</li>
                </ul>
              </div>
              
              {/* Experience 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Salesforce Administrator Intern</h3>
                  <p className="text-indigo-600 text-sm">Nov 2023 - Dec 2023</p>
                </div>
                <p className="text-gray-600 mb-4">Salesforce, Bengaluru, India | Online</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Managed and updated customer records in Salesforce CRM, ensuring data accuracy.</li>
                  <li>Created and customized dashboards in Salesforce to visualize key metrics and performance indicators.</li>
                  <li>Collaborated with cross-functional teams to gather requirements and create dashboards tailored to specific business needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Result Management System</h3>
                <p className="text-gray-700 mb-4">
                  Developed a website using MySQL and Python to optimize academic record-keeping and automate result entry, providing interface for students and teachers to access and manage academic records.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">MySQL</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Web Development</span>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Travelholic</h3>
                <p className="text-gray-700 mb-4">
                  Created a travel planning website using React.js and Firebase that enables users to efficiently plan and organize their trips, incorporating real time data and user-friendly design to enhance travel planning experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">React.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Firebase</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">UI/UX</span>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diabetes Analysis</h3>
                <p className="text-gray-700 mb-4">
                  Used machine learning algorithms to predict diabetes risk by analyzing health and lifestyle data.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Data Analysis</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Python</span>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blood Donation Management System</h3>
                <p className="text-gray-700 mb-4">
                  Utilized JDBC database to manage donor registration and blood stock processes, ensuring efficient and accurate tracking of blood donations and inventory.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">JDBC</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Database Management</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Java</span>
                </div>
              </div>
              
              {/* Project 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Remote</h3>
                <p className="text-gray-700 mb-4">
                  Designed an IoT device for real-time alerts, image capture, and GPS tracking during emergencies using Arduino, GSM, and ESP-32 camera modules.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">IoT</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Arduino</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">ESP-32</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">GSM</span>
                </div>
              </div>
              
              {/* Project 6 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Osteoporosis Detection using Federated Learning</h3>
                <p className="text-gray-700 mb-4">
                  This project uses Federated Learning to detect osteoporosis in women while keeping patient data private and secure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Federated Learning</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Healthcare</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Programming Languages</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Java</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Python</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">C</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Web Development</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">HTML</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">CSS</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">React JS</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Next JS</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Databases</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">MySQL</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Cloud & DevOps</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Microsoft Azure</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">DevOps</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Soft Skills</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Problem-solving</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Collaborative work</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Decision-making</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Teamwork</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Communication</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Time Management</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Certifications</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Anveshana: Project Review held at Sir M Visvesvaraya Institute of Technology</li>
                    <li>Anveshana Hackathon: 3 days Anveshana Science and Engineering Fair provided by Agasthya International Foundation</li>
                    <li>Infosys Springboard: Computer Network</li>
                    <li>NPTEL: Completion of Natural Language Processing certificate (NLP)</li>
                    <li>IIT Bombay: Certificate for Completion of C Training</li>
                    <li>ICT Academy: Course on UI Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a 
                  href="mailto:apekshashetty761@gmail.com"
                  className="flex items-center text-white hover:text-indigo-200"
                >
                  <Mail size={20} className="mr-2" />
                  apekshashetty761@gmail.com
                </a>
                <a 
                  href="https://github.com/ApekshaShetty123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-indigo-200"
                >
                  <FaGithub size={20} className="mr-2" />
                  Github
                </a>
                <a 
                  href="https://www.linkedin.com/in/apeksha-shetty-aa2848255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-indigo-200"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </div>
              
              <div className="mt-12">
                <p className="text-indigo-200">
                  Udupi, Karnataka - 576212 | 7483716047
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Apeksha P Shetty. All rights reserved.</p>
        </div>
      </footer>
    </div>
      
  );
}