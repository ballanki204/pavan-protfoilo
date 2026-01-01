import { ExternalLink, Server, Cloud, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Varun Management System (VMS)",
    description: "Enterprise-level management system with secure, role-based modules for executive-level tracking and operational efficiency.",
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Jenkins"],
    icon: Server,
    highlights: [
      "End-to-end CI/CD pipelines",
      "Hybrid cloud infrastructure",
      "Automated monitoring & alerts",
    ],
  },
  {
    title: "JPF Project",
    description: "Live AWS production system with end-to-end DevOps automation, high availability, and scalability.",
    technologies: ["AWS", "Docker", "Jenkins", "Prometheus", "Grafana"],
    icon: Cloud,
    highlights: [
      "Auto Scaling configuration",
      "CloudWatch monitoring",
      "Zero-downtime deployments",
    ],
  },
  {
    title: "VR Garage",
    description: "Production platform with comprehensive DevOps infrastructure and continuous deployment pipeline.",
    technologies: ["AWS EC2", "ALB", "S3", "Route 53", "Docker"],
    icon: GitBranch,
    highlights: [
      "Infrastructure as Code",
      "Load balancing setup",
      "Secure access control",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 05 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div 
                key={idx}
                className="group p-8 bg-background border border-border hover:border-foreground transition-all hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border border-border mb-6 group-hover:border-foreground group-hover:bg-foreground transition-colors">
                  <Icon className="w-6 h-6 group-hover:text-background transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <li 
                      key={hIdx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-foreground rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs px-2 py-1 border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
