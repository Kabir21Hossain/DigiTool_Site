import { use } from 'react';
import ProductCard from "./ProductCard";


const PremiumTools = ({toolPromise}) => {
    const data = use(toolPromise);
    const { products } = data;


    return (
        <div className="max-w-5xl mx-auto px-2 py-[120px]">
            {/* Header */}
            <div className="text-center mb-5">
                <h2 className="text-4xl font-extrabold text-[#101727] mb-4">
                    Premium Digital Tools
                </h2>
                <p className="text-[#627382] max-w-xl mx-auto text-[16px]">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center gap-0 mb-10">
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white px-8 py-3 rounded-full font-medium">
                    Products
                </button>
                <button className="btn hover:border-gray-400 px-8 py-3 rounded-full font-medium text-gray-700 flex items-center gap-2">
                    Cart
                    <span className="bg-violet-100 text-violet-700 text-xs px-2 py-0.5 rounded-full">0</span>
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 container mx-auto">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default PremiumTools;