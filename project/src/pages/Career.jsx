import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBuilding, FaUsers, FaRocket, FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Careers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const benefits = [
    { title: 'Professional Growth', description: 'Access to certifications and training programs.', icon: <FaBuilding /> },
    { title: 'Flexible Work', description: 'Options for remote and freelance opportunities.', icon: <FaUsers /> },
    { title: 'Collaborative Culture', description: 'Work with a dynamic, supportive team.', icon: <FaRocket /> },
    { title: 'Impactful Projects', description: 'Contribute to high-profile audits.', icon: <FaBuilding /> },
  ];

  const whyChooseUs = [
    {
      title: 'Expertise Across Industries',
      description: 'Our team’s extensive experience spans multiple sectors, delivering comprehensive and relevant audit solutions.',
      icon: <FaBuilding />,
    },
    {
      title: 'Tailored Solutions',
      description: 'We craft customized audit strategies to address your unique challenges, ensuring impactful results.',
      icon: <FaUsers />,
    },
    {
      title: 'Advanced Technology',
      description: 'Utilizing cutting-edge tools and analytics, we provide precise insights for strategic decision-making.',
      icon: <FaRocket />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-200 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1920"
            alt="Modern office background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-blue-200/40 mix-blend-overlay"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto px-4 z-10"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Join Emirates Audit Group
            <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mt-2">
              Shape the Future of Auditing
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Discover opportunities to grow, innovate, and make an impact with our world-class audit team.
          </p>
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Why Join Emirates Audit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team driving excellence in auditing and compliance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Tilt key={index}>
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 transition-all duration-500 card-glow"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl text-blue-600 group-hover:text-white mb-4"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90">
                    {benefit.description}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Why Choose Emirates Audit Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values expertise, innovation, and tailored solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <Tilt key={index}>
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 card-glow"
                >
                  <div className="text-blue-600 text-4xl mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to explore career opportunities with Emirates Audit Group.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              data-aos="fade-up"
              className="bg-white p-6 rounded-xl shadow-lg text-center card-glow"
            >
              <a href="tel:+971589716588" target="_blank" rel="noopener noreferrer" aria-label="Call Us">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <FaPhone className="text-blue-600 text-2xl" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Call Us</h4>
                  <p className="text-gray-600">+971 589716588</p>
                </div>
              </a>
            </motion.div>
            <motion.div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white p-6 rounded-xl shadow-lg text-center card-glow"
            >
              <a href="https://wa.me/+971589716588" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <FaWhatsapp className="text-green-500 text-2xl" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">WhatsApp</h4>
                  <p className="text-gray-600">+971 589716588</p>
                </div>
              </a>
            </motion.div>
            <motion.div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-6 rounded-xl shadow-lg text-center card-glow"
            >
              <a href="mailto:emiratesauditgroup@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <FaEnvelope className="text-red-500 text-2xl" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Email</h4>
                  <p className="text-gray-600">emiratesauditgroup@gmail.com</p>
                </div>
              </a>
            </motion.div>
            <motion.div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-6 rounded-xl shadow-lg text-center card-glow"
            >
              <a href="https://www.linkedin.com/company/emirates-audit-group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <FaLinkedin className="text-blue-700 text-2xl" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">LinkedIn</h4>
                  <p className="text-gray-600">Emirates Audit Group</p>
                </div>
              </a>
            </motion.div>
          </div>
          <motion.div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-12 text-center"
          >
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Address</h4>
            <p className="text-gray-600">Dubai, United Arab Emirates</p>
          </motion.div>
        </div>
      </section>

      {/* Inline CSS */}
      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          animation: float 12s infinite;
        }
        .particle-1 { width: 20px; height: 20px; top: 20%; left: 30%; animation-delay: 0s; }
        .particle-2 { width: 15px; height: 15px; top: 60%; left: 70%; animation-delay: 3s; }
        .particle-3 { width: 25px; height: 25px; top: 80%; left: 40%; animation-delay: 6s; }
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
      `}</style>
    </div>
  );
}

export default Careers;