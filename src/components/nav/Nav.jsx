import NavLinkItem from "./NavLinkItem.jsx";

const links = [
  { text: "Inicio", to: "/inicio" },
  { text: "Nosotros", to: "/nosotros" },
  { text: "Servicios", to: "/servicios" },
  { text: "Catálogo", to: "/catalogo" },
  { text: "Galería", to: "/galeria" },
  { text: "Cotización", to: "/cotizacion" },
  { text: "Contacto", to: "/contacto" },
];

const Nav = ({ isOpen, onNavigate }) => {
  return (
    <nav
      className={`absolute top-full right-0 left-0 border-b border-neutral-200 bg-white px-4 py-4 shadow-lg lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
        isOpen ? "block" : "hidden"
      }`}
      aria-label="Navegación principal"
    >
      <ul className="page-container flex flex-col gap-1 lg:w-auto lg:flex-row lg:items-center">
        {links.map((link) => (
          <NavLinkItem key={link.to} {...link} onClick={onNavigate} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
