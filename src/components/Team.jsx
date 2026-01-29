export default function Team() {
  const teamMembers = [
    {
      name: "Hamza Sulayman",
      role: "CEO & Director",
      description: "Visionary leader with 10+ years in tech entrepreneurship. Pioneering digital transformation across continents.",
      expertise: ["Strategy", "Innovation", "Leadership"],
      color: "from-purple-500 to-pink-500",
      initials: "HS"
    },
    {
      name: "Abubakar Uba",
      role: "Project Manager",
      description: "Experienced in leading cross-functional teams and delivering complex projects on time and within budget.",
      expertise: ["Agile", "Risk Management", "Client Relations"],
      color: "from-blue-500 to-cyan-500",
      initials: "AU"
    },
    {
      name: "Cai Jingxian",
      role: "Data Scientist",
      description: "Specialist in machine learning algorithms and data-driven insights for business optimization.",
      expertise: ["ML/AI", "Big Data", "Analytics"],
      color: "from-green-500 to-emerald-500",
      initials: "CJ"
    },
    {
      name: "Gong Zhe",
      role: "UI/UX Designer",
      description: "Award-winning designer passionate about creating intuitive and engaging user experiences.",
      expertise: ["Figma", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-500",
      initials: "GZ"
    },
    {
      name: "Sulaiman Tahir",
      role: "Senior Developer",
      description: "Expert in backend architecture and scalable systems with extensive API development experience.",
      expertise: ["Node.js", "Python", "AWS"],
      color: "from-orange-500 to-yellow-500",
      initials: "ST"
    },
    {
      name: "Salisu Ibrahim",
      role: "Frontend Developer",
      description: "Specialist in modern frameworks creating responsive and accessible interfaces.",
      expertise: ["React", "TypeScript", "Next.js"],
      color: "from-indigo-500 to-blue-500",
      initials: "SI"
    },
    // Additional names you requested
    {
      name: "Umar Nazango",
      role: "Frontend Developer",
      description: "Creating beautiful, responsive web interfaces with modern JavaScript frameworks and libraries.",
      expertise: ["Vue.js", "Tailwind CSS", "Animation"],
      color: "from-cyan-500 to-teal-500",
      initials: "UN"
    },
    {
      name: "Isma'il",
      role: "Tech Team Member",
      description: "Versatile tech enthusiast supporting various development and deployment processes.",
      expertise: ["Git", "Deployment", "Technical Support"],
      color: "from-teal-500 to-green-500",
      initials: "IS"
    },
    {
      name: "Zubaida",
      role: "Administrative Secretary",
      description: "Ensuring smooth operations and client communications with exceptional organizational skills.",
      expertise: ["Office Management", "Client Relations", "Documentation"],
      color: "from-rose-500 to-pink-500",
      initials: "ZB"
    },
    {
      name: "Rukayya",
      role: "Content Creator",
      description: "Crafting compelling narratives and visual content that communicates our brand story.",
      expertise: ["Copywriting", "Social Media", "Visual Design"],
      color: "from-yellow-500 to-orange-500",
      initials: "RK"
    },
    {
      name: "Khalid Abdullahi",
      role: "Intern Developer",
      description: "Aspiring developer eager to learn and contribute to innovative projects.",
      expertise: ["Learning", "Support", "Documentation"],
      color: "from-gray-500 to-blue-gray-500",
      initials: "KA"
    },
    {
      name: "Al-Ma'amun Abdullahi",
      role: "Research Analyst",
      description: "Focused on emerging technologies and strategic insights for business growth.",
      expertise: ["Market Research", "Tech Trends", "Strategy"],
      color: "from-blue-gray-500 to-gray-500",
      initials: "AA"
    }
  ]

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-semibold mb-4">
            BEHIND THE INNOVATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet the Innovators
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            A diverse team of experts united by a shared passion for technology and innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white mb-4`}>
                  {member.initials}
                </div>
              </div>
              
              {/* Name & Role */}
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{member.description}</p>
              
              {/* Expertise */}
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Mindset</h3>
              <p className="text-gray-400">Team members across Nigeria, China, and the UK</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
              <p className="text-gray-400">Cross-functional teams working seamlessly together</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Continuous Growth</h3>
              <p className="text-gray-400">Regular training and skill development programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}