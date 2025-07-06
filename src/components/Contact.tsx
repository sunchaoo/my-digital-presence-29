import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, QrCode } from "lucide-react";
import linkedinQR from "@/assets/linkedin-qr.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to connect and collaborate? Scan the QR code below to connect with me on LinkedIn.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* LinkedIn QR Code */}
          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-primary">Connect on LinkedIn</CardTitle>
              <CardDescription>
                Scan this QR code with your phone's camera to connect with me instantly
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <img 
                  src={linkedinQR} 
                  alt="LinkedIn QR Code"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
                <CardDescription>
                  Prefer traditional contact methods? Here are my details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">hello@yourname.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/10 border-accent/20 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  LinkedIn is the fastest way to reach me. I typically respond to messages 
                  within a few hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;