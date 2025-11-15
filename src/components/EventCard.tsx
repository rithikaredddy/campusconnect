import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  attendees: number;
}

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: string) => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
  const { toast } = useToast();

  const handleRegister = () => {
    // Store registered event in localStorage
    const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents') || '[]');
    if (!registeredEvents.includes(event.id)) {
      registeredEvents.push(event.id);
      localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));
      
      toast({
        title: "Registration Successful! ✅",
        description: `You're registered for ${event.title}`,
      });
      
      if (onRegister) {
        onRegister(event.id);
      }
    } else {
      toast({
        title: "Already Registered",
        description: `You're already registered for ${event.title}`,
        variant: "destructive"
      });
    }
  };

  const isRegistered = () => {
    const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents') || '[]');
    return registeredEvents.includes(event.id);
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 animate-slideUp">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {event.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{event.attendees}</span>
          </div>
        </div>
        
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {event.title}
        </CardTitle>
        
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <CardDescription className="text-sm leading-relaxed">
          {event.description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button 
          onClick={handleRegister}
          className="w-full shadow-button hover:shadow-lg transition-all duration-300"
          variant={isRegistered() ? "secondary" : "default"}
          disabled={isRegistered()}
        >
          {isRegistered() ? "✅ Registered" : "Register Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;