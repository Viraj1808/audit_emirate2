import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaUsers, FaRocket, FaUserTie, FaEye, FaLightbulb, FaLinkedin } from 'react-icons/fa';
import pic1 from '/src/assets/picture1.jpg';
import pic2 from '/src/assets/picture2.jpg';

const AboutUs = () => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50 text-gray-900 pt-12 pb-8 font-sans"
    >
      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-base text-gray-600">
              <p>
                Emirates Audit Group, headquartered in Dubai, UAE, is a trailblazer in internal audit services. Our expert team harnesses deep industry insights and cutting-edge methodologies to deliver bespoke audit solutions across sectors like finance, healthcare, manufacturing, and technology.
              </p>
              <p>
                We ensure transparency, efficiency, and compliance in a dynamic regulatory environment. Our mission is to transform internal audits into strategic tools for business success, blending global standards with local expertise to enhance governance, mitigate risks, and optimize operations.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-[20rem] object-cover border-4 border-blue-100 transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={pic2}
              alt="Mounil Shah"
              className="w-72 h-72 rounded-2xl object-contain mb-4 shadow-2xl border-4 border-blue-100 transform scale-75 hover:scale-80 transition-transform duration-300"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Mounil Shah
            </h3>
            <p className="text-blue-600 font-medium mb-3 text-lg md:text-xl">
              Managing Partner & Co-Founder
            </p>
            <div className="space-y-3 text-gray-600 text-base md:text-lg flex-grow">
              <p>
                Mounil Shah stands at the helm of our firm as the Managing Partner and Co-Founder, bringing deep expertise in internal audits, risk management, financial operations, and regulatory compliance.
              </p>
              <p>
                As a Chartered Accountant with rich experience in banking, real estate, retail, and manufacturing sectors, Mounil is known for his sharp analytical thinking and data-driven audit leadership.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/mounil-shah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="mr-2 text-xl" /> Connect on LinkedIn
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={pic1}
              alt="Biijal Shah"
              className="w-72 h-72 rounded-2xl object-contain mb-4 shadow-2xl border-4 border-blue-100 transform scale-75 hover:scale-80 transition-transform duration-300"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Biijal Shah
            </h3>
            <p className="text-blue-600 font-medium mb-3 text-lg md:text-xl">
              Director & Co-Founder
            </p>
            <div className="space-y-3 text-gray-600 text-base md:text-lg flex-grow">
              <p>
                Biijal Shah brings over a decade of leadership experience in Sales, Operations, and Strategic Marketing, backed by academic credentials in Commerce and Strategic Management.
              </p>
              <p>
                As Co-Founder of our internal audit and consulting firm, she brings a rare combination of financial insight and operational clarity.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/biijal-shah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="mr-2 text-xl" /> Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaBuilding className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We uphold unparalleled ethical standards, fostering trust and transparency in every client interaction.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaRocket className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We leverage state-of-the-art technology to deliver groundbreaking audit solutions that redefine industry standards.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaUsers className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We build strong partnerships with clients, driving mutual success through shared goals and innovative strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <motion.div variants={itemVariants}>
            <FaEye className="text-blue-600 text-4xl md:text-5xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              To lead the global audit industry as a beacon of innovation, delivering futuristic solutions that empower businesses to navigate complexity with confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutUs;
