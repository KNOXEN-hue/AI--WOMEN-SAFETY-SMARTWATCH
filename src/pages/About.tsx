import { motion } from "framer-motion";
import { Shield, Target, Users, Heart, Award, Lightbulb, Code, Cpu, Palette, Database } from "lucide-react";

const team = [
  { name: "Narthanan", role: "Team Lead & AI Developer", icon: Cpu, desc: "Leads the AI threat detection engine and system architecture." },
  { name: "Hariharasudhan", role: "Backend & IoT Engineer", icon: Database, desc: "Handles embedded systems, sensor integration, and cloud backend." },
  { name: "Nivedya Sudhesh", role: "Frontend & UX Designer", icon: Palette, desc: "Designs the user experience and builds the web platform." },
  { name: "Nandana Krishna", role: "ML & Research Engineer", icon: Code, desc: "Develops machine learning models for safety intelligence." },
];

const About = () => (
  <div className="min-h-screen pt-20">
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">About <span className="text-gradient">SafeGuard AI</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A hackathon project born from the belief that every woman deserves to travel safely.</p>
        </motion.div>

        {/* Mission */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Target, title: "Our Mission", desc: "To eliminate fear from every woman's daily commute using AI-powered safety technology." },
            { icon: Lightbulb, title: "Our Vision", desc: "A world where women can travel freely at any hour without worrying about their safety." },
            { icon: Heart, title: "Our Values", desc: "Safety first, user privacy, innovation for social impact, and community empowerment." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="gradient-card rounded-xl p-6 border border-border text-center">
              <div className="h-14 w-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Background */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-8">Project <span className="text-gradient">Background</span></h2>
          <div className="gradient-card rounded-xl p-8 border border-border space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>SafeGuard AI was conceived during a hackathon focused on women's safety and social security. The challenge was clear: how can technology actively protect women during their daily commutes on public transport?</p>
            <p>Our team combined expertise in AI/ML, embedded systems, and UX design to create a smartwatch that goes beyond fitness tracking — it's a personal safety device that can detect threats, provide physical defense mechanisms, and instantly connect users with emergency services.</p>
            <p>The AI-Powered Public Transport Safety Intelligence System analyzes real-time data from multiple sensors, crowd behavior patterns, and historical safety data to provide proactive safety recommendations and instant emergency response capabilities.</p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Meet the <span className="text-gradient">Team</span></h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">The minds behind SafeGuard AI.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="gradient-card rounded-xl p-6 border border-border text-center hover:border-primary/40 transition-all group">
                <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <member.icon className="h-9 w-9 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                <p className="text-xs text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Users, stat: "50,000+", label: "Users Protected" },
            { icon: Shield, stat: "1M+", label: "Threats Detected" },
            { icon: Award, stat: "99.9%", label: "Alert Accuracy" },
            { icon: Heart, stat: "24/7", label: "AI Monitoring" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-display font-bold text-foreground">{s.stat}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
