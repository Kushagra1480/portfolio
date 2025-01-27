import { useState } from 'react'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home')

  const items = ['Projects', 'Resume', 'Education', 'Experience']

  return (
    <div className="flex justify-center items-center p-2 bg-zinc-800 rounded-full shadow-sm">
      <div className="flex space-x-2 relative">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeItem === item
                ? 'text-white bg-blue-500'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;