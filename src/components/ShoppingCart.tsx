
import { X, Minus, Plus, ShoppingBag, CreditCard, Smartphone, Truck } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentMethod = (method: string) => {
    alert(`Payment method selected: ${method}. This would integrate with the actual payment gateway.`);
    // In a real app, this would integrate with payment providers
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Shopping Cart</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=100&q=80`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs hover:text-red-700 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              {!showPaymentOptions ? (
                /* Checkout Button */
                <div className="space-y-2">
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Proceed to Checkout</span>
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              ) : (
                /* Payment Options */
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Choose Payment Method</h3>
                  
                  <button
                    onClick={() => handlePaymentMethod("UPI")}
                    className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">UPI Payment</span>
                  </button>

                  <button
                    onClick={() => handlePaymentMethod("PhonePe")}
                    className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    <span className="font-medium">PhonePe</span>
                  </button>

                  <button
                    onClick={() => handlePaymentMethod("Cash on Delivery")}
                    className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Truck className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Cash on Delivery</span>
                  </button>

                  <button
                    onClick={() => handlePaymentMethod("Credit/Debit Card")}
                    className="w-full flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </button>

                  <button
                    onClick={() => setShowPaymentOptions(false)}
                    className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
                  >
                    ← Back to Cart
                  </button>
                </div>
              )}

              {/* Security Badge */}
              <div className="text-center">
                <p className="text-xs text-gray-500">🔒 Secure payments with industry-standard encryption</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
