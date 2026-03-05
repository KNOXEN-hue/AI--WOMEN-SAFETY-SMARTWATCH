import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-muted border-border text-foreground" />
                <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-muted border-border text-foreground" />
                <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="bg-muted border-border text-foreground" />
                <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="gradient-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" /> support@safeguardai.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" /> +91 1800-XXX-XXXX
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> India (Hackathon Project)
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-xl p-6 border border-destructive/30 bg-destructive/5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <h3 className="font-display font-bold text-foreground">Emergency Helplines</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Women Helpline: <span className="text-primary font-bold">181</span></p>
                  <p className="text-muted-foreground">Police Emergency: <span className="text-primary font-bold">100</span></p>
                  <p className="text-muted-foreground">National Emergency: <span className="text-primary font-bold">112</span></p>
                  <p className="text-muted-foreground">Cyber Crime: <span className="text-primary font-bold">1930</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
