
import { Product } from "@/lib/types";
import ProductCard from "../ui/ProductCard";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    price: 129,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A beautifully crafted desk lamp with minimalist design",
    category: "Lighting"
  },
  {
    id: "2",
    name: "Leather Backpack",
    price: 249,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium leather backpack for everyday use",
    category: "Bags"
  },
  {
    id: "3",
    name: "Ceramic Vase",
    price: 89,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted ceramic vase with modern design",
    category: "Home"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our carefully selected collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
