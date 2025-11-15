import { useState } from "react";
import EventCard from "@/components/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const eventsData = [
  {
    id: "1",
    title: "Tech Fest 2025",
    date: "March 15, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    description: "Join us for the biggest technology festival of the year! Experience cutting-edge innovations, attend tech talks by industry leaders, participate in hackathons, and network with fellow tech enthusiasts.",
    category: "Technology",
    attendees: 2500
  },
  {
    id: "2", 
    title: "AI & Robotics Expo",
    date: "March 22, 2025",
    time: "10:00 AM",
    location: "Engineering Building",
    description: "Explore the future of artificial intelligence and robotics. See live demonstrations, interactive exhibits, and presentations from leading AI researchers and robotics companies.",
    category: "Technology",
    attendees: 1800
  },
  {
    id: "3",
    title: "Cultural Night",
    date: "March 28, 2025", 
    time: "6:00 PM",
    location: "Open Air Theatre",
    description: "Celebrate diversity and creativity at our annual cultural night! Enjoy performances from various cultural clubs, music, dance, drama, and delicious food from around the world.",
    category: "Cultural",
    attendees: 3200
  },
  {
    id: "4",
    title: "Startup Pitch Competition",
    date: "April 5, 2025",
    time: "2:00 PM", 
    location: "Business Center",
    description: "Present your innovative startup ideas to industry experts and investors. Win funding, mentorship, and the opportunity to turn your vision into reality.",
    category: "Business",
    attendees: 800
  },
  {
    id: "5",
    title: "Environmental Awareness Workshop",
    date: "April 12, 2025",
    time: "11:00 AM",
    location: "Science Building",
    description: "Learn about sustainability, climate change, and environmental conservation. Participate in hands-on activities and discover how you can make a positive impact.",
    category: "Educational",
    attendees: 450
  },
  {
    id: "6",
    title: "Sports Championship",
    date: "April 18, 2025",
    time: "8:00 AM",
    location: "Sports Complex",
    description: "Compete in various sports including basketball, football, cricket, and more. Show your athletic skills and represent your department in this exciting championship.",
    category: "Sports", 
    attendees: 1200
  }
];

const categories = ["All", "Technology", "Cultural", "Business", "Educational", "Sports"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing events happening on campus. From tech talks to cultural celebrations, 
            there's something for everyone.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div key={event.id} style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Event Statistics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{eventsData.length}</div>
              <div className="text-muted-foreground">Total Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                {eventsData.reduce((sum, event) => sum + event.attendees, 0).toLocaleString()}
              </div>
              <div className="text-muted-foreground">Total Attendees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{categories.length - 1}</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;