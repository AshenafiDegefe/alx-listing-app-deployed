import { Search, User, Globe, Menu, ChevronDown, Heart, Hotel, Home, LayoutGrid, Mountain } from 'lucide-react';

const AccommodationTypes = () => {
  const types = [
    { name: "Rooms", icon: Hotel },
    { name: "Mansion", icon: Home },
    { name: "Countryside", icon: Mountain },
    { name: "Cabin", icon: LayoutGrid },
    { name: "Luxury", icon: Heart },
    { name: "Unique Stays", icon: Globe },
    { name: "Beachfront", icon: Hotel },
    { name: "Ski-in/Ski-out", icon: Mountain },
  ];

  return (
    <div className="flex px-4 md:px-8 lg:px-12 py-3 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
      
      <style>{`
        /* Hide scrollbar for better aesthetics */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      {types.map((type) => (
        <div 
          key={type.name} 
          className="flex flex-col items-center justify-center p-3 text-sm text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-500 cursor-pointer transition duration-150 ease-in-out mx-3 md:mx-4"
        >
          <type.icon size={20} className="mb-1" />
          <span className="text-xs font-medium">{type.name}</span>
        </div>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      {/* Top Bar - Logo, Search, User */}
      <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105">
          <svg
            className="h-8 w-8 text-blue-600 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L0 12h5v12h14V12h5L12 0zM17 22h-4v-7h-2v7H7V13H2l10-10 10 10h-5v9z"/>
          </svg>
          <h1 className="hidden md:block text-2xl font-bold text-gray-800">Stay<span className="text-blue-600">Well</span></h1>
        </div>

        {/* Search Bar (Centered and Interactive) */}
        <div className="hidden lg:flex flex-1 grow justify-center mx-10">
          <div className="flex items-center border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-sm font-medium">
            <div className="p-2 px-4 border-r border-gray-200">Anywhere</div>
            <div className="p-2 px-4 border-r border-gray-200">Any Week</div>
            <div className="p-2 px-4 text-gray-500 flex items-center">
              Add Guests
              <Search size={18} className="ml-3 p-1 rounded-full bg-blue-600 text-white" />
            </div>
          </div>
        </div>

        {/* User Actions (Sign In/Sign Up) */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">
            Host your home
          </button>
          <button className="hidden sm:block text-gray-700 hover:bg-gray-100 p-2 rounded-full">
            <Globe size={20} />
          </button>

          {/* User Menu Dropdown */}
          <div className="flex items-center border border-gray-200 rounded-full p-2 space-x-2 shadow-sm hover:shadow-md cursor-pointer transition duration-150">
            <Menu size={18} className="text-gray-700" />
            <div className="bg-gray-600 text-white rounded-full p-1">
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Mobile Search/Filter Button */}
        <button className="lg:hidden p-3 border border-gray-200 rounded-full shadow-md flex items-center space-x-2 transition-transform hover:scale-105">
            <Search size={18} className="text-blue-600" />
            <span className="text-sm font-medium">Search</span>
        </button>
      </div>

      {/* Accommodation Types Navigation */}
      <AccommodationTypes />
    </header>
  );
};
export default Header;