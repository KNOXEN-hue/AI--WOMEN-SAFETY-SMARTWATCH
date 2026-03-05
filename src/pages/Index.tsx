import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, MapPin, Brain, Star, ArrowRight, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import productImg from "@/assets/product-smartwatch.jpg";
import { useCart } from "@/hooks/useCart";

const features = [
  { icon: Shield, title: "Pepper Spray Module", desc: "Compact, wrist-activated pepper spray for instant defense." },
  { icon: Zap, title: "Electric Shock", desc: "Non-lethal electric deterrent activated with a button press." },
  { icon: Brain, title: "AI Threat Detection", desc: "Real-time AI monitoring detects unsafe environments." },
  { icon: MapPin, title: "GPS Live Tracking", desc: "Share your live location with trusted contacts instantly." },
];

const testimonials = [
  { name: "Priya S.", role: "Daily Commuter", text: "SafeGuard has completely changed how I feel during late-night commutes. The AI alerts warned me about an unsafe route before I even noticed.", rating: 5 },
  { name: "Ananya R.", role: "College Student", text: "I feel so much more confident walking to my hostel at night. The SOS feature is a lifesaver — literally!", rating: 5 },
  { name: "Meera K.", role: "Working Professional", text: "The GPS tracking gives my family peace of mind. Best investment for my safety.", rating: 5 },
];

const Index = () => {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-6">
                <Sparkles className="h-3 w-3" /> AI-Powered Safety Intelligence
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Safety at<br />
                <span className="text-gradient">Your Wrist</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                The world's first AI-powered safety smartwatch with inbuilt pepper spray, electric shock module, and real-time threat detection for women commuters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow" asChild>
                  <Link to="/shop"><ShoppingCart className="mr-2 h-4 w-4" /> Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted" asChild>
                  <Link to="/features">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="mt-8 flex gap-8 text-sm">
                <div><span className="text-2xl font-display font-bold text-foreground">50K+</span><p className="text-muted-foreground">Users Protected</p></div>
                <div><span className="text-2xl font-display font-bold text-foreground">99.9%</span><p className="text-muted-foreground">Alert Accuracy</p></div>
                <div><span className="text-2xl font-display font-bold text-foreground">24/7</span><p className="text-muted-foreground">AI Monitoring</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 scale-110" />
                <img src={productImg} alt="SafeGuard AI Smartwatch" className="relative w-72 md:w-96 animate-float drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Powered by <span className="text-gradient">Intelligence</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Advanced safety features packed into an elegant smartwatch.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all hover:shadow-glow group"
              >
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src={productImg} alt="SafeGuard Watch" className="w-64 md:w-80 drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">SafeGuard AI <span className="text-gradient">Pro Watch</span></h2>
              <p className="text-muted-foreground mb-6">Your personal safety companion equipped with cutting-edge AI technology and physical defense mechanisms.</p>
              <ul className="space-y-3 mb-8">
                {["Inbuilt pepper spray canister", "Electric shock module (non-lethal)", "AI-powered threat detection", "Real-time GPS tracking", "SOS emergency alerts", "Heart rate & stress monitoring"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-display font-bold text-foreground">₹4,999</span>
                <span className="text-lg text-muted-foreground line-through">₹9,999</span>
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">50% OFF</span>
              </div>
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow"
                onClick={() => addItem({ id: "safeguard-pro", name: "SafeGuard AI Pro Watch", price: 4999, image: productImg })}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">What <span className="text-gradient">Users Say</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Upgrades */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Future <span className="text-gradient">Upgrades</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">We're constantly innovating to keep you safer.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Facial Recognition Alerts", "Voice-Activated SOS", "Crowd Density Analysis", "Predictive Route Safety", "Integration with Smart City", "Multilingual AI Assistant"].map((u) => (
              <div key={u} className="gradient-card rounded-xl p-5 border border-border text-left">
                <Sparkles className="h-5 w-5 text-primary mb-2" />
                <p className="font-display font-medium text-foreground text-sm">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Your Safety. <span className="text-gradient">Our Mission.</span></h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join thousands of women who travel with confidence using SafeGuard AI.</p>
          <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow" asChild>
            <Link to="/shop">Get Your SafeGuard Watch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
