import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Normativa de Limpieza Traumática en Barcelona 2024',
    excerpt: 'Actualización completa sobre los protocolos y regulaciones vigentes en Barcelona para servicios de limpieza traumática. Analizamos las últimas normativas del Ayuntamiento de Barcelona y la Generalitat de Catalunya en materia de gestión de residuos biológicos, protocolos de desinfección y requisitos de seguridad. Información esencial para profesionales y usuarios del servicio.',
    image: 'https://images.unsplash.com/photo-1583753075968-1236ccb83c66?auto=format&fit=crop&q=80',
    date: '15 Mar 2024',
  },
  {
    title: 'Guía Completa de Gestión de Residuos en Barcelona',
    excerpt: 'Análisis detallado sobre la gestión de residuos biológicos y especiales en Barcelona. Incluye información sobre clasificación de residuos, protocolos de manipulación, normativa actual y centros autorizados de tratamiento. Especial énfasis en la gestión sostenible y el cumplimiento de las ordenanzas municipales de Barcelona en materia de residuos especiales.',
    image: 'https://images.unsplash.com/photo-1605125207267-f27feb22899d?auto=format&fit=crop&q=80',
    date: '10 Mar 2024',
  },
  {
    title: 'Protocolo de Emergencia para Limpiezas Especializadas',
    excerpt: 'Manual completo sobre procedimientos de emergencia en situaciones que requieren limpieza especializada en Barcelona. Incluye guías paso a paso, recomendaciones de seguridad, contactos de emergencia y protocolos de actuación según el tipo de incidente. Información vital para administradores de fincas, servicios sociales y particulares.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
    date: '5 Mar 2024',
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Recursos y Actualidad en Limpieza Especializada
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades en servicios de limpieza
            especializada en Barcelona. Nuestro blog ofrece información actualizada,
            consejos profesionales y recursos útiles para la gestión de situaciones
            que requieren intervención especializada. Contenido elaborado por expertos
            del sector con años de experiencia en el área metropolitana de Barcelona.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};