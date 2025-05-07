import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
      title: "Our Location",
      details: ["Dubai, United Arab Emirates"]
    },
    {
      icon: <FaPhone className="text-3xl text-blue-600" />,
      title: "Phone Number",
      details: ["+971 527724155"]
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-600" />,
      title: "Email Address",
      details: ["contact@emiratesaudit.com"]
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
  ];

  const socialLinks = [
    {
      icon: <FaPhone className="text-4xl text-blue-600" />,
      title: "Call Us",
      href: "tel:+971589716588",
    },
    {
      icon: <FaWhatsapp className="text-4xl text-blue-600" />,
      title: "WhatsApp",
      href: "https://wa.me/+971589716588",
    },
    {
      icon: <FaLinkedin className="text-4xl text-blue-600" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/emirates-audit-group", 
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team of experts to discuss your audit needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible. We're here to help with all your audit and consulting needs.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Expert team with years of experience",
                    "Comprehensive audit solutions",
                    "Personalized approach for each client",
                    "Quick response and professional service"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="internal-audit">Internal Audit</option>
                    <option value="risk-assessment">Risk Assessment</option>
                    <option value="compliance-audit">Compliance Audit</option>
                    <option value="it-audit">IT Audit</option>
                    <option value="other-query">Other Query</option>
                  </select>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out through your preferred platform for quick and easy communication.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4"
                    >
                      {link.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{link.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787593566!2d55.2667716!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1644856547693!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;