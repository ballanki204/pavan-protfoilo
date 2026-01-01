import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
        <span className="text-[20vw] font-display font-bold text-muted/30 leading-none">
          DEV
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Greeting */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up">
              <span className="text-3xl"></span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Hello, I'm
              </span>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight opacity-0 animate-fade-up delay-100">
              Vadala Pavan
              <br />
              <span className="italic font-medium">Kumar</span>
            </h1>
            
            {/* Role */}
            <div className="mt-6 opacity-0 animate-fade-up delay-200">
              <p className="text-2xl md:text-3xl font-display text-muted-foreground">
                Senior DevOps Engineer
              </p>
              <p className="text-xl md:text-2xl font-display text-muted-foreground/70 mt-1">
                & Backend Developer
              </p>
            </div>
            
            {/* Career Objective */}
            <p className="mt-8 text-muted-foreground font-light leading-relaxed max-w-lg opacity-0 animate-fade-up delay-300">
              To contribute effectively to organizational success by leveraging my expertise in DevOps and Backend Development, while continuously enhancing my professional growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up delay-400">
              <Button variant="default" size="lg" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 opacity-0 animate-fade-up delay-500">
              <a 
                href="mailto:iampavan.blue@gmail.com"
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919393141433"
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6 opacity-0 animate-fade-up delay-300">
            <div className="p-8 border border-border bg-secondary/50 hover:bg-secondary transition-colors">
              <span className="text-6xl font-display font-bold">5+</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Years Experience
              </p>
            </div>
            <div className="p-8 border border-border bg-secondary/50 hover:bg-secondary transition-colors">
              <span className="text-6xl font-display font-bold">10+</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Projects Completed
              </p>
            </div>
            <div className="p-8 border border-border bg-secondary/50 hover:bg-secondary transition-colors">
              <span className="text-6xl font-display font-bold">AWS</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Certified Developer
              </p>
            </div>
            <div className="p-8 border border-border bg-secondary/50 hover:bg-secondary transition-colors">
              <span className="text-6xl font-display font-bold">MCA</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Vignan's University
              </p>
            </div>
          </div>
        </div>
        
        {/* Location bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center gap-8 opacity-0 animate-fade-up delay-600">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Visakhapatnam, India
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            iampavan.blue@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            +91 93931 41433
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
