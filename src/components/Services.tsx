import React from 'react';
import { Sparkles, Trash2, Home, Shield, Phone } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Limpieza Traumática',
    description: 'Servicios especializados para situaciones delicadas en Barcelona y área metropolitana. Nuestro equipo está altamente capacitado en el manejo de escenarios complejos, utilizando protocolos específicos y equipamiento profesional. Realizamos limpieza y desinfección completa, eliminación de olores y restauración del espacio afectado. Trabajamos con la máxima discreción y respeto, cumpliendo todas las normativas de seguridad y salud.',
  },
  {
    icon: Shield,
    title: 'Desinfección Profesional',
    description: 'Eliminación garantizada de patógenos y desinfección integral siguiendo la normativa catalana. Utilizamos productos homologados y técnicas avanzadas para asegurar la completa desinfección de espacios. Nuestros servicios incluyen desinfección preventiva y correctiva, tratamientos específicos contra virus y bacterias, y certificación de los procesos realizados. Especial atención a zonas críticas y puntos de alto riesgo.',
  },
  {
    icon: Home,
    title: 'Vaciado de Pisos',
    description: 'Servicio integral de vaciado y limpieza de inmuebles en toda Barcelona. Gestionamos el vaciado completo de viviendas, locales y naves industriales, incluyendo la clasificación y gestión de residuos según normativa. Ofrecemos servicios de limpieza profunda posterior al vaciado, preparando el espacio para su nuevo uso. Trabajamos con eficiencia y rapidez, minimizando las molestias a la comunidad.',
  },
  {
    icon: Trash2,
    title: 'Gestión de Residuos',
    description: 'Tratamiento especializado de residuos cumpliendo la normativa local y autonómica. Realizamos la clasificación, transporte y eliminación segura de todo tipo de residuos, incluyendo materiales biológicos y peligrosos. Proporcionamos certificados de gestión y trazabilidad completa del proceso. Compromiso con el medio ambiente y la sostenibilidad en todos nuestros procedimientos.',
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Servicios Especializados en Barcelona
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones profesionales integrales para toda el área metropolitana
            de Barcelona, adaptándonos a las necesidades específicas de cada situación.
            Nuestro compromiso con la excelencia y la atención al detalle nos ha convertido
            en referentes del sector en Cataluña. Contamos con personal especializado y
            certificado, equipamiento de última generación y protocolos adaptados a cada
            tipo de intervención.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="https://wa.me/34690220944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center"
              >
                Más información
                <Phone className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};