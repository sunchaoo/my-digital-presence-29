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
              With a passion for innovation and a commitment to excellence, I bring a unique blend of 
              technical expertise and creative vision to every project. My journey has taken me through 
              diverse challenges that have shaped my problem-solving approach and collaborative mindset.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe in the power of technology to transform ideas into reality, and I'm constantly 
              exploring new ways to push boundaries and create meaningful impact through my work.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">My Mission</h3>
              <p className="text-muted-foreground">
                To create innovative solutions that bridge the gap between complex problems 
                and elegant, user-friendly experiences.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">My Vision</h3>
              <p className="text-muted-foreground">
                Building a future where technology empowers people and organizations 
                to achieve their full potential.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;