import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    role: 'Administradora de Fincas en Barcelona',
    content: 'Servicio excepcional en el Eixample. Su profesionalidad y rapidez fueron fundamentales.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente Inmobiliario',
    content: 'La mejor empresa de limpieza traumática en Barcelona. Totalmente recomendable.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Servicios Sociales Barcelona',
    content: 'Su experiencia en casos delicados en la ciudad marca la diferencia.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Opiniones de Nuestros Clientes en Barcelona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué somos la empresa de confianza en Barcelona para servicios de limpieza especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};