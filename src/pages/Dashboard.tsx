import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight } from "lucide-react";

// Sample user data (in real app, this would come from authentication)
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@college.edu",
  department: "Computer Science",
  year: "3rd Year"
};

// Sample events data (same as Events page)
const eventsData = [
  {
    id: "1",
    title: "Tech Fest 2025",
    date: "March 15, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    description: "Join us for the biggest technology festival of the year!",
    category: "Technology",
    attendees: 2500
  },
  {
    id: "2", 
    title: "AI & Robotics Expo",
    date: "March 22, 2025",
    time: "10:00 AM",
    location: "Engineering Building",
    description: "Explore the future of artificial intelligence and robotics.",
    category: "Technology",
    attendees: 1800
  },
  {
    id: "3",
    title: "Cultural Night",
    date: "March 28, 2025", 
    time: "6:00 PM",
    location: "Open Air Theatre",
    description: "Celebrate diversity and creativity at our annual cultural night!",
    category: "Cultural",
    attendees: 3200
  },
  {
    id: "4",
    title: "Startup Pitch Competition",
    date: "April 5, 2025",
    time: "2:00 PM", 
    location: "Business Center",
    description: "Present your innovative startup ideas to industry experts and investors.",
    category: "Business",
    attendees: 800
  },
  {
    id: "5",
    title: "Environmental Awareness Workshop",
    date: "April 12, 2025",
    time: "11:00 AM",
    location: "Science Building",
    description: "Learn about sustainability, climate change, and environmental conservation.",
    category: "Educational",
    attendees: 450
  },
  {
    id: "6",
    title: "Sports Championship",
    date: "April 18, 2025",
    time: "8:00 AM",
    location: "Sports Complex",
    description: "Compete in various sports including basketball, football, cricket, and more.",
    category: "Sports", 
    attendees: 1200
  }
];

const Dashboard = () => {
  const [registeredEventIds, setRegisteredEventIds] = useState<string[]>([]);

  useEffect(() => {
    // Load registered events from localStorage
    const stored = JSON.parse(localStorage.getItem('registeredEvents') || '[]');
    setRegisteredEventIds(stored);
  }, []);

  const registeredEvents = eventsData.filter(event => 
    registeredEventIds.includes(event.id)
  );

  const upcomingEvents = eventsData.slice(0, 3); // Show first 3 events as upcoming

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-primary bg-clip-text text-transparent">{userData.name}</span>!
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's what's happening in your campus community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Registered Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{registeredEvents.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Available Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{eventsData.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Your Department</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{userData.department}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Academic Year</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{userData.year}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Registered Events */}
          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-primary" />
                Your Registered Events
              </CardTitle>
              <CardDescription>
                Events you've signed up for
              </CardDescription>
            </CardHeader>
            <CardContent>
              {registeredEvents.length > 0 ? (
                <div className="space-y-4">
                  {registeredEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{event.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {event.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    You haven't registered for any events yet
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/events">Browse Events</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-gradient-card shadow-card animate-slideUp">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Don't miss these exciting events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {event.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button asChild className="w-full" variant="outline">
                  <Link to="/events" className="flex items-center justify-center">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-gradient-primary text-white shadow-soft animate-slideUp">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore new events, meet amazing people, and make the most of your college experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/events">Discover Events</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;