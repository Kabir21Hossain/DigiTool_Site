import { use, useState } from 'react';
import ProductCard from "./ProductCard";
import { ImFileEmpty } from "react-icons/im";



const PremiumTools = ({ toolPromise, handleBuy, cart }) => {
    const data = use(toolPromise);
    const { products } = data;
    const [tab, setTab] = useState("products");

    const handleCart = (btnType) => {
        if (btnType == "cart") {
            setTab('cart');

        }
        else {
            setTab('products');

        }

    }

    return (
        <div id="products" className="max-w-5xl mx-auto px-2 py-[120px]">
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
                <button className={`btn ${tab == "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white"} px-8 py-3 rounded-full font-medium`} onClick={() => handleCart("products")}>
                    Products
                </button>
                <button className={`btn ${tab == "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white"} px-8 py-3 rounded-full font-medium text-gray-700 flex items-center gap-2`} onClick={() => handleCart("cart")}>
                    Cart
                    <span className="bg-violet-100 text-violet-700 text-xs px-2 py-0.5 rounded-full">{cart.length}</span>
                </button>
            </div>

            {/* Products Grid */}
            {
                tab === 'products' && (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 container mx-auto">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleBuy={handleBuy}
                            isBuy={cart.find(item => item.id === product.id) ? true : false}
                        />
                    ))}
                </div>)
            }

            {
                tab === 'cart' && cart.length > 0 && (
                    <div className="p-10 container mx-auto space-y-6 shadow-md border-gray-300 border-[1px] rounded-md">
                        <h3 className="text-md text-black font-semibold">Your Cart</h3>
                        {
                            cart.map(item => <div key={item.id} className="flex flex-row justify-between items-center p-5 shadow-xl bg-gray-100 rounded-md">
                                <div className="flex flex-row items-center gap-2">
                                    <span>{item.icon}</span>
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-md text-black font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-600">${item.price}</p>
                                    </div>
                                </div>
                                <span className="text-red-500 cursor-pointer font-semibold text-sm">Remove</span>
                            </div>)
                        }
                        <div className="total flex justify-between items-center">
                            <p class="text-lg font-semibold text-gray-500">Total:</p>
                            <p className="text-lg font-semibold text-black">${cart.reduce((total,item)=>total+item.price,0)}</p>
                        </div>

                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514fa] text-white border-none w-full rounded-full" onClick={handleCheckout}>Proceed To Checkout</button>
                    </div>

                )


            }

            {
                tab==='cart' && cart.length ===0 && (
                    <div className="p-10 container mx-auto space-y-6 shadow-md border-gray-300 border-[1px] rounded-md">
                        <h3 className="text-md text-black font-semibold">Your Cart</h3>
                        <div className=" max-w-4xl mx-auto flex items-center justify-center"><ImFileEmpty size={90}/></div>
                        <p className="text-sm max-w-4xl mx-auto flex items-center justify-center text-gray-600">Your cart is empty.Please add some products to your cart.</p>
                    </div>
                )
            }
        </div>
    );
};

export default PremiumTools;