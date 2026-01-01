import { 
  Server, 
  Cloud, 
  GitBranch, 
  Terminal, 
  Activity, 
  Database,
  Container,
  Shield,
  Cpu,
  Layers,
  Settings,
  Code
} from "lucide-react";

const skillCategories = [
  {
    title: "DevOps & SRE",
    icon: Settings,
    skills: [
      "CI/CD Pipeline Design",
      "Production Release Management",
      "Incident Response & RCA",
      "High Availability Engineering",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS (EC2, VPC, IAM, S3, RDS)",
      "Hybrid Infrastructure",
      "Infrastructure Provisioning",
      "Cost Optimization",
    ],
  },
  {
    title: "CI/CD Tools",
    icon: GitBranch,
    skills: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Bitbucket Pipelines",
    ],
  },
  {
    title: "Automation",
    icon: Terminal,
    skills: [
      "Bash Scripting",
      "Python Automation",
      "Ansible",
      "Cron Jobs",
    ],
  },
  {
    title: "Containers",
    icon: Container,
    skills: [
      "Docker",
      "Kubernetes",
      "Container Orchestration",
      "ECR",
    ],
  },
  {
    title: "Monitoring",
    icon: Activity,
    skills: [
      "AWS CloudWatch",
      "Prometheus",
      "Grafana",
      "Log Monitoring",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Python",
      "REST APIs",
      "Third-party Integrations",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Database Backups",
    ],
  },
];

const techStack = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 03 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="group p-6 bg-background border border-border hover:border-foreground transition-colors"
              >
                <Icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Tech Stack Icons */}
        <div className="pt-12 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Technologies I Work With
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 flex items-center justify-center p-2 border border-border bg-background group-hover:border-foreground transition-colors">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
