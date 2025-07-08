import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, Database, Globe, Zap, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Target,
      title: "Product Strategy",
      skills: ["Product Roadmapping", "Market Analysis", "Competitive Intelligence", "User Research", "OKRs", "Product Vision"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      skills: ["Data Strategy", "ML-driven Insights", "A/B Testing", "Metrics Platforms", "SQL", "Business Intelligence"]
    },
    {
      icon: Database,
      title: "Technical Systems",
      skills: ["API Strategy", "Supply Chain Systems", "eCommerce Platforms", "In-store Automation", "Cloud Architecture", "System Integration"]
    },
    {
      icon: Globe,
      title: "Domain Expertise",
      skills: ["eCommerce Growth", "Supply Chain", "Operations", "Amazon Fresh", "Retail Tech", "Global Scale Products"]
    },
    {
      icon: Zap,
      title: "Tools & Methodology",
      skills: ["Jira", "Confluence", "SAFe Agile", "Figma", "Tableau", "AWS Analytics"]
    },
    {
      icon: Users,
      title: "Leadership",
      skills: ["Team Leadership", "Stakeholder Management", "Root Cause Analysis", "Cross-functional Collaboration", "Mentoring", "Executive Communication"]
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