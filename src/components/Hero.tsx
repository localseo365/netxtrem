import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80"
          alt="Servicio profesional de limpieza traumática en Barcelona"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Servicios de <a href="https://www.limpiezasindromediogenes.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Limpieza Traumática</a> en Barcelona
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Expertos en situaciones delicadas en toda el área metropolitana de Barcelona.
            Con más de una década de experiencia, ofrecemos servicios especializados de limpieza traumática,
            desinfección y gestión de residuos las 24 horas del día, los 365 días del año.
            Respuesta inmediata en menos de 2 horas en cualquier punto de Barcelona y alrededores.
          </p>
          <p className="text-lg text-gray-200 mb-8">
            Nuestro equipo altamente cualificado está certificado en el manejo de situaciones
            traumáticas, utilizando las técnicas más avanzadas y productos homologados según
            la normativa catalana vigente. Garantizamos la máxima discreción y profesionalidad
            en cada intervención.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/34690220944"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="https://wa.me/34690220944"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Servicios de Emergencia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};