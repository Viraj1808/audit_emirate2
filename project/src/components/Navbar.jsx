import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Careers', href: '/careers' },
    
    {
      name: 'Services',
      href: '/services',
      subItems: [
        { name: 'Internal Audit', href: '/internal-audit' },
        { name: 'Risk Assessment', href: '/risk-assessment' },
        { name: 'Compliance Audit', href: '/compliance-audit' },
        { name: 'IT Audit', href: '/it-audit' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu if open
    setIsServicesOpen(false); // Close services dropdown if open
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 font-sans bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              onClick={handleNavClick}
            >
              Emirates Audit Group
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="ml-10 flex items-baseline space-x-6"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="relative group">
                  {item.subItems ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center group ${
                          location.pathname === item.href || item.subItems.some((sub) => sub.href === location.pathname)
                            ? 'text-indigo-600'
                            : ''
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                        <FaChevronDown
                          className={`ml-1.5 text-gray-500 group-hover:text-indigo-600 transition-transform duration-300 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </Link>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100"
                          >
                            {item.subItems.map((subItem) => (
                              <motion.div key={subItem.name} variants={itemVariants}>
                                <Link
                                  to={subItem.href}
                                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ${
                                    location.pathname === subItem.href
                                      ? 'text-indigo-600 bg-indigo-50'
                                      : ''
                                  }`}
                                  onClick={handleNavClick}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                        location.pathname === item.href ? 'text-indigo-600' : ''
                      }`}
                      onClick={handleNavClick}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                          location.pathname === item.href ? 'scale-x-100' : ''
                        }`}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300 p-2 rounded-md"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between ${
                            item.subItems.some((sub) => sub.href === location.pathname)
                              ? 'text-indigo-600 bg-indigo-50'
                              : ''
                          }`}
                        >
                          {item.name}
                          <FaChevronDown
                            className={`text-gray-500 transition-transform duration-300 ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                                    location.pathname === subItem.href
                                      ? 'text-indigo-600 bg-indigo-50'
                                      : ''
                                  }`}
                                  onClick={handleNavClick}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                          location.pathname === item.href ? 'text-indigo-600 bg-indigo-50' : ''
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;