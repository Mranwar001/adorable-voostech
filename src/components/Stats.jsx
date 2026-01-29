export default function Stats() {
  const stats = [
    {
      value: "150+",
      label: "Projects Delivered",
      description: "From startups to Fortune 500 companies",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Consistent 5-star feedback",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500"
    },
    {
      value: "50+",
      label: "Global Clients",
      description: "Across 15+ countries",
      icon: "🌍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "5+",
      label: "Years Experience",
      description: "Since 2020",
      icon: "⏳",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-800 hover:border-gray-700 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>
              
              {/* Value */}
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-white">{stat.label}</h3>
              
              {/* Description */}
              <p className="text-gray-400">{stat.description}</p>
              
              {/* Animated Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-white transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Additional Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">47%</div>
            <div className="text-gray-400">Avg. Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">96%</div>
            <div className="text-gray-400">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  )
}