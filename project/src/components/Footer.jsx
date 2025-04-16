import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Emirates Audit Group
            </h3>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Redefining Internal Audit Excellence through innovation and expertise.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Industries', 'Contact'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaPhone className="text-blue-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  +971 527724155
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  contact@emiratesaudit.com
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Dubai, UAE
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Connect With Us</h4>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <Icon className="text-blue-400 text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Emirates Audit Group. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-gray-900/50"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;