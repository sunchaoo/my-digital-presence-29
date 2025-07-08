import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Senior PM at Amazon with 8+ years driving data-informed products across eCommerce, Metrics, API, 
              supply chain, and operations. I led global-scale product initiatives across Amazon Fresh and Estée Lauder—delivering 
              ML-driven metrics platforms, in-store automation tools, and supply chain systems used across US and EU.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in translating ambiguous business problems into actionable product strategies and delivering high-ROI outcomes. 
              My core strengths include Data Strategy & Automation, In-store Tech, eCommerce Growth, Team Leadership, Root Cause Analysis, 
              and Scalable Product Execution.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Years PM Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Managing Teams</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">Education</h3>
              <p className="text-muted-foreground">
                MBA from Columbia Business School | Certified SAFe Product Owner/Product Manager
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">Product Philosophy</h3>
              <p className="text-muted-foreground">
                Transforming ambiguous business challenges into data-driven product strategies 
                that deliver measurable impact at global scale.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
