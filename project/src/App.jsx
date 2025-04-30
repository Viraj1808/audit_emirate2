import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternalAudit from './pages/InternalAudit';
import RiskAssessment from './pages/RiskAssessment';
import ComplianceAudit from './pages/ComplianceAudit';
import ITAudit from './pages/ITAudit';
import Contact from './pages/Contact';
import Careers from './pages/Career';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/services" element={<Services />} />
        <Route path="/internal-audit" element={<InternalAudit />} />
        <Route path="/risk-assessment" element={<RiskAssessment />} />
        <Route path="/compliance-audit" element={<ComplianceAudit />} />
        <Route path="/it-audit" element={<ITAudit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;