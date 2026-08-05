import { useState } from "react";
import { Link } from "react-router";
import Nav from "../nav/Nav.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-[#202020] text-white">
        <div className="page-container flex min-h-9 items-center justify-between gap-4 text-xs">
          <span>Comayagüela, Honduras</span>
          <a className="font-bold text-[#f2a33a]" href="tel:+50498265424">
            +504 9826-5424
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="page-container relative flex min-h-20 items-center justify-between gap-5">
          <Link to="/inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <img
            className="h-14 w-36 object-contain"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo de Imprenta Maya"
          />
          </Link>

          <button
            type="button"
            className="rounded-lg border border-neutral-300 px-3 py-2 text-xl text-neutral-800 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <Nav isOpen={menuOpen} onNavigate={closeMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
