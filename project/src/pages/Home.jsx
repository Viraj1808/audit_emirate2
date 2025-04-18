import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaShieldAlt, FaSearchDollar, FaCogs, FaUserTie, FaChartBar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Carousel state and data
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920",
      headline: "Strategic Audit Excellence",
      subheadline: "Transform your business with precision-driven audit solutions.",
      textPosition: "left",
    },
    {
      image: "https://media.istockphoto.com/id/650191316/photo/business-people-meeting-with-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6KlgGKd9vEmAQ8aesuhQL-jc-Wd7Ecgq3FXkslFqJ8=",
      headline: "Empower Your Future",
      subheadline: "Drive growth with our cutting-edge audit expertise.",
      textPosition: "right",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920",
      headline: "Unmatched Audit Precision",
      subheadline: "Secure your success with tailored compliance strategies.",
      textPosition: "center",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
      headline: "Innovate with Confidence",
      subheadline: "Leverage our expertise for seamless audit processes.",
      textPosition: "right",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
      headline: "Lead with Assurance",
      subheadline: "Partner with us for world-class audit solutions.",
      textPosition: "left",
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: <FaChartLine className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Internal Audit",
      description: "Comprehensive internal audit solutions tailored to your business needs with advanced risk assessment methodologies."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Risk Assessment",
      description: "Identifying and analyzing potential risks to safeguard your assets and ensure business continuity."
    },
    {
      icon: <FaSearchDollar className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Fraud Detection",
      description: "Advanced fraud detection and prevention strategies to protect your organization's assets."
    },
    {
      icon: <FaCogs className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Process Evaluation",
      description: "Streamlining operations and enhancing efficiency through detailed process analysis."
    },
    {
      icon: <FaUserTie className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Compliance Audits",
      description: "Ensuring adherence to regulatory standards and corporate policies across all operations."
    },
    {
      icon: <FaChartBar className="text-5xl text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: "Performance Audits",
      description: "Evaluating effectiveness and efficiency of business operations and processes."
    }
  ];

  const industries = [
    { name: "Financial Services", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" }, // Updated to audit-related image
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500" }, // Updated to audit-related image
    { name: "Technology", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" }, // Updated to audit-related image
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500" } // Updated to audit-related image
  ];

  const socialLinks = [
    {
      icon: (
        <FaPhone className="w-8 h-8" style={{ color: '#14B8A6' }} />
      ),
      title: "Call Us",
      href: "tel:+971589716588",
    },
    {
      icon: (
        <FaWhatsapp className="w-8 h-8" style={{ color: '#25D366' }} />
      ),
      title: "WhatsApp",
      href: "https://wa.me/+971589716588",
    },
    {
      icon: (
        <FaEnvelope className="w-8 h-8" style={{ color: '#EF4444' }} />
      ),
      title: "Email",
      href: "mailto:emiratesauditgroup@gmail.com",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.369-1.852 3.605 0 4.269 2.371 4.269 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.063 2.063-2.063 1.139 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/emirates-audit-group",
    },
  ];

  // Text position styles
  const textPositionStyles = {
    left: "text-left items-start pl-4 sm:pl-8 md:pl-12 lg:pl-16",
    right: "text-right items-end pr-4 sm:pr-8 md:pr-12 lg:pr-16",
    center: "text-center items-center px-4 sm:px-8 md:px-12 lg:px-16",
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section ref={targetRef} id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => (
            <AnimatePresence key={index}>
              {currentSlide === index && (
                <motion.img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-400/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent pointer-events-none"></div>
          {/* Particle Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: slides[currentSlide].textPosition === 'left' ? -150 : slides[currentSlide].textPosition === 'right' ? 150 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slides[currentSlide].textPosition === 'left' ? 150 : slides[currentSlide].textPosition === 'right' ? -150 : 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className={`space-y-6 flex flex-col ${textPositionStyles[slides[currentSlide].textPosition]} max-w-lg`}
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {slides[currentSlide].headline}
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mt-2">
                  with Emirates Audit
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-100 max-w-md leading-relaxed">
                {slides[currentSlide].subheadline}
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(255,255,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.4)", "0px 0px 0px rgba(255,255,255,0)"] }}
                  transition={{ boxShadow: { duration: 2, repeat: Infinity }, scale: { duration: 0.3 } }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-100 shadow-2xl"
                >
                  Explore Our Services
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowRight className="text-4xl text-white transform rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Tilt
              className="relative"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-lg overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Team meeting" 
                  className="w-full h-[500px] object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm"
                />
              </motion.div>
            </Tilt>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Excellence in Internal Audit Services
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Emirates Audit Group is a premier provider of internal audit services based in Dubai, UAE. Our team of highly skilled professionals combines deep industry knowledge with cutting-edge methodologies to provide tailored audit solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Tilt className="card-hover-effect bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg">
                  <CountUp
                    end={500}
                    suffix="+"
                    duration={2.5}
                    className="text-4xl font-bold text-blue-600"
                  />
                  <div className="text-gray-600 mt-2">Clients Served</div>
                </Tilt>
                <Tilt className="card-hover-effect bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg">
                  <CountUp
                    end={98}
                    suffix="%"
                    duration={2.5}
                    className="text-4xl font-bold text-blue-600"
                  />
                  <div className="text-gray-600 mt-2">Client Satisfaction</div>
                </Tilt>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Our Core Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit solutions tailored to meet your organization's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Tilt key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 transition-all duration-500 hover:scale-105 cursor-pointer card-glow"
                >
                  <motion.div 
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-blue-600 group-hover:text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Industries We Serve
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Specialized audit expertise across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Tilt key={industry.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-glow"
                >
                  <motion.div 
                    className="aspect-w-16 aspect-h-9"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-[250px] object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  </motion.div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help transform your internal audit function
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg card-glow"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Connect via ${link.title}`}>
                        <div className="flex flex-col items-center text-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                          >
                            {link.icon}
                          </motion.div>
                          <h4 className="text-lg font-semibold text-blue-600">{link.title}</h4>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>

            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-xl"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg transform -translate-y-4 -translate-x-4 card-glow">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">Our Office</h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4 hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-400/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-600">Dubai, United Arab Emirates</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4 hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-400/10 flex items-center justify-center">
                        <FaPhone className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">+971 589716588</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4 hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-400/10 flex items-center justify-center">
                        <FaEnvelope className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-600">emiratesauditgroup@gmail.com</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Inline CSS for Particle Effects */}
      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          animation: float 12s infinite;
        }
        .particle-1 {
          width: 20px;
          height: 20px;
          top: 15%;
          left: 25%;
          animation-delay: 0s;
        }
        .particle-2 {
          width: 15px;
          height: 15px;
          top: 55%;
          left: 65%;
          animation-delay: 3s;
        }
        .particle-3 {
          width: 25px;
          height: 25px;
          top: 75%;
          left: 35%;
          animation-delay: 6s;
        }
        .particle-4 {
          width: 18px;
          height: 18px;
          top: 30%;
          left: 80%;
          animation-delay: 9s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-60px); opacity: 0.7; }
        }
        .card-glow {
          position: relative;
          overflow: hidden;
        }
        .card-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(45deg);
          transition: all 0.5s;
          opacity: 0;
        }
        .card-glow:hover::before {
          opacity: 1;
          transform: rotate(45deg) translate(20%, 20%);
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default Home;