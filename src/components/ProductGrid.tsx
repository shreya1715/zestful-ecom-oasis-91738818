import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Filter, Grid, List } from "lucide-react";

interface ProductGridProps {
  featured?: boolean;
}

const ProductGrid = ({ featured = false }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock product data with Indian pricing and matching images
  const allProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 15999,
      originalPrice: 19999,
      image: "photo-1505740420928-5e560c06d30e", // Actual headphones image
      rating: 4.8,
      reviews: 124,
      category: "Electronics",
      isOnSale: true
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 1299,
      image: "photo-1521572163474-6864f9cf17ab", // T-shirt image
      rating: 4.5,
      reviews: 89,
      category: "Clothing"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 8999,
      originalPrice: 12999,
      image: "photo-1523275335684-37898b6baf30", // Watch image
      rating: 4.6,
      reviews: 156,
      category: "Electronics",
      isOnSale: true
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      price: 2799,
      image: "photo-1507003211169-0a1dd7228f2d", // Desk lamp image
      rating: 4.3,
      reviews: 67,
      category: "Home"
    },
    {
      id: 5,
      name: "Premium Coffee Beans",
      price: 899,
      image: "photo-1559056199-641a0ac8b55e", // Coffee beans image
      rating: 4.9,
      reviews: 203,
      category: "Food"
    },
    {
      id: 6,
      name: "Leather Wallet",
      price: 2499,
      image: "photo-1553062407-98eeb64c6a62", // Wallet image
      rating: 4.7,
      reviews: 91,
      category: "Accessories"
    },
    {
      id: 7,
      name: "Wireless Charging Pad",
      price: 1599,
      image: "photo-1556306535-38febf6782e7", // Wireless charger image
      rating: 4.4,
      reviews: 78,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Bamboo Phone Stand",
      price: 799,
      image: "photo-1574944985070-8f3ebc6b2290", // Phone stand image
      rating: 4.2,
      reviews: 45,
      category: "Accessories"
    }
  ];

  const products = featured ? allProducts.slice(0, 4) : allProducts;

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    if (filterCategory !== "all") {
      filtered = products.filter(p => p.category.toLowerCase() === filterCategory);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, filterCategory, sortBy]);

  if (featured) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* View Mode */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Products */}
      <div className={`${
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "space-y-4"
      }`}>
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Results Info */}
      <div className="text-center text-gray-600 py-4">
        Showing {filteredAndSortedProducts.length} of {products.length} products
      </div>
    </div>
  );
};

export default ProductGrid;
