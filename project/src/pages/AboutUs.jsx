import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaUsers, FaRocket, FaUserTie, FaEye, FaLightbulb } from 'react-icons/fa';
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
            About Emirates Audit Group
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            Pioneering the future of internal audit with innovative solutions, advanced technology, and a client-first mindset.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Emirates Audit Group, headquartered in Dubai, UAE, is a trailblazer in internal audit services. Our expert team harnesses deep industry insights and cutting-edge methodologies to deliver bespoke audit solutions across sectors like finance, healthcare, manufacturing, and technology. We ensure transparency, efficiency, and compliance in a dynamic regulatory environment.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to transform internal audits into strategic tools for business success. By blending global standards with local expertise, we enhance governance, mitigate risks, and optimize operations, empowering organizations to excel in a competitive landscape.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-[28rem] object-cover border-4 border-blue-100 transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 text-lg">
                We uphold unparalleled ethical standards, fostering trust and transparency in every client interaction.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 text-lg">
                We leverage state-of-the-art technology to deliver groundbreaking audit solutions that redefine industry standards.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 text-lg">
                We build strong partnerships with clients, driving mutual success through shared goals and innovative strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Why Choose Emirates Audit Group?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <FaBuilding className="text-blue-500 text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Expertise Across Industries
              </h3>
              <p className="text-gray-600 text-lg">
                Our team’s extensive experience spans multiple sectors, delivering comprehensive and relevant audit solutions.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <FaUsers className="text-blue-500 text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Tailored Solutions
              </h3>
              <p className="text-gray-600 text-lg">
                We craft customized audit strategies to address your unique challenges, ensuring impactful results.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              <FaRocket className="text-blue-500 text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Advanced Technology
              </h3>
              <p className="text-gray-600 text-lg">
                Utilizing cutting-edge tools and analytics, we provide precise insights for strategic decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Meet Our Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <img
              src={pic1}
              alt="Team Member 1"
              className="w-64 h-64 rounded-2xl object-cover mb-6 shadow-2xl border-4 border-blue-100 transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              John Doe
            </h3>
            <p className="text-blue-500 font-medium mb-3 text-lg">Chief Audit Officer</p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With over 20 years of experience, John spearheads our innovative audit strategies, delivering exceptional value to clients.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <img
              src={pic2}
              alt="Team Member 2"
              className="w-64 h-64 rounded-2xl object-cover mb-6 shadow-2xl border-4 border-blue-100 transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Jane Smith
            </h3>
            <p className="text-blue-500 font-medium mb-3 text-lg">Director of Operations</p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Jane ensures operational excellence, aligning our audit processes with client goals for seamless delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <FaLightbulb className="text-blue-500 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              To revolutionize internal auditing by integrating advanced technology and strategic foresight, enabling organizations to achieve unparalleled transparency, resilience, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <FaEye className="text-blue-500 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Vision
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              To lead the global audit industry as a beacon of innovation, delivering futuristic solutions that empower businesses to navigate complexity with confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Audit Future?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Join forces with Emirates Audit Group to elevate your internal controls, mitigate risks, and unlock operational excellence with cutting-edge solutions.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;