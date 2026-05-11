import { FaCheck } from "react-icons/fa";

const ProductCard = ({ product, handleBuy, isBuy }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col relative">
      {/* Icon & Tag */}
      <div className="flex justify-center mb-4 rounded-full shadow-lg border-1 border-gray-100 w-12 h-12 items-center">
        <div className="text-3xl">{product.icon}</div>

      </div>

      {
        product.tagType === "best-seller" ? (
          <div className="bg-[#FEF3C6] text-[#BB4D00] px-2 py-1 rounded-full text-xs absolute top-2 right-2">
            {product.tag}
          </div>
        ) : product.tagType === "popular" ? (
          <div className="bg-[#E1e7ff] text-[#4F39F6] px-2 py-1 rounded-full text-xs absolute top-2 right-2">
            {product.tag}
          </div>
        ) : (
          <div className="bg-[#Dbfce7] text-[#0a883e] px-2 py-1 rounded-full text-xs absolute top-2 right-2">
            {product.tag}
          </div>
        )
      }

      {/* Title & Description */}
      <h3 className="text-[24px] font-bold text-[#101727] mb-2">{product.name}</h3>
      <p className="text-[#627382] text-[13px] leading-relaxed mb-2">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-[24px] font-bold text-[#101727]">${product.price}</span>
        <span className="text-[#627382] text-sm uppercase">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-1 mb-4 flex-1">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-[#627382]">
            <span className="text-green-400 text-sm mt-0.5"><FaCheck /></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button 
        className={`mt-auto btn px-8 py-3 rounded-full font-medium transition-all duration-300 ${
          isBuy 
            ? "bg-green-600 text-white border-none hover:bg-green-700" 
            : "bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white border-none"
        }`} 
        onClick={() => { handleBuy(product); }}
      >
        {isBuy ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  )
}

export default ProductCard;
