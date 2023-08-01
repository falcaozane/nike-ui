

const Hero = () => {
  return (
    <main className="hero flex lg:max-w-7xl mx-auto mt-5 items-center px-2">
        <div className="hero-content items-center ml-0 mr-auto">
            <h1 className="text-7xl font-extrabold max-w-lg pr-10 mb-10">YOUR FEET DESERVE THE BEST</h1>
            <p className="font-semibold text-slate-500 max-w-sm mb-5">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
               YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-btn grid lg:grid-cols-2 gap-4 max-w-sm mb-5">
                <button className="bg-red-600 text-white border-2 border-red-600 rounded-full p-2 hover:bg-white hover:text-red-600">Shop Now</button>
                <button className=" border-2 border-red-600 text-red-500 rounded-full p-2 hover:bg-red-600 hover:text-white">Category</button>
            </div>
            <div className="brand-icons">
                <p className="my-2">Available on:</p>
                <div className="flex my-2 gap-6">
                    <img src="images/flipkart.png" alt="flipkart" className="cursor-pointer " />
                    <img src="images/amazon.png" alt="amazon" className="cursor-pointer" />
                </div>
            </div>
        </div>
            <div className="hero-image">
                <img src="images/hero-image.png" alt="product-image"  />
            </div>
    </main>
  )
}

export default Hero