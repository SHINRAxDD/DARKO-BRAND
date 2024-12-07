import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-900/80 to-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold text-white tracking-wider">
            DARKO
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/collection" className="text-gray-300 hover:text-white transition-colors">
              Collection
            </Link>
            <Link to="/new" className="text-gray-300 hover:text-white transition-colors">
              New Arrivals
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ShoppingBag className="h-6 w-6 text-white cursor-pointer" />
            <Menu className="h-6 w-6 text-white cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;