
import React, { useState } from 'react';

interface ClothingListingFormProps {
  onBack: () => void;
}

const ClothingListingForm: React.FC<ClothingListingFormProps> = ({ onBack }) => {
  const [condition, setCondition] = useState('Like New');
  const conditions = ['New', 'Like New', 'Excellent', 'Good', 'Fair'];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-orange-600 p-6 flex items-start space-x-4">
        <button onClick={onBack} className="bg-white/20 p-2 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <h1 className="text-white text-xl font-semibold">List Clothing</h1>
          <p className="text-white/80 text-sm">Selling a shirt, jacket, or shoes?</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-20">
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Clothing Photos *
          </label>
          <div className="w-32 h-32 border-2 border-dashed border-orange-500 rounded-2xl flex flex-col items-center justify-center space-y-2 text-orange-500 cursor-pointer bg-orange-50/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs font-medium text-center px-2">Add clear photos of the item</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Garment Type *</label>
            <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 appearance-none">
              <option>T-Shirt</option>
              <option>Hoodie</option>
              <option>Jeans / Pants</option>
              <option>Jacket / Outerwear</option>
              <option>Shoes</option>
              <option>Accessories</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Brand *</label>
            <input type="text" placeholder="e.g., Nike, Patagonia, Zara" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Size *</label>
            <input type="text" placeholder="e.g., Small, 32x34, 10.5 US" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Listing Title *</label>
            <input type="text" placeholder="e.g., Vintage UTD Hoodie" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Condition *</label>
            <div className="flex flex-wrap gap-2">
              {conditions.map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${condition === c ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 active:scale-[0.98] transition-all">
          Post Clothing Item
        </button>
      </div>
    </div>
  );
};

export default ClothingListingForm;
