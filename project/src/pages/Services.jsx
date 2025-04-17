import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChartLine, FaLaptopCode, FaBalanceScale } from 'react-icons/fa';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-12"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-indigo-200/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          >
            Our Audit Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            Empowering your business with tailored audit solutions, cutting-edge technology, and unparalleled expertise.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Comprehensive Audit Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <FaShieldAlt className="text-blue-500 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Internal Audit
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Enhance governance and operational efficiency with our comprehensive internal audit services, tailored to your business needs.
            </p>
            <Link
              to="/internal-audit"
              className="mt-6 inline-block text-blue-500 font-medium hover:underline"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <FaChartLine className="text-blue-500 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Risk Assessment
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Identify and mitigate risks with our strategic risk assessment services, ensuring resilience and sustainable growth.
            </p>
            <Link
              to="/risk-assessment"
              className="mt-6 inline-block text-blue-500 font-medium hover:underline"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <FaBalanceScale className="text-blue-500 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Compliance Audit
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Ensure regulatory compliance with our meticulous compliance audit services, designed to safeguard your operations.
            </p>
            <Link
              to="/compliance-audit"
              className="mt-6 inline-block text-blue-500 font-medium hover:underline"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <FaLaptopCode className="text-blue-500 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              IT Audit
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Secure your digital assets with our advanced IT audit services, leveraging cutting-edge technology for robust cybersecurity.
            </p>
            <Link
              to="/it-audit"
              className="mt-6 inline-block text-blue-500 font-medium hover:underline"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Audit Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Planning & Assessment
              </h3>
              <p className="text-gray-600 text-lg">
                We begin with a thorough analysis of your business, identifying key risks and objectives to tailor our audit approach.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Execution & Analysis
              </h3>
              <p className="text-gray-600 text-lg">
                Our team conducts detailed audits using advanced tools, ensuring precision and actionable insights.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Reporting & Follow-Up
              </h3>
              <p className="text-gray-600 text-lg">
                We deliver comprehensive reports with clear recommendations and provide ongoing support to ensure success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Why Partner with Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 text-lg">
                Our team brings deep knowledge across finance, healthcare, technology, and more, ensuring relevant solutions.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Innovative Technology
              </h3>
              <p className="text-gray-600 text-lg">
                We leverage advanced analytics and AI-driven tools to deliver precise and forward-thinking audit outcomes.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600 text-lg">
                Your success is our priority. We tailor every service to align with your unique goals and challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Elevate Your Business with Expert Audit Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Partner with Emirates Audit Group to strengthen your operations, mitigate risks, and achieve compliance with confidence.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;