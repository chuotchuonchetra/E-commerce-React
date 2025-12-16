function ProductCart() {
  return (
    <div className="group bg-white rounded-2xl shadow:md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/2f/53/15/2f53150e9323a6a57a3cc560e0e321ec.jpg"
          alt=""
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span
            className="absolute top-4 left-4 bg-white/90 backdrop:blur-sm text-gray-700 
            px-3 py-1 rounded-full text-sm font-medium
        ">
            Porduct Category
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2">Product Name</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          Product Description
        </p>
        <div className="flex items-center mb-4">
          <div className="flex items-center">Product Rating</div>
          <span>Product Rating Product Review</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">$99.99</span>
          <button
            className="group/btn bg-gray-200 text-gray-900 px-4 py-2 rounded-lg
          hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center cursor-pointer space-x-2
          ">
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
