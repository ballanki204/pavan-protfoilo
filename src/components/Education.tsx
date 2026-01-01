import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vignan's University, Guntur",
    period: "Completed",
    description: "Completed Master's degree with focus on software development and computer applications.",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    icon: Award,
  },
  {
    title: "DevOps Hands-On Training",
    issuer: "Professional Training",
    description: "Comprehensive training covering CI/CD, containerization, cloud infrastructure, and automation.",
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm text-muted-foreground">( 04 )</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Education & Certifications</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => {
                const Icon = edu.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 border border-border hover:border-foreground transition-colors group"
                  >
                    <Icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <h4 className="text-xl font-display font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 border border-border hover:border-foreground transition-colors group"
                  >
                    <Icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <h4 className="text-xl font-display font-semibold mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
