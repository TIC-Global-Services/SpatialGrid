import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';
import LayoutHome from './components/layout/LayoutHome';
import HelpCenter from './pages/HelpCenter';
import HelpCenterLevelII from './pages/HelpCenterLeverII';
import HelpCenterLevelIII from './pages/HelpCenterLeverIII';
import Documentation from './pages/Documentation';
import PlatformOverview from './pages/PlatformOverview';
import AllIndustries from './pages/AllIndustries';
import MarketingSales from './pages/MarketingSales';
import CaseStudy from './pages/CaseStudy';
// import Login from './pages/Login';
import SecurityAndTrust from './pages/SecurityAndTrust';
import Press from './pages/Press';
import Careers from './pages/Careers';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import GridVenture from './pages/GridVenture';
import PricingPage from './pages/PricingPage';
import Creme21 from './pages/Creme21';
import Privacy_Policy from './pages/Privacy-Policy';
import TermsConditions from './pages/Terms-&-conditions';
import AirPurifierAdmin from './pages/AirPurifierAdmin';
import AirPurifier from './pages/AirPurifierUser';

const ScrollTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <>
      <ScrollTop />
      <Toaster />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route element={<LayoutHome />}>
          <Route path="/" element={<Home />} />

          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center-level-II" element={<HelpCenterLevelII />} />
          <Route
            path="/help-center-level-III"
            element={<HelpCenterLevelIII />}
          />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
          <Route path="/all-industries" element={<AllIndustries />} />
          <Route path="/marketing-sales" element={<MarketingSales />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Route>
        {/* by Prassan */}
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/gridventure" element={<GridVenture />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/creme21" element={<Creme21 />} />
        <Route path="/air-purifier" element={<AirPurifier />} />
        <Route path="/air-purifier-admin" element={<AirPurifierAdmin />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        {/* by naveen */}
        <Route path="/security-and-trust" element={<SecurityAndTrust />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<PageNotFound bg={'black'} />} />
      </Routes>
    </>
  );
};

export default App;
