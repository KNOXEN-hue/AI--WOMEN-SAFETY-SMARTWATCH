import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQty, total, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed successfully! (Demo)");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some SafeGuard products to get started.</p>
          <Button className="gradient-primary text-primary-foreground border-0" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-display font-bold mb-8">
            Your <span className="text-gradient">Cart</span>
          </motion.h1>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="gradient-card rounded-xl p-4 border border-border flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-primary font-semibold">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-border">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-8 text-center font-semibold text-foreground">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-border">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <span className="font-display font-bold text-foreground w-20 text-right">₹{(item.price * item.qty).toLocaleString()}</span>
                <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="gradient-card rounded-xl p-6 border border-border">
            <div className="flex justify-between mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold text-foreground">₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-primary font-semibold">FREE</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between">
              <span className="font-display font-bold text-lg text-foreground">Total</span>
              <span className="font-display font-bold text-lg text-foreground">₹{total.toLocaleString()}</span>
            </div>
            <Button className="w-full mt-6 gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow" size="lg" onClick={handleCheckout}>
              Checkout (Demo) <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
