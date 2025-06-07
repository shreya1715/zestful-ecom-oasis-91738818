
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Chanel No. 5 Eau de Parfum",
      brand: "Chanel",
      price: "₹7,999",
      originalPrice: "₹9,999",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      inStock: true
    },
    {
      id: 2,
      name: "Dior Sauvage",
      brand: "Dior",
      price: "₹6,499",
      originalPrice: "₹7,499",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      inStock: true
    },
    {
      id: 3,
      name: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      price: "₹6,500",
      originalPrice: "₹8,000",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (id: number) => {
    console.log("Moving item to cart:", id);
    // Add to cart logic here
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>
          
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Wishlist is Empty</h2>
              <p className="text-gray-500 mb-6">Save your favorite perfumes here to purchase them later!</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-gray-600" />
                    </button>
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.brand}</p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-gray-900">{item.price}</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => moveToCart(item.id)}
                        disabled={!item.inStock}
                        className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                          item.inStock
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>{item.inStock ? "Add to Cart" : "Out of Stock"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
