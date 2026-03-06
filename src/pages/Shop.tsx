import { motion } from "framer-motion";
import { ShoppingCart, Star, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import productImg from "@/assets/product-smartwatch.jpg";
import { toast } from "sonner";

const products = [
  { id: "safeguard-lite", name: "SafeGuard Lite", price: 2000, originalPrice: 5999, desc: "Essential safety features for everyday protection.", features: ["GPS Tracking", "SOS Alerts", "Heart Rate Monitor", "Bluetooth Connectivity"] },
  { id: "safeguard-pro", name: "SafeGuard AI Pro", price: 4000, originalPrice: 9999, desc: "Complete safety suite with AI and defense modules.", features: ["Everything in Lite", "LED Flash Light Module", "Electric Shock", "AI Threat Detection", "4G LTE"], badge: "Best Seller" },
  { id: "safeguard-ultra", name: "SafeGuard Ultra", price: 6000, originalPrice: 14999, desc: "Premium edition with advanced AI and extended battery.", features: ["Everything in Pro", "Facial Recognition", "Voice Activation", "7-day Battery", "Titanium Build"] },
];

const Shop = () => {
  const { addItem } = useCart();

  const handleAdd = (p: typeof products[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: productImg });
    toast.success(`${p.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Shop <span className="text-gradient">SafeGuard</span></h1>
            <p className="text-muted-foreground">Choose the protection level that's right for you.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`gradient-card rounded-xl border ${p.badge ? "border-primary shadow-glow" : "border-border"} overflow-hidden flex flex-col`}
              >
                {p.badge && (
                  <div className="gradient-primary text-center py-1 text-xs font-semibold text-primary-foreground">{p.badge}</div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-center mb-4">
                    <img src={productImg} alt={p.name} className="w-32 h-32 object-contain" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-display font-bold text-foreground">₹{p.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{p.originalPrice.toLocaleString()}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90" onClick={() => handleAdd(p)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-8">Compare <span className="text-gradient">Models</span></h2>
            <div className="gradient-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-display font-semibold text-foreground">Feature</th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">Lite<br/><span className="text-primary text-xs font-normal">₹2,999</span></th>
                      <th className="text-center p-4 font-display font-semibold text-primary">Pro<br/><span className="text-xs font-normal">₹4,999</span></th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">Ultra<br/><span className="text-primary text-xs font-normal">₹7,999</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "GPS Tracking", lite: true, pro: true, ultra: true },
                      { feature: "SOS Alerts", lite: true, pro: true, ultra: true },
                      { feature: "Heart Rate Monitor", lite: true, pro: true, ultra: true },
                      { feature: "Bluetooth", lite: true, pro: true, ultra: true },
                      { feature: "LED Flash Light Module", lite: false, pro: true, ultra: true },
                      { feature: "Electric Shock", lite: false, pro: true, ultra: true },
                      { feature: "AI Threat Detection", lite: false, pro: true, ultra: true },
                      { feature: "4G LTE", lite: false, pro: true, ultra: true },
                      { feature: "Facial Recognition", lite: false, pro: false, ultra: true },
                      { feature: "Voice Activation", lite: false, pro: false, ultra: true },
                      { feature: "7-day Battery", lite: false, pro: false, ultra: true },
                      { feature: "Titanium Build", lite: false, pro: false, ultra: true },
                    ].map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 text-muted-foreground">{row.feature}</td>
                        <td className="p-4 text-center">{row.lite ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}</td>
                        <td className="p-4 text-center">{row.pro ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}</td>
                        <td className="p-4 text-center">{row.ultra ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-8">Customer <span className="text-gradient">Reviews</span></h2>
            <div className="space-y-4">
              {[
                { name: "Sneha P.", text: "Bought the Pro version and it's amazing. The build quality is premium.", rating: 5 },
                { name: "Ritu M.", text: "Fast delivery. The AI alerts are surprisingly accurate. Highly recommend!", rating: 5 },
                { name: "Deepa L.", text: "Worth every rupee. My parents feel much safer knowing I have this.", rating: 4 },
              ].map((r) => (
                <div key={r.name} className="gradient-card rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}</div>
                    <span className="text-sm font-semibold text-foreground">{r.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
