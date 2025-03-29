
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Agents from "./pages/Agents";
import Workflows from "./pages/Workflows";
import Analytics from "./pages/Analytics";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRoute from "./components/auth/AuthRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Auth routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            
            {/* Protected routes */}
            <Route path="/" element={<AuthRoute><Index /></AuthRoute>} />
            <Route path="/agents" element={<AuthRoute><Agents /></AuthRoute>} />
            <Route path="/workflows" element={<AuthRoute><Workflows /></AuthRoute>} />
            <Route path="/analytics" element={<AuthRoute><Analytics /></AuthRoute>} />
            <Route path="/activity" element={<AuthRoute><Activity /></AuthRoute>} />
            <Route path="/settings" element={<AuthRoute><Settings /></AuthRoute>} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
