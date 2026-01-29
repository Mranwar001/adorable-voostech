export default function Testimonials() {
  const testimonials = [
    {
      quote: "Their HIPAA-compliant solution revolutionized how we connect with patients. Patient satisfaction jumped from 72% to 96%. Incredible work that transformed our healthcare delivery.",
      author: "Dr. Auwal Sani",
      position: "Medical Director",
      company: "Best Choice Specialty Clinic",
      rating: 5,
      metrics: ["Patient Satisfaction: 96%", "Wait Time Reduced: -89%", "Patient Reach: +4900%"]
    },
    {
      quote: "Voostech delivered our e-commerce platform ahead of schedule with outstanding performance and security. Revenue grew 47% in the first quarter post-launch. Truly exceptional partners.",
      author: "Imran Aminu",
      position: "CEO",
      company: "Al-wabel Company",
      rating: 5,
      metrics: ["Revenue Growth: 47%", "User Engagement: +305%", "Load Time: -81%"]
    },
    {
      quote: "The payment platform they built processes millions of transactions with 99.99% uptime. Their expertise in FinTech security gave us the confidence to scale globally.",
      author: "Fatima Bello",
      position: "CTO",
      company: "NexPay Solutions",
      rating: 5,
      metrics: ["Transactions: 2.5M/day", "Uptime: 99.99%", "Processing Time: -91%"]
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm font-semibold mb-4">
            CLIENT VOICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <span className="block text-white">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-400">
            Don't just take our word for it — hear from the businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-blue-500/20 mb-4">"</div>
              
              {/* Quote */}
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Metrics */}
              <div className="mb-8">
                {testimonial.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">{metric}</span>
                  </div>
                ))}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-center text-xl font-bold mb-8 text-gray-300">
            Trusted by Global Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["TechMart", "NexPay", "MediCare", "Al-wabel", "Best Choice", "GlobalTech"].map((brand, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-400 font-bold">{brand.charAt(0)}</span>
                </div>
                <span className="text-gray-500 text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}