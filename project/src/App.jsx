import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternalAudit from './pages/InternalAudit';
import RiskAssessment from './pages/RiskAssessment';
import ComplianceAudit from './pages/ComplianceAudit';
import ITAudit from './pages/ITAudit';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs'; // Add this import

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add this route */}
        <Route path="/internal-audit" element={<InternalAudit />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/compliance-audit" element={<ComplianceAudit />} />
        <Route path="/it-audit" element={<ITAudit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;