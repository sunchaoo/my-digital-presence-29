import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import locantaImage from "@/assets/locanta.jpg";
import amazonFreshImage from "@/assets/amazon-fresh.jpg";
import apiGatewayImage from "@/assets/api-gateway.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Enhanced eCommerce Experience (3%+ Conversion)",
      description: "Enhanced cart, account, and checkout experience driving conversion optimization and customer satisfaction across global markets.",
      technologies: ["Product Strategy", "UX Research", "A/B Testing", "Analytics"],
      liveUrl: "https://www.esteelauder.com/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Amazon Grocery Expansion (Fresh, GO, and Whole Foods)",
      description: "In-store automation tools and supply chain systems delivering seamless grocery shopping experience across US and EU markets.",
      technologies: ["Operations", "Supply Chain", "ML Platforms", "Automation"],
      liveUrl: "https://www.amazon.com/fmc/m/30003175?almBrandId=QW1hem9uIEZyZXNo",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Launched API Product (10%+ ARR)",
      description: "Microservices architecture with authentication, rate limiting, and comprehensive monitoring.",
      technologies: ["Node.js", "Docker", "Redis", "AWS"],
      liveUrl: "https://docs.ideonapi.com/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business intelligence with custom charts, filters, and export capabilities.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mobile-First Portfolio",
      description: "Responsive portfolio website with advanced animations and optimized performance across all devices.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable messaging platform with file sharing, group chats, and end-to-end encryption.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and creative problem-solving approach
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {index === 0 ? (
                <img 
                  src={locantaImage} 
                  alt="Enhanced eCommerce Experience" 
                  className="h-48 w-full object-cover"
                />
              ) : index === 1 ? (
                <img 
                  src={amazonFreshImage} 
                  alt="Amazon Grocery Expansion" 
                  className="h-48 w-full object-cover"
                />
              ) : index === 2 ? (
                <img 
                  src={apiGatewayImage} 
                  alt="API Product Launch" 
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
