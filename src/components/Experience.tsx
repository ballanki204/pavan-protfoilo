import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2025 – Present",
    role: "DevOps Engineer / Backend Engineer",
    company: "Varun Group",
    type: "Full-time",
    link: "#",
    description: "Leading end-to-end development of the Varun Management System (VMS), architecting secure, role-based enterprise applications with CI/CD pipelines supporting DEV, QA, UAT, and PROD environments.",
    highlights: [
      "Designed and owned CI/CD pipelines from scratch",
      "Built hybrid infrastructure (On-Prem + AWS)",
      "Led production incident response and Git-based rollbacks",
      "Automated deployments using Bash, Python, and Ansible",
    ],
  },
  {
    period: "2024 – Present",
    role: "DevOps Engineer / SRE",
    company: "Varun Motors Pvt. Ltd.",
    type: "Full-time",
    link: "#",
    description: "Led DevOps and SRE initiatives for enterprise on-prem infrastructure, designing single-server and dual-server high-availability setups.",
    highlights: [
      "Configured Nginx and Apache with SSL/TLS",
      "Implemented incident response and RCA",
      "Automated workflows using n8n",
    ],
  },
  {
    period: "2022 – 2024",
    role: "DevOps Engineer",
    company: "Amunik Software Solutions",
    type: "Full-time",
    link: "#",
    description: "Delivered end-to-end DevOps automation for live AWS production systems including JPF Project and VR Garage platforms.",
    highlights: [
      "Provisioned AWS EC2, ALB, Auto Scaling, S3, IAM",
      "Built Jenkins CI/CD pipelines",
      "Implemented monitoring with CloudWatch, Prometheus",
    ],
  },
  {
    period: "2021 – 2021",
    role: "Intern – DevOps Engineer",
    company: "Pivotal Software Solutions",
    type: "Internship",
    link: "#",
    description: "Worked on AWS infrastructure including EC2, VPC, IAM, and Linux servers. Designed and supported Jenkins CI/CD pipelines.",
    highlights: [
      "Assisted with application deployments",
      "Supported Git workflows and DevOps practices",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 02 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={`${exp.company}-${idx}`}
                className="relative grid md:grid-cols-[120px_1fr] gap-8"
              >
                {/* Period */}
                <div className="text-sm text-muted-foreground font-medium">
                  {exp.period}
                </div>
                
                {/* Content */}
                <div className="pl-8 md:pl-12 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 bg-foreground rounded-full -translate-x-[4.5px]" />
                  
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-semibold">{exp.role}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <a 
                        href={exp.link}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 link-underline"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-xs px-2 py-0.5 border border-border text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li 
                        key={hIdx}
                        className="text-sm text-muted-foreground pl-4 border-l-2 border-border hover:border-foreground hover:text-foreground transition-colors"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
