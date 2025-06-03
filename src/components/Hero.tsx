
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shop the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Future{" "}
                </span>
                Today
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our curated collection of premium products designed to elevate your lifestyle.
                Quality, style, and innovation in every purchase.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View Collection
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=100&q=80" 
                    alt="Free Shipping"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over ₹2000</p>
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
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
                      alt="Headphones"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80"
                      alt="T-shirt"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
                      alt="Smart Watch"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                      alt="Desk Lamp"
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
