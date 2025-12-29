
import React, { useState } from 'react';
import EditProfile from './EditProfile';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'sold' | 'favorites'>('active');
  const [isEditing, setIsEditing] = useState(false);

  const [userData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    username: 'alexj',
    avatar: 'https://picsum.photos/seed/alex/200/200'
  });

  const listings = [
    {
      id: '1',
      title: 'Vintage Denim Jacket',
      price: 89,
      status: 'Active',
      image: 'https://picsum.photos/seed/jacket/100/100'
    },
    {
      id: '2',
      title: 'Nike SB Dunks',
      price: 159,
      status: 'Active',
      image: 'https://picsum.photos/seed/shoes/100/100'
    }
  ];

  const favorites = [
    {
      id: 'f1',
      title: 'UTD Temoc Hoodie',
      price: 35,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: 'f2',
      title: 'Calculus: Early Transcendentals',
      price: 45,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100'
    }
  ];

  if (isEditing) {
    return (
      <EditProfile 
        user={userData} 
        onBack={() => setIsEditing(false)} 
      />
    );
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Profile Header */}
      <div className="relative h-64 bg-gradient-to-br from-orange-500 via-orange-600 to-emerald-600 p-6 flex flex-col justify-end">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={userData.avatar} 
              alt={userData.firstName} 
              className="w-24 h-24 rounded-3xl border-4 border-white object-cover shadow-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">{userData.firstName} {userData.lastName}</h2>
            <p className="text-white/80 font-medium">@{userData.username}</p>
          </div>
        </div>
      </div>

      {/* Tabs - Three options */}
      <div className="flex border-b border-gray-100 px-2">
        <button 
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-4 text-[11px] font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'active' ? 'text-orange-600' : 'text-gray-400'}`}
        >
          Active
          {activeTab === 'active' && <div className="absolute bottom-0 left-4 right-4 h-1 bg-orange-600 rounded-t-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('sold')}
          className={`flex-1 py-4 text-[11px] font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'sold' ? 'text-orange-600' : 'text-gray-400'}`}
        >
          Sold
          {activeTab === 'sold' && <div className="absolute bottom-0 left-4 right-4 h-1 bg-orange-600 rounded-t-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('favorites')}
          className={`flex-1 py-4 text-[11px] font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'favorites' ? 'text-orange-600' : 'text-gray-400'}`}
        >
          Favorites
          {activeTab === 'favorites' && <div className="absolute bottom-0 left-4 right-4 h-1 bg-orange-600 rounded-t-full" />}
        </button>
      </div>

      {/* Listings List */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
        {activeTab === 'active' && listings.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-3xl p-3 flex space-x-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-2xl object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
              <p className="text-orange-600 font-black text-lg">${item.price}</p>
            </div>
            <button className="self-center p-2 text-gray-400 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        ))}

        {activeTab === 'favorites' && favorites.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-3xl p-3 flex space-x-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer animate-in fade-in duration-300">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-2xl object-cover" />
              <div className="absolute -top-1 -right-1 bg-red-500 p-1 rounded-full border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
              <p className="text-orange-600 font-black text-lg">${item.price}</p>
            </div>
            <button className="self-center p-2 text-red-400 border border-gray-100 rounded-xl hover:bg-red-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        ))}

        {activeTab === 'sold' && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <p className="font-medium">No sold items yet</p>
          </div>
        )}
      </div>

      {/* Edit Profile Button */}
      <div className="p-4 border-t border-gray-100 bg-white sticky bottom-0">
        <button 
          onClick={() => setIsEditing(true)}
          className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-orange-100 active:scale-[0.98] transition-all hover:bg-orange-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
