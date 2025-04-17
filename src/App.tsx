
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import AdminLogin from "./pages/admin/AdminLogin";
import EventManagement from "./pages/admin/EventManagement";
import GalleryManagement from "./pages/admin/GalleryManagement";
import ProtectedRoute from "./components/common/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<ProgramDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin routes - these won't be indexed by search engines */}
          <Route path="/admin/secret/login" element={<AdminLogin />} />
          <Route 
            path="/admin/secret/event" 
            element={
              <ProtectedRoute>
                <EventManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/secret/gallery" 
            element={
              <ProtectedRoute>
                <GalleryManagement />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
