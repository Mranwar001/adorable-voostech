export default function Team() {
  const teamMembers = [
    {
      name: "Dr.Hamza Sulayman",
      role: "CEO & Director",
      description: "Visionary leader with 10+ years in tech entrepreneurship. Pioneering digital transformation across continents.",
      expertise: ["Strategy", "Innovation", "Leadership"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Abubakar Uba",
      role: "Project Manager",
      description: "Experienced in leading cross-functional teams and delivering complex projects on time and within budget.",
      expertise: ["Agile", "Risk Management", "Client Relations"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Cai Jingxian",
      role: "Data Scientist",
      description: "Specialist in machine learning algorithms and data-driven insights for business optimization.",
      expertise: ["ML/AI", "Big Data", "Analytics"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Gong Zhe",
      role: "UI/UX Designer",
      description: "Award-winning designer passionate about creating intuitive and engaging user experiences.",
      expertise: ["Figma", "Prototyping", "Design Systems"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Sulaiman Tahir",
      role: "Senior Developer",
      description: "Expert in backend architecture and scalable systems with extensive API development experience.",
      expertise: ["Node.js", "Python", "AWS"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Salisu Ibrahim",
      role: "Frontend Developer",
      description: "Specialist in modern frameworks creating responsive and accessible interfaces.",
      expertise: ["React", "TypeScript", "Next.js"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Umar Nazango",
      role: "Frontend Developer",
      description: "Creating beautiful, responsive web interfaces with modern JavaScript frameworks and libraries.",
      expertise: ["Vue.js", "Tailwind CSS", "Animation"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Isma'il",
      role: "Tech Team Member",
      description: "Versatile tech enthusiast supporting various development and deployment processes.",
      expertise: ["Git", "Deployment", "Technical Support"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Zubaida",
      role: "Administrative Secretary",
      description: "Ensuring smooth operations and client communications with exceptional organizational skills.",
      expertise: ["Office Management", "Client Relations", "Documentation"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Rukayya",
      role: "Content Creator",
      description: "Crafting compelling narratives and visual content that communicates our brand story.",
      expertise: ["Copywriting", "Social Media", "Visual Design"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Khalid Abdullahi",
      role: "Intern Developer",
      description: "Aspiring developer eager to learn and contribute to innovative projects.",
      expertise: ["Learning", "Support", "Documentation"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    },
    {
      name: "Al-Ma'amun Abdullahi",
      role: "Research Analyst",
      description: "Focused on emerging technologies and strategic insights for business growth.",
      expertise: ["Market Research", "Tech Trends", "Strategy"],
      image: "https://i.postimg.cc/4dfCgRb0/ZEa-Dt-Vo-OLFd-Pxrec-HWq-KJQ4z-Na-U.jpg"
    }
  ]

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
