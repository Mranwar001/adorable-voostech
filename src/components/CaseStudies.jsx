export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Revolution",
      category: "Web App • AI • E-commerce",
      client: "TechMart Global",
      description: "Complete digital transformation of a retail giant, implementing AI-powered recommendations and seamless checkout experience.",
      metrics: [
        { label: "Revenue Growth", from: "12%", to: "47%", change: "+292%" },
        { label: "User Engagement", from: "2.1min", to: "8.5min", change: "+305%" },
        { label: "Load Time", from: "4.2s", to: "0.8s", change: "-81%" }
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🛒"
    },
    {
      title: "FinTech Innovation",
      category: "FinTech • Security • Cloud",
      client: "NexPay Solutions",
      description: "Built a secure, scalable payment platform processing millions of transactions with 99.99% uptime and bank-grade security.",
      metrics: [
        { label: "Transactions/Day", from: "50K", to: "2.5M", change: "+4900%" },
        { label: "Processing Time", from: "3.5s", to: "0.3s", change: "-91%" },
        { label: "Active Users", from: "10K", to: "500K", change: "+4900%" }
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "💳"
    },
    {
      title: "Healthcare Platform",
      category: "Healthcare • Mobile • AI",
      client: "MediCare Plus",
      description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers globally with real-time diagnostics.",
      metrics: [
        { label: "Patient Reach", from: "5K", to: "250K", change: "+4900%" },
        { label: "Wait Time", from: "45min", to: "5min", change: "-89%" },
        { label: "Satisfaction", from: "72%", to: "96%", change: "+33%" }
      ],
      color: "from-green-500 to-emerald-500",
      icon: "🏥"
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-semibold mb-4">
            REAL-WORLD IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </span>
            <span className="block text-white">That Speak Volumes</span>
          </h2>
          <p className="text-xl text-gray-400">
            Real projects, real impact. See how we've transformed businesses across industries
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${study.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl mb-2">{study.icon}</div>
                    <span className="text-sm text-gray-400">{study.category}</span>
                  </div>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    Case Study
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-gray-300">Client:</span> {study.client}
                </p>
                <p className="text-gray-400 mb-8">{study.description}</p>
              </div>
              
              {/* Metrics */}
              <div className="relative z-10 space-y-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="text-green-400 font-semibold">{metric.change}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500 line-through">{metric.from}</span>
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span className="text-white font-bold">{metric.to}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${study.color} rounded-full`}
                        style={{ 
                          width: metric.label === 'Load Time' || metric.label === 'Processing Time' || metric.label === 'Wait Time' 
                            ? `${100 - parseInt(metric.change)}%` 
                            : `${Math.min(100, parseInt(metric.change) / 50)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View Case Study Button */}
              <button className="relative z-10 w-full mt-8 py-3 border border-gray-700 text-gray-400 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors duration-300">
                View Full Case Study
              </button>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">$47M+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">2.5M+</div>
              <div className="text-gray-400">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-400">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">96%</div>
              <div className="text-gray-400">ROI Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}