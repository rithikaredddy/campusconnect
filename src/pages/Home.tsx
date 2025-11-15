import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Zap, GraduationCap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CampusConnect
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your one-stop platform for discovering, organizing, and participating in 
              exciting campus events. Connect with your college community like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="shadow-button hover:shadow-lg transition-all duration-300">
                <Link to="/events" className="flex items-center">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover:bg-muted/50">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="group p-6 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 animate-slideUp">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Event Discovery</h3>
              <p className="text-muted-foreground">
                Find tech fests, cultural nights, workshops, and more happening on your campus.
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 animate-slideUp">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Network</h3>
              <p className="text-muted-foreground">
                Meet like-minded students, join communities, and build lasting connections.
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 animate-slideUp">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Registration</h3>
              <p className="text-muted-foreground">
                Register for events with just one click and manage all your registrations in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Thousands of Students
            </h2>
            <p className="text-xl text-muted-foreground">
              Be part of the most active campus community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slideUp">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="animate-slideUp">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="animate-slideUp">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Colleges Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary p-12 rounded-2xl text-white shadow-soft">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create your account today and never miss another campus event
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link to="/signup">
                Join CampusConnect Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;