import { Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-foreground">SafeGuardAI</span>
          </div>
          <p className="text-sm text-muted-foreground">AI-Powered Public Transport Safety Intelligence System. Empowering women with smart safety technology.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/", "/features", "/shop", "/about", "/contact"].map((l) => (
              <Link key={l} to={l} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l === "/" ? "Home" : l.slice(1).charAt(0).toUpperCase() + l.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Emergency</h4>
          <p className="text-sm text-muted-foreground">Women Helpline: <span className="text-primary font-semibold">181</span></p>
          <p className="text-sm text-muted-foreground">Police: <span className="text-primary font-semibold">100</span></p>
          <p className="text-sm text-muted-foreground">Emergency: <span className="text-primary font-semibold">112</span></p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Hackathon Project</h4>
          <p className="text-sm text-muted-foreground">Built for social impact. Designed for safety. Powered by AI.</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-3 w-3 text-destructive" /> for Women's Safety © 2026
      </div>
    </div>
  </footer>
);

export default Footer;
