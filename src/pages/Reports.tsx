import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const Reports = () => {
  const summaryStats = [
    { label: "Avg. Handwash Time", value: "23.4s", trend: "+2.1s", positive: true },
    { label: "Gloves Compliance", value: "94%", trend: "+3%", positive: true },
    { label: "Avg. Table Cleaning", value: "4.2min", trend: "-0.8min", positive: true },
    { label: "Overall Hygiene Score", value: "96%", trend: "+1%", positive: true },
  ];

  const complianceLogs = [
    {
      timestamp: "2024-01-15 14:23:45",
      area: "Kitchen Zone 1",
      event: "Handwash Detected",
      status: "compliant",
    },
    {
      timestamp: "2024-01-15 14:24:12",
      area: "Kitchen Zone 2",
      event: "Gloves Missing",
      status: "violation",
    },
    {
      timestamp: "2024-01-15 14:15:30",
      area: "Dining Area A",
      event: "Table Cleaning Started",
      status: "compliant",
    },
    {
      timestamp: "2024-01-15 14:10:15",
      area: "Dining Area B",
      event: "Cleaning Delayed",
      status: "warning",
    },
    {
      timestamp: "2024-01-15 14:08:22",
      area: "Kitchen Zone 1",
      event: "Surface Sanitized",
      status: "compliant",
    },
    {
      timestamp: "2024-01-15 14:05:18",
      area: "Kitchen Zone 3",
      event: "Hairnet Absent",
      status: "violation",
    },
    {
      timestamp: "2024-01-15 14:02:45",
      area: "Dining Area A",
      event: "Table Cleaned",
      status: "compliant",
    },
    {
      timestamp: "2024-01-15 13:58:12",
      area: "Kitchen Zone 2",
      event: "Handwash Completed",
      status: "compliant",
    },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-card border-b border-border p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <h1 className="text-2xl font-bold">Compliance Reports</h1>
              <p className="text-sm text-muted-foreground">Historical data and analytics</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="p-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {summaryStats.map((stat, idx) => (
              <Card key={idx} className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      stat.positive ? "text-compliant" : "text-violation"
                    )}
                  >
                    {stat.trend}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Compliance Logs Table */}
          <Card className="p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Compliance Event Log</h2>
              <p className="text-sm text-muted-foreground">Recent hygiene monitoring events</p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Evidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {complianceLogs.map((log, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                    <TableCell>{log.area}</TableCell>
                    <TableCell>{log.event}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          log.status === "compliant" &&
                            "bg-compliant/20 text-compliant",
                          log.status === "violation" &&
                            "bg-violation/20 text-violation",
                          log.status === "warning" &&
                            "bg-warning/20 text-warning"
                        )}
                      >
                        {log.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
