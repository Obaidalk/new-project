import React from "react";
import { Trash2 } from "lucide-react";

export default function Cart() {
  // Example cart data (you can replace with props or state later)
  const items = [
    { id: 1, name: "Nike Shoes", price: 120, qty: 1, img: "https://via.placeholder.com/80" },
    { id: 2, name: "Adidas Jacket", price: 90, qty: 2, img: "https://via.placeholder.com/80" },
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>

      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
          <div className="flex items-center gap-3">
            <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-semibold">${item.price * item.qty}</p>
            <button className="text-red-500 hover:text-red-700">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4 text-lg font-bold">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-xl mt-4 hover:bg-blue-700 transition">
        Checkout
      </button>
    </div>
  );
}
