import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vadala Pavan Kumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Senior DevOps Engineer & Backend Developer
          </p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top
          <span className="p-2 border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
            <ArrowUp className="w-4 h-4" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
