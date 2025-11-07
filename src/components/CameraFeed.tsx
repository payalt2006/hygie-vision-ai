import { Camera, AlertCircle, CheckCircle, AlertTriangle, CameraIcon, Video, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface CameraFeedProps {
  location: string;
  zone: string;
  status: "compliant" | "violation" | "warning";
  events: Array<{
    label: string;
    time: string;
    type: "compliant" | "violation" | "warning";
    confidence?: number;
  }>;
  onClick?: () => void;
}

const CameraFeed = ({ location, zone, status, events, onClick }: CameraFeedProps) => {
  const statusConfig = {
    compliant: {
      icon: CheckCircle,
      color: "text-compliant",
      bg: "bg-compliant/10",
      border: "border-compliant/50",
      label: "Compliant",
      badgeVariant: "default" as const,
    },
    violation: {
      icon: AlertCircle,
      color: "text-violation",
      bg: "bg-violation/10",
      border: "border-violation/50",
      label: "Violation",
      badgeVariant: "destructive" as const,
    },
    warning: {
      icon: AlertTriangle,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/50",
      label: "Warning",
      badgeVariant: "outline" as const,
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-card rounded-xl p-4 border-2 transition-all hover:shadow-lg cursor-pointer",
        config.border
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{location}</h3>
          <p className="text-xs text-muted-foreground">{zone}</p>
        </div>
        <Badge variant={config.badgeVariant} className="flex items-center gap-1.5">
          <StatusIcon className="w-3 h-3" />
          {config.label}
        </Badge>
      </div>

      {/* Camera Feed Placeholder */}
      <div className={cn(
        "aspect-video rounded-lg mb-3 flex items-center justify-center border-2 relative group",
        config.bg,
        config.border
      )}>
        <Camera className={cn("w-12 h-12", config.color)} />
        
        {/* Action Icons Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
            <CameraIcon className="w-5 h-5 text-primary" />
          </button>
          <button className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
            <Video className="w-5 h-5 text-primary" />
          </button>
          <button className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
            <ZoomIn className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-1.5">
        <p className="text-xs font-semibold text-muted-foreground mb-2">DETECTED EVENTS</p>
        {events.map((event, idx) => {
          const eventConfig = statusConfig[event.type];
          const EventIcon = eventConfig.icon;
          
          return (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-between gap-2 p-2 rounded-lg border",
                eventConfig.bg,
                eventConfig.border
              )}
            >
              <div className="flex items-center gap-2 flex-1">
                <EventIcon className={cn("w-3.5 h-3.5", eventConfig.color)} />
                <span className="text-sm font-medium text-foreground">{event.label}</span>
                <span className="text-xs text-muted-foreground">• {event.time}</span>
              </div>
              {event.confidence && (
                <span className="text-xs font-medium text-muted-foreground">
                  {event.confidence}% acc.
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CameraFeed;
