import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CameraFeed from "@/components/CameraFeed";
import EventDetails from "@/components/EventDetails";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [selectedZone, setSelectedZone] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const cameraFeeds = [
    {
      location: "Kitchen Zone 1 - Handwash Sink",
      zone: "Cooking Area",
      status: "compliant" as const,
      events: [
        { label: "Handwash Detected", time: "14:23:45", type: "compliant" as const },
        { label: "Gloves Worn", time: "14:22:18", type: "compliant" as const },
      ],
    },
    {
      location: "Kitchen Zone 2 - Prep Station",
      zone: "Cooking Area",
      status: "violation" as const,
      events: [
        { label: "Gloves Missing", time: "14:24:12", type: "violation" as const },
        { label: "Hairnet Absent", time: "14:20:05", type: "violation" as const },
      ],
    },
    {
      location: "Dining Area - Table Section A",
      zone: "Serving Area",
      status: "compliant" as const,
      events: [
        { label: "Table Cleaning Started", time: "14:15:30", type: "compliant" as const },
        { label: "Surface Sanitized", time: "14:17:22", type: "compliant" as const },
      ],
    },
    {
      location: "Dining Area - Table Section B",
      zone: "Serving Area",
      status: "warning" as const,
      events: [
        { label: "Table Cleaning Delayed", time: "14:10:15", type: "warning" as const },
        { label: "Staff Hand Hygiene Pending", time: "14:09:42", type: "warning" as const },
      ],
    },
  ];

  const eventDetails = {
    staffId: "EMP-2043",
    zone: "Kitchen Zone 1",
    complianceScore: 96,
    recentEvents: [
      { time: "14:23:45", event: "Handwash Detected", status: "compliant" as const },
      { time: "14:22:18", event: "Gloves Worn", status: "compliant" as const },
      { time: "14:18:30", event: "Apron Checked", status: "compliant" as const },
      { time: "14:15:12", event: "Hairnet Verified", status: "compliant" as const },
      { time: "14:10:05", event: "Station Sanitized", status: "compliant" as const },
    ],
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Monitoring Dashboard</h1>
              <p className="text-sm text-muted-foreground">Real-time hygiene compliance tracking</p>
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Zones</SelectItem>
                  <SelectItem value="cooking">Cooking Area</SelectItem>
                  <SelectItem value="serving">Serving Area</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="compliant">Compliant</SelectItem>
                  <SelectItem value="violation">Violation</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {/* Camera Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
            {cameraFeeds.map((feed, idx) => (
              <CameraFeed key={idx} {...feed} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <EventDetails {...eventDetails} />
    </div>
  );
};

export default Index;
