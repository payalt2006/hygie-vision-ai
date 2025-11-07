import { TrendingUp, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventDetailsProps {
  staffId?: string;
  zone: string;
  complianceScore: number;
  recentEvents: { time: string; event: string; status: "compliant" | "violation" | "warning" }[];
}

const EventDetails = ({ staffId, zone, complianceScore, recentEvents }: EventDetailsProps) => {
  return (
    <div className="w-80 h-screen bg-card border-l border-border overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Event Details</h2>
          <p className="text-sm text-muted-foreground">{zone}</p>
        </div>

        {/* Compliance Score */}
        <div className="bg-background rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Compliance Score</span>
            <TrendingUp className="w-4 h-4 text-compliant" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">{complianceScore}%</span>
            <span className="text-sm text-compliant mb-1">+2.3%</span>
          </div>
          <div className="mt-3 w-full bg-muted rounded-full h-2">
            <div
              className="bg-compliant h-2 rounded-full transition-all"
              style={{ width: `${complianceScore}%` }}
            ></div>
          </div>
        </div>

        {/* Staff Info */}
        {staffId && (
          <div className="bg-background rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold mb-2">Staff Information</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Staff ID</span>
                <span className="font-mono">{staffId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Zone</span>
                <span>{zone}</span>
              </div>
            </div>
          </div>
        )}

        {/* Recent Events Timeline */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {recentEvents.map((event, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      event.status === "compliant"
                        ? "bg-compliant"
                        : event.status === "violation"
                        ? "bg-violation"
                        : "bg-warning"
                    }`}
                  ></div>
                  {idx < recentEvents.length - 1 && (
                    <div className="w-0.5 h-8 bg-muted mt-1"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm font-medium">{event.event}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Trend */}
        <div className="bg-background rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold mb-3">7-Day Trend</h3>
          <div className="flex items-end justify-between h-24 gap-2">
            {[92, 88, 94, 91, 96, 93, 96].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-muted rounded-t overflow-hidden">
                  <div
                    className="bg-compliant/70 w-full rounded-t transition-all"
                    style={{ height: `${value}px` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start gap-2">
            <FileDown className="w-4 h-4" />
            View Full Report
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <FileDown className="w-4 h-4" />
            Export Evidence
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
