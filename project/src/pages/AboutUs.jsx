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
      className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-12 font-sans"
    >
      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
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
              className="rounded-2xl shadow-2xl w-full h-[32rem] object-cover border-4 border-blue-100 transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Meet Our Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Meet Our Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 min-h-[700px]"
          >
            <img
              src={pic2}
              alt="Mounil Shah"
              className="w-96 h-96 rounded-2xl object-contain mb-6 shadow-2xl border-4 border-blue-100 transform scale-75 hover:scale-80 transition-transform duration-300"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Mounil Shah
            </h3>
            <p className="text-blue-600 font-medium mb-4 text-lg md:text-xl">
              Managing Partner & Co-Founder
            </p>
            <div className="space-y-4 text-gray-600 text-lg md:text-xl flex-grow">
              <p>
                Mounil Shah stands at the helm of our firm as the Managing Partner and Co-Founder, bringing deep expertise in internal audits, risk management, financial operations, and regulatory compliance. With over a decade of experience across global and regional markets, Mounil has led high-impact audit programs and crafted financial control frameworks that have transformed the internal landscapes of major organizations.
              </p>
              <p>
                As a Chartered Accountant with rich experience in banking, real estate, retail, and manufacturing sectors, Mounil is known for his sharp analytical thinking and data-driven audit leadership. His ability to decode complex financial structures and design robust audit strategies has earned him the trust of senior stakeholders and boardrooms alike.
              </p>
              <p>
                Mounil’s professional journey has been marked by delivering compliance excellence, building high-performing audit teams, and pioneering digital audit transformations. His leadership extends beyond process improvement—he is the strategic mind behind our firm’s audit methodology, client engagement model, and operational rigor.
              </p>
              <p>
                A master of both detail and vision, Mounil ensures that every engagement is backed by insight, precision, and impact. His strategic foresight, deep domain knowledge, and ethical governance define the very foundation of our firm’s values and success.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/mounil-shah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="mr-2 text-xl" /> Connect on LinkedIn
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 min-h-[700px]"
          >
            <img
              src={pic1}
              alt="Biijal Shah"
              className="w-96 h-96 rounded-2xl object-contain mb-6 shadow-2xl border-4 border-blue-100 transform scale-75 hover:scale-80 transition-transform duration-300"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Biijal Shah
            </h3>
            <p className="text-blue-600 font-medium mb-4 text-lg md:text-xl">
              Director & Co-Founder
            </p>
            <div className="space-y-4 text-gray-600 text-lg md:text-xl flex-grow">
              <p>
                Biijal Shah brings over a decade of leadership experience in Sales, Operations, and Strategic Marketing, backed by academic credentials in Commerce and Strategic Management. Based in Dubai, she has consistently delivered measurable growth across industries—leading successful market entries, securing high-value deals, and implementing scalable financial strategies.
              </p>
              <p>
                Her experience spans the introduction of innovative SaaS and digital solutions, revenue optimization, and client engagement across complex projects. With a keen focus on negotiation, investor management, and business expansion, Biijal has driven financial results that speak for themselves.
              </p>
              <p>
                As Co-Founder of our internal audit and consulting firm, she brings a rare combination of financial insight and operational clarity. Her ability to align business goals with sustainable financial practices makes her a trusted partner in helping clients strengthen compliance, streamline audits, and accelerate growth.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/biijal-shah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="mr-2 text-xl" /> Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaBuilding className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                We uphold unparalleled ethical standards, fostering trust and transparency in every client interaction.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaRocket className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                We leverage state-of-the-art technology to deliver groundbreaking audit solutions that redefine industry standards.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          >
            Why Choose Emirates Audit Group?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaBuilding className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Expertise Across Industries
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Our team’s extensive experience spans multiple sectors, delivering comprehensive and relevant audit solutions.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                We craft customized audit strategies to address your unique challenges, ensuring impactful results.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <FaRocket className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Utilizing cutting-edge tools and analytics, we provide precise insights for strategic decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <FaLightbulb className="text-blue-600 text-5xl md:text-6xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              To revolutionize internal auditing by integrating advanced technology and strategic foresight, enabling organizations to achieve unparalleled transparency, resilience, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <FaEye className="text-blue-600 text-5xl md:text-6xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              To lead the global audit industry as a beacon of innovation, delivering futuristic solutions that empower businesses to navigate complexity with confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;