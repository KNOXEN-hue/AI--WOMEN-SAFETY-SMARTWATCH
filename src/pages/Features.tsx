import { motion } from "framer-motion";
import { Shield, Zap, MapPin, Brain, Wifi, Heart, Bell, Cpu, Database, Smartphone, Server, Lock } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Threat Detection", desc: "Machine learning algorithms analyze environmental data, crowd behavior, and route patterns to identify potential threats in real-time." },
  { icon: Shield, title: "Pepper Spray Module", desc: "Micro-canister integrated into the watch band. Activated via quick gesture or app command. 10-foot range, 15+ uses per cartridge." },
  { icon: Zap, title: "Electric Shock Deterrent", desc: "Low-amperage, high-voltage shock module for close-contact defense. Activated via double-press of side button." },
  { icon: MapPin, title: "GPS Live Tracking", desc: "Real-time location sharing with trusted contacts. Geofencing alerts when entering or leaving safe zones." },
  { icon: Bell, title: "SOS Emergency Alerts", desc: "One-touch SOS sends location, audio recording, and distress signal to emergency contacts and nearest authorities." },
  { icon: Heart, title: "Biometric Monitoring", desc: "Continuous heart rate and stress level monitoring. Automatic alert trigger on abnormal vitals." },
  { icon: Wifi, title: "Connectivity", desc: "4G LTE, Bluetooth 5.0, and Wi-Fi connectivity. Works independently without a smartphone." },
  { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption for all communications. Your safety data stays private and secure." },
];

const architecture = [
  { icon: Smartphone, title: "Wearable Device", desc: "SafeGuard smartwatch with sensors, defense modules, and communication hardware." },
  { icon: Cpu, title: "Edge AI Processor", desc: "On-device ML inference for real-time threat detection without cloud dependency." },
  { icon: Server, title: "Cloud Backend", desc: "Scalable cloud infrastructure for data aggregation, route analysis, and emergency coordination." },
  { icon: Database, title: "Safety Database", desc: "Crowdsourced safety data, crime statistics, and route safety scores." },
];

const Features = () => (
  <div className="min-h-screen pt-20">
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Safety <span className="text-gradient">Features</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive safety ecosystem combining hardware innovation with AI intelligence.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* System Architecture */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">System <span className="text-gradient">Architecture</span></h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">How SafeGuard AI processes and protects in real-time.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecture.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <a.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
              {i < architecture.length - 1 && <div className="hidden lg:block absolute" />}
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-center mb-8">How It <span className="text-gradient">Works</span></h3>
          <div className="space-y-6">
            {[
              { step: "01", title: "Continuous Monitoring", desc: "Sensors collect environmental, biometric, and location data 24/7." },
              { step: "02", title: "AI Analysis", desc: "On-device ML models analyze patterns and detect anomalies in real-time." },
              { step: "03", title: "Threat Assessment", desc: "Multi-factor risk scoring evaluates the severity and proximity of potential threats." },
              { step: "04", title: "Instant Response", desc: "Automated alerts, defense activation, and emergency contact notification within seconds." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start gradient-card rounded-xl p-5 border border-border">
                <span className="text-2xl font-display font-bold text-gradient flex-shrink-0">{s.step}</span>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Features;
