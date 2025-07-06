import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Globe, Zap, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: ["React", "TypeScript", "Node.js", "Python", "Next.js", "Vue.js"]
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Responsive Design", "Prototyping"]
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "AWS", "Docker"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "SASS", "Webpack"]
    },
    {
      icon: Zap,
      title: "Tools & Workflow",
      skills: ["Git", "GitHub Actions", "Jira", "Slack", "VS Code", "Postman"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Team Leadership", "Project Management", "Communication", "Problem Solving", "Mentoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-sm bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;