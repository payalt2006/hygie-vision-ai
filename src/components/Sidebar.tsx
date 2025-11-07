import { Eye, FileText, Settings, Brain, ChefHat, Utensils, User, Bell } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [cookingOpen, setCookingOpen] = useState(true);
  const [servingOpen, setServingOpen] = useState(true);

  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold text-primary">HygieVision</h1>
        <p className="text-xs text-muted-foreground mt-1">AI Health Monitoring</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <NavLink
          to="/"
          end
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          activeClassName="bg-sidebar-accent text-primary font-semibold"
        >
          <Eye className="w-5 h-5" />
          <span>Monitoring</span>
        </NavLink>

        {/* Cooking Area Subsection */}
        <div className="ml-4 mt-3 space-y-1">
          <button
            onClick={() => setCookingOpen(!cookingOpen)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChefHat className="w-4 h-4" />
            <span>Cooking Area</span>
          </button>
          {cookingOpen && (
            <div className="ml-6 space-y-1 text-sm">
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Hand Wash Compliance
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Gloves Worn
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Apron Worn
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Hairnet Worn
              </div>
            </div>
          )}
        </div>

        {/* Serving Area Subsection */}
        <div className="ml-4 mt-3 space-y-1">
          <button
            onClick={() => setServingOpen(!servingOpen)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Utensils className="w-4 h-4" />
            <span>Serving Area</span>
          </button>
          {servingOpen && (
            <div className="ml-6 space-y-1 text-sm">
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Table Cleaning Frequency
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Staff Hand Hygiene
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Customer Table Allocation
              </div>
              <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                Surface Disinfection
              </div>
            </div>
          )}
        </div>

        <NavLink
          to="/reports"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          activeClassName="bg-sidebar-accent text-primary font-semibold"
        >
          <FileText className="w-5 h-5" />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          activeClassName="bg-sidebar-accent text-primary font-semibold"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/insights"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          activeClassName="bg-sidebar-accent text-primary font-semibold"
        >
          <Brain className="w-5 h-5" />
          <span>AI Insights</span>
        </NavLink>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{new Date().toLocaleDateString()}</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm">Manager</span>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-violation rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
