import { ShoppingBag } from "lucide-react";

function CartSideBar() {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop:blur-sm z-50 transition-all duration-300`}>
        <div
          className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}>
          <div className="flex items-center justify-between p-6 border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6" />
              <span>Shopping Cart</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartSideBar;
