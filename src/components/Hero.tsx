
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";

interface HeroProps {
  onViewCollectionClick?: () => void;
}

const Hero = ({ onViewCollectionClick }: HeroProps) => {
  const handleShopNowClick = () => {
    if (onViewCollectionClick) {
      onViewCollectionClick();
    }
  };

  const handleViewCollectionClick = () => {
    if (onViewCollectionClick) {
      onViewCollectionClick();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Luxury
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Perfume{" "}
                </span>
                Collection
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our exquisite collection of branded luxury perfumes. Premium fragrances
                from world-renowned designers crafted for the discerning individual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleShopNowClick}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleViewCollectionClick}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Collection
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=100&q=80" 
                    alt="Free Shipping"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over ₹5,000</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                <p className="text-xs text-gray-600">30-day guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                <p className="text-xs text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80"
                      alt="Chanel No. 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?auto=format&fit=crop&w=300&q=80"
                      alt="Dior Sauvage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80"
                      alt="Tom Ford Black Orchid"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=300&q=80"
                      alt="Versace Bright Crystal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              New Arrivals!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
              <Truck className="w-4 h-4" />
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
