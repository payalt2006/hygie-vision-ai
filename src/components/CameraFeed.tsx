import { Camera, Download, Video, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface CameraFeedProps {
  location: string;
  zone: string;
  status: "compliant" | "violation" | "warning";
  events: { label: string; time: string; type: "compliant" | "violation" | "warning" }[];
  imageUrl?: string;
}

const CameraFeed = ({ location, zone, status, events, imageUrl }: CameraFeedProps) => {
  const statusColors = {
    compliant: "border-compliant",
    violation: "border-violation",
    warning: "border-warning",
  };

  const statusDots = {
    compliant: "bg-compliant",
    violation: "bg-violation",
    warning: "bg-warning",
  };

  return (
    <div className={cn("bg-card rounded-xl border-2 overflow-hidden transition-all hover:shadow-lg", statusColors[status])}>
      {/* Camera Preview */}
      <div className="relative aspect-video bg-muted/30">
        {imageUrl ? (
          <img src={imageUrl} alt={location} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Camera className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Status Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className={cn("w-2 h-2 rounded-full animate-pulse", statusDots[status])}></span>
          <span className="text-xs font-medium capitalize">{status}</span>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors">
            <Video className="w-4 h-4" />
          </button>
          <button className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors">
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Camera Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{location}</h3>
        <p className="text-xs text-muted-foreground mb-3">{zone}</p>

        {/* Event Log */}
        <div className="space-y-1.5">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs">
              <span className={cn(
                "font-medium",
                event.type === "compliant" && "text-compliant",
                event.type === "violation" && "text-violation",
                event.type === "warning" && "text-warning"
              )}>
                {event.label}
              </span>
              <span className="text-muted-foreground font-mono">{event.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;
