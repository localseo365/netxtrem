import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Contacta con Nosotros</h2>
            <p className="text-gray-600 mb-8">
              Estamos disponibles 24/7 para atender cualquier emergencia. No dudes en
              contactarnos para una consulta gratuita.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Teléfono y WhatsApp 24/7</p>
                  <div className="space-x-4">
                    <a href="tel:+34690220944" className="text-blue-900 hover:text-blue-700">
                      690 22 09 44
                    </a>
                    <a href="https://wa.me/34690220944" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@netxtrem.es" className="text-blue-900 hover:text-blue-700">
                    info@netxtrem.es
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-gray-600">Barcelona, Cataluña</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-gray-600">Disponible 24h, 365 días</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Enviar Mensaje
                </button>

                <p className="text-center text-sm text-gray-600">
                  O contáctanos directamente por{' '}
                  <a 
                    href="https://wa.me/34690220944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 font-semibold"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;