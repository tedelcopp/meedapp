 'use client'

import { useState } from 'react';
import Drawers from './Drawer'; // Asegúrate de importar el componente correctamente

const links = [
  { name: 'Personalizados', href: '#', content: 'Información sobre entrenamientos personalizados.' },
  { name: 'Planes de Entrenamiento', href: '#', content: 'Descubre nuestros diversos planes de entrenamiento.' },
  { name: 'Semi-Personalizados', href: '#', content: 'Planes semi-personalizados para tus necesidades.' },
  { name: 'Seguimiento Online', href: '#', content: 'Opciones para seguimiento online de tus progresos.' },
];

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export default function Example() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleLinkClick = (linkContent: string) => {
    setContent(linkContent);
    setOpen(true);
  };

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-900">
      {/* Componente Drawers */}
      <Drawers open={open} onCloseAction={() => setOpen(false)} content={content} />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">Entrena conmigo</h2>
          <p className="mt-8 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl/8">
            ¿Estás listo para alcanzar tus metas? 💪 Conoce nuestros planes de entrenamiento diseñados especialmente para ayudarte a lograr tus objetivos de salud y fitness. Ya sea que busques ganar fuerza, mejorar tu resistencia o simplemente llevar un estilo de vida más activo y saludable.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <button key={link.name} onClick={() => handleLinkClick(link.content)} className="text-left">
                {link.name} <span aria-hidden="true"></span>
              </button>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
