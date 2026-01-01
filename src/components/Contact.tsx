import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 06 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Contact</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - CTA */}
          <div>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's work
              <br />
              <span className="italic font-medium">together</span>
            </h3>
            <p className="text-lg text-muted-foreground font-light mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href="mailto:iampavan.blue@gmail.com">
                <Mail className="w-4 h-4" />
                Send me an email
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
            
            {/* Social Links */}
            <div className="mt-12 flex items-center gap-4">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right - Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <a 
              href="mailto:iampavan.blue@gmail.com"
              className="group flex items-start gap-4 p-6 border border-border hover:border-foreground hover:bg-foreground transition-colors"
            >
              <Mail className="w-6 h-6 mt-1 group-hover:text-background transition-colors" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors mb-1">
                  Email
                </p>
                <p className="text-lg font-medium group-hover:text-background transition-colors">
                  iampavan.blue@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-background transition-all" />
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+919393141433"
              className="group flex items-start gap-4 p-6 border border-border hover:border-foreground hover:bg-foreground transition-colors"
            >
              <Phone className="w-6 h-6 mt-1 group-hover:text-background transition-colors" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors mb-1">
                  Phone
                </p>
                <p className="text-lg font-medium group-hover:text-background transition-colors">
                  +91 93931 41433
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-background transition-all" />
            </a>
            
            {/* Location */}
            <div className="flex items-start gap-4 p-6 border border-border">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Location
                </p>
                <p className="text-lg font-medium">
                  Visakhapatnam, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
