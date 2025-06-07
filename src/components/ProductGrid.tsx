import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Filter, Grid, List, Search } from "lucide-react";

interface ProductGridProps {
  featured?: boolean;
  onProductClick?: (product: any) => void;
  filterBy?: "categories" | "new" | "sale";
}

const ProductGrid = ({ featured = false, onProductClick, filterBy }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Branded perfumes collection with unique images
  const allProducts = [
    {
      id: 1,
      name: "Chanel No. 5 Eau de Parfum",
      price: 8999,
      originalPrice: 11999,
      image: "photo-1541643600914-78b084683601", // Elegant perfume bottle
      rating: 4.9,
      reviews: 2847,
      category: "Floral",
      isOnSale: true,
      isNew: false
    },
    {
      id: 2,
      name: "Dior Sauvage Eau de Toilette",
      price: 7499,
      image: "photo-1588405748880-12d1d2a59d32", // Blue perfume bottle
      rating: 4.8,
      reviews: 1923,
      category: "Woody",
      isNew: true
    },
    {
      id: 3,
      name: "Tom Ford Black Orchid",
      price: 12999,
      originalPrice: 15999,
      image: "photo-1594035910387-fea47794261f", // Dark luxury bottle
      rating: 4.7,
      reviews: 856,
      category: "Oriental",
      isOnSale: true,
      isNew: false
    },
    {
      id: 4,
      name: "Versace Bright Crystal",
      price: 5999,
      image: "photo-1585386959984-a4155224a1ad", // Pink crystal bottle
      rating: 4.6,
      reviews: 1245,
      category: "Fresh",
      isNew: true
    },
    {
      id: 5,
      name: "Creed Aventus",
      price: 18999,
      image: "photo-1592945403244-b3fbafd7f539", // Luxury perfume with gold accents
      rating: 4.9,
      reviews: 743,
      category: "Fruity",
      isNew: false
    },
    {
      id: 6,
      name: "Yves Saint Laurent Black Opium",
      price: 8799,
      image: "photo-1563170351-be82bc888aa4", // Black designer bottle
      rating: 4.8,
      reviews: 1654,
      category: "Oriental",
      isNew: true
    },
    {
      id: 7,
      name: "Dolce & Gabbana Light Blue",
      price: 6499,
      originalPrice: 8499,
      image: "photo-1528740561666-dc2479dc08ab", // Light blue bottle
      rating: 4.5,
      reviews: 2103,
      category: "Fresh",
      isOnSale: true,
      isNew: false
    },
    {
      id: 8,
      name: "Giorgio Armani Acqua di Gio",
      price: 7299,
      image: "photo-1557170334-a9632e77c6e4", // Clear bottle with water theme
      rating: 4.7,
      reviews: 1876,
      category: "Aquatic",
      isNew: false
    },
    {
      id: 9,
      name: "Lancôme La Vie Est Belle",
      price: 9299,
      image: "photo-1595425970377-c9703cf48b6d", // Pink gradient bottle
      rating: 4.8,
      reviews: 1432,
      category: "Floral",
      isNew: true
    },
    {
      id: 10,
      name: "Paco Rabanne 1 Million",
      price: 6799,
      image: "photo-1587017539504-67cfbddac569", // Gold bar-shaped bottle
      rating: 4.6,
      reviews: 967,
      category: "Spicy",
      isNew: false
    },
    {
      id: 11,
      name: "Marc Jacobs Daisy",
      price: 5799,
      originalPrice: 7299,
      image: "photo-1615634260167-c8cdede054de", // White bottle with daisy cap
      rating: 4.4,
      reviews: 1289,
      category: "Floral",
      isOnSale: true,
      isNew: false
    },
    {
      id: 12,
      name: "Hermès Terre d'Hermès",
      price: 11999,
      image: "photo-1605656673499-aa4df23ede3a", // Orange luxury bottle
      rating: 4.8,
      reviews: 634,
      category: "Woody",
      isNew: false
    }
  ];

  let products = allProducts;

  // Apply filter based on filterBy prop
  if (filterBy === "sale") {
    products = allProducts.filter(p => p.isOnSale);
  } else if (filterBy === "new") {
    products = allProducts.filter(p => p.isNew);
  } else if (featured) {
    products = allProducts.slice(0, 4);
  }

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filterCategory !== "all") {
      filtered = filtered.filter(p => p.category.toLowerCase() === filterCategory);
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
  }, [products, filterCategory, sortBy, searchQuery]);

  if (featured) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search perfumes, brands, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
      </div>

      {/* Products */}
      <div className={`${
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "space-y-4"
      }`}>
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
        ))}
      </div>

      {/* Results Info */}
      <div className="text-center text-gray-600 py-4">
        {searchQuery && (
          <p className="mb-2">Search results for "{searchQuery}"</p>
        )}
        <p>Showing {filteredAndSortedProducts.length} of {products.length} products</p>
      </div>
    </div>
  );
};

export default ProductGrid;
