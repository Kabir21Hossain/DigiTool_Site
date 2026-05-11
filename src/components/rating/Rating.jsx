const Rating=()=>{
    return (

        <div className="w-full bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% min-h-[100px] py-10 box-border">
            <div className="container mx-auto flex justify-center items-center">
                <div className="active-user border-r border-gray-400 flex flex-col justify-center items-center w-[300px] py-1 gap-2">
                    <span className="font-extrabold text-3xl text-white">50K+</span>
                    <span className="text-gray-400 text-sm">Active Users</span>
                </div>

                <div className="active-user border-r border-gray-400 flex flex-col justify-center items-center w-[300px] py-1 gap-2">
                    <span className="font-extrabold text-3xl text-white">200+</span>
                    <span className="text-gray-400 text-sm">Premium Tools</span>
                </div>

                <div className="active-user  flex flex-col justify-center items-center w-[300px] py-1 gap-2">
                    <span className="font-extrabold text-3xl text-white">4.9+</span>
                    <span className="text-gray-400 text-sm">Rating</span>
                </div>

            </div>
       
        </div>
    )
}

export default Rating;