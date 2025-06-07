
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductDetails from "@/components/ProductDetails";
import ShoppingCart from "@/components/ShoppingCart";
import Checkout from "@/components/Checkout";
import Newsletter from "@/components/Newsletter";
import AdminDashboard from "@/components/AdminDashboard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SignIn from "@/components/SignIn";
import CreateAccount from "@/components/CreateAccount";
import OrderHistory from "@/components/OrderHistory";
import Wishlist from "@/components/Wishlist";
import { CartProvider } from "@/components/CartContext";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleViewCollection = () => {
    setCurrentView("products");
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setCurrentView("product-details");
  };

  const handleBackFromProduct = () => {
    setSelectedProduct(null);
    setCurrentView("products");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  const handleBackFromCheckout = () => {
    setShowCheckout(false);
    setIsCartOpen(true);
  };

  const renderCurrentView = () => {
    if (showCheckout) {
      return <Checkout onBack={handleBackFromCheckout} />;
    }

    if (selectedProduct) {
      return <ProductDetails product={selectedProduct} onBack={handleBackFromProduct} />;
    }

    switch (currentView) {
      case "products":
        return (
          <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Branded Luxury Perfume Collection</h1>
              <ProductGrid onProductClick={handleProductClick} />
            </div>
          </div>
        );
      case "categories":
        return (
          <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop by Categories</h1>
              <ProductGrid onProductClick={handleProductClick} filterBy="categories" />
            </div>
          </div>
        );
      case "new-arrivals":
        return (
          <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h1>
              <ProductGrid onProductClick={handleProductClick} filterBy="new" />
            </div>
          </div>
        );
      case "sale":
        return (
          <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Sale Items</h1>
              <ProductGrid onProductClick={handleProductClick} filterBy="sale" />
            </div>
          </div>
        );
      case "contact":
        return <Contact />;
      case "faq":
        return <FAQ />;
      case "admin":
        return <AdminDashboard />;
      case "sign-in":
        return <SignIn />;
      case "create-account":
        return <CreateAccount />;
      case "order-history":
        return <OrderHistory />;
      case "wishlist":
        return <Wishlist />;
      default:
        return (
          <>
            <Hero onViewCollectionClick={handleViewCollection} />
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Luxury Perfumes</h2>
              <ProductGrid featured={true} onProductClick={handleProductClick} />
            </div>
            <Newsletter />
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
          onCheckout={handleCheckout}
        />
        
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Shopnest</h3>
                <p className="text-gray-400">Your premier destination for luxury perfumes and exceptional service.</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button onClick={() => setCurrentView("products")} className="hover:text-white transition-colors">
                      All Perfumes
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("categories")} className="hover:text-white transition-colors">
                      Categories
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("new-arrivals")} className="hover:text-white transition-colors">
                      New Arrivals
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("sale")} className="hover:text-white transition-colors">
                      Sale
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button onClick={() => setCurrentView("contact")} className="hover:text-white transition-colors">
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("faq")} className="hover:text-white transition-colors">
                      FAQ
                    </button>
                  </li>
                  <li>Free Shipping</li>
                  <li>Easy Returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Account</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button onClick={() => setCurrentView("sign-in")} className="hover:text-white transition-colors">
                      Sign In
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("create-account")} className="hover:text-white transition-colors">
                      Create Account
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("order-history")} className="hover:text-white transition-colors">
                      Order History
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentView("wishlist")} className="hover:text-white transition-colors">
                      Wishlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Shopnest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
