const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[15vw] font-display font-bold text-background/50 leading-none whitespace-nowrap">
          RESUME
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 01 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
              DevOps Engineer and Backend Developer with 5+ years of experience owning end-to-end CI/CD pipelines, hybrid cloud infrastructure, and production reliability.
            </p>
            
            <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
              Strong expertise in automation using Bash, Python, and Ansible, with hands-on experience in AWS services and SRE-aligned operational ownership. Proven ability to design, deploy, monitor, and support backend systems and APIs, manage secure production releases, handle incident response, rollbacks, and access control.
            </p>
            
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Adept at translating business requirements into reliable production systems while ensuring operational stability through DevOps best practices. Commited to fostering team collaboration, maintaining high-quality code standards, and delivering scalable solutions.
            </p>
          </div>
          
          {/* Stats Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 border border-border bg-background">
              <span className="text-5xl font-display font-bold">5+</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Years of Experience
              </p>
            </div>
            
            <div className="p-6 border border-border bg-background">
              <span className="text-5xl font-display font-bold">10+</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Projects Completed
              </p>
            </div>
            
            <div className="p-6 border border-border bg-background">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Languages
              </p>
              <div className="space-y-2">
                <p className="font-medium">English</p>
                <p className="font-medium">Hindi</p>
                <p className="font-medium">Telugu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
