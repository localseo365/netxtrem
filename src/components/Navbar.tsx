import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-blue-900 text-2xl font-bold">Netxtrem</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-900 transition-colors">Servicios</a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-900 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-900 transition-colors">Contacto</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-900 transition-colors">Blog</a>
            <a 
              href="https://wa.me/34690220944"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              690 22 09 44
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Servicios</a>
            <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contacto</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Blog</a>
            <a 
              href="https://wa.me/34690220944"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-blue-900"
            >
              <Phone size={18} className="mr-2" />
              WhatsApp: 690 22 09 44
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;