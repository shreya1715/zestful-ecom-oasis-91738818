
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

  // Women's luxury purse collection with matching images
  const allProducts = [
    {
      id: 1,
      name: "Designer Leather Tote Bag",
      price: 25999,
      originalPrice: 32999,
      image: "photo-1548036328-c9fa89d128fa", // Luxury handbag
      rating: 4.8,
      reviews: 124,
      category: "Tote Bags",
      isOnSale: true
    },
    {
      id: 2,
      name: "Premium Crossbody Purse",
      price: 18999,
      image: "photo-1553062407-98eeb64c6a62", // Crossbody bag
      rating: 4.7,
      reviews: 89,
      category: "Crossbody"
    },
    {
      id: 3,
      name: "Luxury Chain Shoulder Bag",
      price: 42999,
      originalPrice: 55999,
      image: "photo-1584917865442-de89df76afd3", // Chain shoulder bag
      rating: 4.9,
      reviews: 156,
      category: "Shoulder Bags",
      isOnSale: true
    },
    {
      id: 4,
      name: "Elegant Clutch Purse",
      price: 12999,
      image: "photo-1553062407-98eeb64c6a62", // Clutch bag
      rating: 4.6,
      reviews: 67,
      category: "Clutches"
    },
    {
      id: 5,
      name: "Designer Satchel Bag",
      price: 28999,
      image: "photo-1548036328-c9fa89d128fa", // Satchel bag
      rating: 4.8,
      reviews: 203,
      category: "Satchels"
    },
    {
      id: 6,
      name: "Luxury Mini Handbag",
      price: 22999,
      image: "photo-1584917865442-de89df76afd3", // Mini handbag
      rating: 4.7,
      reviews: 91,
      category: "Mini Bags"
    },
    {
      id: 7,
      name: "Premium Evening Bag",
      price: 35999,
      image: "photo-1553062407-98eeb64c6a62", // Evening bag
      rating: 4.9,
      reviews: 78,
      category: "Evening Bags"
    },
    {
      id: 8,
      name: "Designer Bucket Bag",
      price: 31999,
      image: "photo-1548036328-c9fa89d128fa", // Bucket bag
      rating: 4.5,
      reviews: 45,
      category: "Bucket Bags"
    }
  ];

  const products = featured ? allProducts.slice(0, 4) : allProducts;

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category.toLowerCase().replace(/\s+/g, '-'))))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    if (filterCategory !== "all") {
      filtered = products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === filterCategory);
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
                  {category === "all" ? "All Categories" : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
