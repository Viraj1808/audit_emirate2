import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaShieldAlt, FaSearchDollar, FaCogs, FaUserTie, FaChartBar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
      headline: "Strategic Audit Excellence",
      subheadline: "Transform your business with precision-driven audit solutions.",
      textPosition: "left",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d82fc8e?auto=format&fit=crop&q=80&w=1920",
      headline: "Empower Your Future",
      subheadline: "Drive growth with our cutting-edge audit expertise.",
      textPosition: "right",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
      headline: "Unmatched Audit Precision",
      subheadline: "Secure your success with tailored compliance strategies.",
      textPosition: "left",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
      headline: "Innovate with Confidence",
      subheadline: "Leverage our expertise for seamless audit processes.",
      textPosition: "right",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920",
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
      icon: <FaChartLine className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Internal Audit",
      description: "Comprehensive internal audit solutions tailored to your business needs with advanced risk assessment methodologies."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Risk Assessment",
      description: "Identifying and analyzing potential risks to safeguard your assets and ensure business continuity."
    },
    {
      icon: <FaSearchDollar className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Fraud Detection",
      description: "Advanced fraud detection and prevention strategies to protect your organization's assets."
    },
    {
      icon: <FaCogs className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Process Evaluation",
      description: "Streamlining operations and enhancing efficiency through detailed process analysis."
    },
    {
      icon: <FaUserTie className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Compliance Audits",
      description: "Ensuring adherence to regulatory standards and corporate policies across all operations."
    },
    {
      icon: <FaChartBar className="text-5xl text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Performance Audits",
      description: "Evaluating effectiveness and efficiency of business operations and processes."
    }
  ];

  const industries = [
    { name: "Financial Services", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=500" },
    { name: "Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500" },
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500" }
  ];

  // Text position styles
  const textPositionStyles = {
    left: "text-left items-start pl-4 sm:pl-8 md:pl-12 lg:pl-16",
    right: "text-right items-end pr-4 sm:pr-8 md:pr-12 lg:pr-16",
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />

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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent pointer-events-none"></div> {/* Vignette */}
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
              initial={{ opacity: 0, x: slides[currentSlide].textPosition === 'left' ? -150 : 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slides[currentSlide].textPosition === 'left' ? 150 : -150 }}
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
                  className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-100 shadow-2xl"
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
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
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
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                    className="text-4xl font-bold text-primary"
                  />
                  <div className="text-gray-600 mt-2">Clients Served</div>
                </Tilt>
                <Tilt className="card-hover-effect bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg">
                  <CountUp
                    end={98}
                    suffix="%"
                    duration={2.5}
                    className="text-4xl font-bold text-primary"
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
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
                  className="group bg-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent transition-all duration-500 hover:scale-105 cursor-pointer card-glow"
                >
                  <motion.div 
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-white mb-4 transition-colors duration-300">
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
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
                    className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6"
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help transform your internal audit function
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Tilt>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg card-glow"
              >
                <form className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"></textarea>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-xl"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </Tilt>

            <Tilt>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg transform -translate-y-4 -translate-x-4 card-glow">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">Our Office</h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4 hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-600">Dubai, United Arab Emirates</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4  hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <FaPhone className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">+971 527724155</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4 hover-lift"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-600">contact@emiratesaudit.com</p>
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
      `}</style>
    </div>
  );
}

export default Home;