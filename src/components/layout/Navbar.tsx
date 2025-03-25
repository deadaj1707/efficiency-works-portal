
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="h-16 flex items-center gap-4 border-b px-6 sticky top-0 z-30 bg-background/95 backdrop-blur-sm transition-all">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {sidebarOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
        <span className="sr-only">Toggle menu</span>
      </Button>

      <div className="w-full flex justify-between items-center">
        <div className="relative w-96 max-w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-full bg-background pl-8 focus-visible:ring-blue-500" 
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
