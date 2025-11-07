import { Eye, FileText, Settings, Brain, ChefHat, Utensils, User, Bell, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [monitoringOpen, setMonitoringOpen] = useState(true);
  const [cookingOpen, setCookingOpen] = useState(true);
  const [servingOpen, setServingOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold text-primary">CHINeX</h1>
        <p className="text-xs text-muted-foreground mt-1">AI Health Monitoring</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {/* Monitoring with nested areas */}
        <div className="space-y-1">
          <button
            onClick={() => setMonitoringOpen(!monitoringOpen)}
            className="flex items-center justify-between w-full gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          >
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5" />
              <span>Monitoring</span>
            </div>
            <ChevronDown className={cn("w-4 h-4 transition-transform", monitoringOpen && "rotate-180")} />
          </button>

          {monitoringOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {/* Cooking Area Subsection */}
              <div className="space-y-1">
                <button
                  onClick={() => setCookingOpen(!cookingOpen)}
                  className="flex items-center justify-between w-full gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded"
                >
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4" />
                    <span>Cooking Area</span>
                  </div>
                  <ChevronDown className={cn("w-3 h-3 transition-transform", cookingOpen && "rotate-180")} />
                </button>
                {cookingOpen && (
                  <div className="ml-6 space-y-1 text-sm">
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Hand Wash Compliance
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Gloves Worn
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Apron Worn
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Hairnet Worn
                    </div>
                  </div>
                )}
              </div>

              {/* Serving Area Subsection */}
              <div className="space-y-1">
                <button
                  onClick={() => setServingOpen(!servingOpen)}
                  className="flex items-center justify-between w-full gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded"
                >
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    <span>Serving Area</span>
                  </div>
                  <ChevronDown className={cn("w-3 h-3 transition-transform", servingOpen && "rotate-180")} />
                </button>
                {servingOpen && (
                  <div className="ml-6 space-y-1 text-sm">
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Table Cleaning Frequency
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Staff Hand Hygiene
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Customer Table Allocation
                    </div>
                    <div className="px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded">
                      Surface Disinfection
                    </div>
                  </div>
                )}
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
          <span>{currentTime.toLocaleDateString()}</span>
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm">Manager</span>
          </div>
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-violation rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
