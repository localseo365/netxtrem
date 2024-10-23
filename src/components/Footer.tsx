import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Netxtrem</h3>
            <p className="text-gray-300">
              Especialistas en limpieza traumática y servicios de desinfección en Barcelona
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-300 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-blue-300 transition-colors">Servicios</a></li>
              <li><a href="#testimonios" className="hover:text-blue-300 transition-colors">Testimonios</a></li>
              <li><a href="#blog" className="hover:text-blue-300 transition-colors">Blog</a></li>
              <li><a href="#contacto" className="hover:text-blue-300 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Limpieza Traumática</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Desinfección</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Vaciado de Pisos</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Gestión de Residuos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <a href="tel:+34690220944" className="hover:text-blue-300 transition-colors">690 22 09 44</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <a href="mailto:info@netxtrem.es" className="hover:text-blue-300 transition-colors">info@netxtrem.es</a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span>Barcelona, Cataluña</span>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Netxtrem. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;