
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ShoppingCart from "@/components/ShoppingCart";
import AdminDashboard from "@/components/AdminDashboard";
import { CartProvider } from "@/components/CartContext";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case "products":
        return (
          <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
              <ProductGrid />
            </div>
          </div>
        );
      case "admin":
        return <AdminDashboard />;
      default:
        return (
          <>
            <Hero />
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
              <ProductGrid featured={true} />
            </div>
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          currentView={currentView} 
          setCurrentView={setCurrentView}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        {renderCurrentView()}
        
        <ShoppingCart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
        
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ZestMart</h3>
                <p className="text-gray-400">Your premier destination for quality products and exceptional service.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>All Products</li>
                  <li>Categories</li>
                  <li>New Arrivals</li>
                  <li>Sale</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Shipping</li>
                  <li>Returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Account</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Sign In</li>
                  <li>Create Account</li>
                  <li>Order History</li>
                  <li>Wishlist</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ZestMart. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
