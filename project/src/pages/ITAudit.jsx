import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaServer, FaShieldAlt, FaCode, FaDatabase, FaNetworkWired, FaLock } from 'react-icons/fa';

const ITAudit = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <FaServer className="text-4xl text-primary" />,
      title: "Infrastructure Audit",
      description: "Comprehensive assessment of IT infrastructure and systems."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Security Assessment",
      description: "Thorough evaluation of cybersecurity measures and protocols."
    },
    {
      icon: <FaDatabase className="text-4xl text-primary" />,
      title: "Data Management",
      description: "Review of data handling practices and compliance."
    }
  ];

  const features = [
    {
      icon: <FaNetworkWired className="text-3xl text-primary" />,
      title: "Network Security",
      description: "Comprehensive network security assessment and recommendations."
    },
    {
      icon: <FaLock className="text-3xl text-primary" />,
      title: "Access Control",
      description: "Review of access management and authentication systems."
    },
    {
      icon: <FaCode className="text-3xl text-primary" />,
      title: "Application Security",
      description: "Assessment of application security controls and vulnerabilities."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              IT Audit Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT system evaluation to ensure security, efficiency, and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Comprehensive IT Audit Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our IT audit services provide a thorough evaluation of your organization's information technology infrastructure, policies, and operations. We help identify vulnerabilities, ensure compliance, and optimize your IT systems for peak performance.
              </p>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Tilt className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
                  alt="IT Audit"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our IT Audit Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive methodology to ensure thorough IT system evaluation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Tilt key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our IT Audit Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to evaluating your IT infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Planning & Scope",
              "System Analysis",
              "Risk Assessment",
              "Recommendations"
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{step}</h3>
                  <p className="text-gray-600">
                    Comprehensive analysis and evaluation of IT systems and infrastructure.
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your IT audit needs and how we can help protect your systems.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITAudit;