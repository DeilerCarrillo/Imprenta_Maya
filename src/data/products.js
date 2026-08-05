const crearImagenTemporal = (texto) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
      <rect width="100%" height="100%" fill="#f5f1e9"/>
      <rect x="40" y="40" width="720" height="420" rx="30" fill="#202020"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial" font-size="44" font-weight="bold" fill="#f2a33a">
        ${texto}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const products = [
  {
    id: 1,
    name: "Tarjetas de presentación",
    category: "Impresión Corporativa",
    description:
      "Tarjetas personalizadas para profesionales, empresas, comercios y emprendimientos.",
    image: crearImagenTemporal("Tarjetas"),
  },
  {
    id: 2,
    name: "Facturas",
    category: "Impresión Corporativa",
    description:
      "Facturas impresas y personalizadas de acuerdo con las necesidades de cada negocio.",
    image: crearImagenTemporal("Facturas"),
  },
  {
    id: 3,
    name: "Carpetas",
    category: "Impresión Corporativa",
    description:
      "Carpetas corporativas para documentos, presentaciones, propuestas y reuniones.",
    image: crearImagenTemporal("Carpetas"),
  },
  {
    id: 4,
    name: "Hojas membretadas",
    category: "Impresión Corporativa",
    description:
      "Papelería con la identidad visual y datos principales de la empresa.",
    image: crearImagenTemporal("Hojas"),
  },
  {
    id: 5,
    name: "Talonarios",
    category: "Impresión Corporativa",
    description:
      "Talonarios personalizados para recibos, órdenes, controles y comprobantes.",
    image: crearImagenTemporal("Talonarios"),
  },
  {
    id: 6,
    name: "Volantes",
    category: "Papelería",
    description:
      "Volantes impresos para promociones, actividades, productos y servicios.",
    image: crearImagenTemporal("Volantes"),
  },
  {
    id: 7,
    name: "Folletos",
    category: "Papelería",
    description:
      "Folletos informativos y promocionales con diseño personalizado.",
    image: crearImagenTemporal("Folletos"),
  },
  {
    id: 8,
    name: "Catálogos",
    category: "Papelería",
    description:
      "Catálogos para presentar productos y servicios de manera clara y organizada.",
    image: crearImagenTemporal("Catálogos"),
  },
  {
    id: 9,
    name: "Banners",
    category: "Papelería",
    description:
      "Banners para negocios, promociones, actividades, interiores y exteriores.",
    image: crearImagenTemporal("Banners"),
  },
];