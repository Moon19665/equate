'use client'
import dynamic from 'next/dynamic';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CorporateCard from "./pages/product-pages/CorporateCard";
import BusinessBanking from "./pages/product-pages/BusinessBanking";
import SpendManagement from "./pages/product-pages/SpendManagement";
import BillPay from "./pages/product-pages/BillPay";
import Travel from "./pages/product-pages/Travel";
import AccountAutomation from "./pages/product-pages/AccountAutomation";
import EmbeddedFinance from "./pages/product-pages/EmbeddedFinance";
import BrexAi from "./pages/product-pages/BrexAi";
import Global from "./pages/product-pages/Global";
import Integrations from './pages/product-pages/Integrations';
import Startups from './pages/solution-pages/Startups';
import MidSizeComp from './pages/solution-pages/MidSizeComp';
import Enterprise from './pages/solution-pages/Enterprise';
import Accounting from './pages/solution-pages/Accounting';
import VCFirms from './pages/solution-pages/VCFirms';
import HelpCenter from './pages/resources-page/HelpCenter';
import SetupGuide from './pages/resources-page/SetupGuide';
import ProductRelease from './pages/resources-page/ProductRelease';
import Webinars from './pages/resources-page/Webinars';
import Careers from './pages/resources-page/Careers';
import Pricing from './pages/Pricing';

function App() {
  const BrowserRouter = dynamic(
    () => import('react-router-dom').then((mod) => mod.BrowserRouter),
    { ssr: false }
  );
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/corporate-card" element={<CorporateCard />} />
        <Route path="/business-banking" element={<BusinessBanking />} />
        <Route path="/spend-management" element={<SpendManagement />} />
        <Route path="/bill-pay" element={<BillPay />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/account-automation" element={<AccountAutomation />} />
        <Route path="/embedded-finance" element={<EmbeddedFinance />} />
        <Route path="/equate-ai" element={<BrexAi />} />
        <Route path="/global" element={<Global />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/mid-size-companies" element={<MidSizeComp />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/private-equity" element={<VCFirms />} />
        <Route path="/implementation" element={<SetupGuide />} />
        <Route path="/spring-2025" element={<ProductRelease />} />
        <Route path="/webinar" element={<Webinars />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/pricing" element={<Pricing />} />

       


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
