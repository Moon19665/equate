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
        <Route path="/brx-ai" element={<BrexAi />} />
        <Route path="/global" element={<Global />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/startups" element={<Startups />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
