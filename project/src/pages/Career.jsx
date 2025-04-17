import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBriefcase, FaStar, FaFilter, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Careers() {
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const jobs = [
    {
      id: 1,
      title: 'Senior Internal Auditor',
      type: 'full-time',
      location: 'Dubai, UAE',
      description: 'Lead internal audits, assess risks, and ensure compliance with regulatory standards.',
      requirements: ['5+ years in auditing', 'CPA or CIA certification', 'Strong analytical skills'],
    },
    {
      id: 2,
      title: 'Freelance VAT Consultant',
      type: 'freelance',
      location: 'Remote',
      description: 'Provide expert VAT compliance and advisory services to clients across industries.',
      requirements: ['3+ years in VAT consulting', 'Knowledge of UAE tax laws', 'Self-motivated'],
    },
    {
      id: 3,
      title: 'Audit Manager',
      type: 'full-time',
      location: 'Dubai, UAE',
      description: 'Oversee audit teams, manage client relationships, and drive strategic initiatives.',
      requirements: ['7+ years in audit management', 'Leadership experience', 'CPA or equivalent'],
    },
    {
      id: 4,
      title: 'Freelance IT Auditor',
      type: 'freelance',
      location: 'Remote',
      description: 'Conduct IT audits to evaluate systems and ensure data security compliance.',
      requirements: ['4+ years in IT auditing', 'CISA certification', 'Technical expertise'],
    },
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.type === filter);

  const benefits = [
    { title: 'Professional Growth', description: 'Access to certifications and training programs.', icon: <FaStar /> },
    { title: 'Flexible Work', description: 'Options for remote and freelance opportunities.', icon: <FaBriefcase /> },
    { title: 'Collaborative Culture', description: 'Work with a dynamic, supportive team.', icon: <FaStar /> },
    { title: 'Impactful Projects', description: 'Contribute to high-profile audits.', icon: <FaBriefcase /> },
  ];

  const testimonials = [
    { name: 'Sarah A.', role: 'Freelance Auditor', quote: 'Emirates Audit gave me the flexibility to work on exciting projects while growing my skills.' },
    { name: 'John M.', role: 'Audit Manager', quote: 'The supportive culture and opportunities for growth are unmatched.' },
    { name: 'Aisha K.', role: 'Internal Auditor', quote: 'I’ve worked on impactful projects that have advanced my career.' },
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
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,255,255,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-base font-semibold shadow-lg"
          >
            Explore Open Positions
          </motion.button>
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

      {/* Job Listings Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore full-time and freelance opportunities with Emirates Audit Group.
            </p>
          </motion.div>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full shadow-lg p-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('full-time')}
                className={`px-6 py-2 rounded-full ${filter === 'full-time' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                Full-Time
              </button>
              <button
                onClick={() => setFilter('freelance')}
                className={`px-6 py-2 rounded-full ${filter === 'freelance' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                Freelance
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <Tilt key={job.id}>
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 transition-all duration-500 cursor-pointer card-glow"
                  onClick={() => setSelectedJob(job)}
                >
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-4">{job.location}</p>
                  <p className="text-gray-500 group-hover:text-white/80 text-sm">{job.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 flex items-center text-blue-600 group-hover:text-white"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2" />
                  </motion.div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
        {/* Job Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white/95 backdrop-blur-lg p-8 rounded-xl max-w-lg w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{selectedJob.title}</h3>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {selectedJob.location}</p>
                <p className="text-gray-600 mb-4"><strong>Type:</strong> {selectedJob.type}</p>
                <p className="text-gray-600 mb-4">{selectedJob.description}</p>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Requirements</h4>
                <ul className="list-disc pl-5 text-gray-600 mb-6">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold"
                  onClick={() => setSelectedJob(null)}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that’s making a difference in the auditing world.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Tilt>
              <motion.div
                data-aos="fade-up"
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center"
              >
                <CountUp end={200} suffix="+" duration={2.5} className="text-4xl font-bold text-blue-600" />
                <p className="text-gray-600 mt-2">Team Members</p>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center"
              >
                <CountUp end={500} suffix="+" duration={2.5} className="text-4xl font-bold text-blue-600" />
                <p className="text-gray-600 mt-2">Projects Completed</p>
              </motion.div>
            </Tilt>
            <Tilt>
              <motion.div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center"
              >
                <CountUp end={95} suffix="%" duration={2.5} className="text-4xl font-bold text-blue-600" />
                <p className="text-gray-600 mt-2">Employee Satisfaction</p>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Freelancer Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Freelancers, Join Our Network
              </h2>
              <p className="text-xl text-gray-600">
                Offer your auditing expertise on our platform. Enjoy flexible projects, competitive pay, and a supportive community.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Work on diverse audit projects</li>
                <li>Access professional development resources</li>
                <li>Secure payment system</li>
              </ul>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Apply as a Freelancer
                </motion.button>
              </Link>
            </motion.div>
            <Tilt>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d82fc8e?auto=format&fit=crop&q=80&w=500"
                  alt="Freelancer working"
                  className="rounded-xl shadow-lg w-full h-[24rem] object-cover border-2 border-blue-100"
                />
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our employees and freelancers about their experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Tilt key={index}>
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg card-glow"
                >
                  <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{testimonial.name[0]}</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-blue-600">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
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