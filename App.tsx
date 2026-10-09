import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EDIExcellenceDetail from "./pages/EDIExcellenceDetail";
import EProcurementDetail from "./pages/EProcurementDetail";
import InterculturalDetail from "./pages/InterculturalDetail";
import LeadershipDetail from "./pages/LeadershipDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Philosophy from "./pages/Philosophy";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expertise/edi-excellence" element={<EDIExcellenceDetail />} />
          <Route path="/expertise/eprocurement-mastery" element={<EProcurementDetail />} />
          <Route path="/expertise/interkulturelle-integration" element={<InterculturalDetail />} />
          <Route path="/expertise/leadership-und-transformation" element={<LeadershipDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/philosophie" element={<Philosophy />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
