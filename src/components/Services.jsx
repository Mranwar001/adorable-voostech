export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js for maximum performance and scalability.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "TypeScript", "Node.js", "Performance Optimization"],
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications using React Native and Flutter that deliver exceptional user experiences.",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services with AWS, Azure, and Google Cloud expertise.",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Containerization"],
      gradient: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "AI Integration",
      description: "Machine learning and AI-powered features that automate processes and unlock new business possibilities.",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"],
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality, creating interfaces users love.",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      features: ["Figma/Adobe XD", "Prototyping", "User Testing", "Design Systems"],
      gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect digital assets with audits, penetration testing, and compliance.",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
      features: ["Security Audits", "Pen Testing", "GDPR/HIPAA", "Threat Monitoring"],
      gradient: "bg-gradient-to-br from-red-500/20 to-orange-500/20"
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-semibold mb-4">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions That Drive
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exponential Growth
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive digital services tailored to transform your business and 
            keep you ahead of the competition
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.gradient}`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4 text-white">{service.title}</h3>
              
              {/* Description */}
              <p className="relative z-10 text-gray-400 mb-6">{service.description}</p>
              
              {/* Features */}
              <div className="relative z-10 mb-8">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="relative z-10 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group/btn">
                <span className="font-semibold">Learn More</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Our team specializes in building custom digital solutions tailored to your unique business needs.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}