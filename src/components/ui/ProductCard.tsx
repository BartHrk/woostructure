
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="glass-card rounded-2xl overflow-hidden hover-lift">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">${product.price}</span>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
