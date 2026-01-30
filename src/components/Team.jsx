export default function Team() {
  const teamMembers = [
    {
      name: "Dr.Hamza Sulayman",
      role: "CEO & Director",
      description: "Visionary leader with 10+ years in tech entrepreneurship. Pioneering digital transformation across continents.",
      expertise: ["Strategy", "Innovation", "Leadership"],
      color: "from-purple-500 to-pink-500",
      initials: "HS",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Abubakar Uba",
      role: "Project Manager",
      description: "Experienced in leading cross-functional teams and delivering complex projects on time and within budget.",
      expertise: ["Agile", "Risk Management", "Client Relations"],
      color: "from-blue-500 to-cyan-500",
      initials: "AU",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Cai Jingxian",
      role: "Data Scientist",
      description: "Specialist in machine learning algorithms and data-driven insights for business optimization.",
      expertise: ["ML/AI", "Big Data", "Analytics"],
      color: "from-green-500 to-emerald-500",
      initials: "CJ",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Gong Zhe",
      role: "UI/UX Designer",
      description: "Award-winning designer passionate about creating intuitive and engaging user experiences.",
      expertise: ["Figma", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-500",
      initials: "GZ",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Sulaiman Tahir",
      role: "Senior Developer",
      description: "Expert in backend architecture and scalable systems with extensive API development experience.",
      expertise: ["Node.js", "Python", "AWS"],
      color: "from-orange-500 to-yellow-500",
      initials: "ST",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Salisu Ibrahim",
      role: "Frontend Developer",
      description: "Specialist in modern frameworks creating responsive and accessible interfaces.",
      expertise: ["React", "TypeScript", "Next.js"],
      color: "from-indigo-500 to-blue-500",
      initials: "SI",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Umar Nazango",
      role: "Frontend Developer",
      description: "Creating beautiful, responsive web interfaces with modern JavaScript frameworks and libraries.",
      expertise: ["Vue.js", "Tailwind CSS", "Animation"],
      color: "from-cyan-500 to-teal-500",
      initials: "UN",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Isma'il",
      role: "Tech Team Member",
      description: "Versatile tech enthusiast supporting various development and deployment processes.",
      expertise: ["Git", "Deployment", "Technical Support"],
      color: "from-teal-500 to-green-500",
      initials: "IS",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Zubaida",
      role: "Administrative Secretary",
      description: "Ensuring smooth operations and client communications with exceptional organizational skills.",
      expertise: ["Office Management", "Client Relations", "Documentation"],
      color: "from-rose-500 to-pink-500",
      initials: "ZB",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Rukayya",
      role: "Content Creator",
      description: "Crafting compelling narratives and visual content that communicates our brand story.",
      expertise: ["Copywriting", "Social Media", "Visual Design"],
      color: "from-yellow-500 to-orange-500",
      initials: "RK",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Khalid Abdullahi",
      role: "Intern Developer",
      description: "Aspiring developer eager to learn and contribute to innovative projects.",
      expertise: ["Learning", "Support", "Documentation"],
      color: "from-gray-500 to-blue-gray-500",
      initials: "KA",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Al-Ma'amun Abdullahi",
      role: "Research Analyst",
      description: "Focused on emerging technologies and strategic insights for business growth.",
      expertise: ["Market Research", "Tech Trends", "Strategy"],
      color: "from-blue-gray-500 to-gray-500",
      initials: "AA",
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    }
  ]

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2">
              
              {/* Avatar */}
              <div className="mb-6">
                <div className={`w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white mb-4`}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                      onError={(e) => { e.target.style.display = "none" }}
                    />
                  ) : (
                    member.initials
                  )}
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
                  <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
