import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202020] text-neutral-300">
      <div className="page-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-5 inline-flex rounded-xl bg-white p-3">
           <img
              className="h-20 w-40 object-contain"
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Imprenta Maya"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-400">
            Soluciones gráficas e impresiones de alta calidad para empresas,
            emprendimientos, eventos y proyectos personales.
          </p>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-white">Enlaces</h2>
          <div className="flex flex-col gap-3 text-sm">
            <Link className="hover:text-[#f2a33a]" to="/servicios">Servicios</Link>
            <Link className="hover:text-[#f2a33a]" to="/catalogo">Catálogo</Link>
            <Link className="hover:text-[#f2a33a]" to="/galeria">Galería</Link>
            <Link className="hover:text-[#f2a33a]" to="/cotizacion">Cotización</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-white">Ubicación y contacto</h2>
          <p className="text-sm leading-7 text-neutral-400">
            13 y 14 calles, casa #1325, 6.ª avenida, Comayagüela, Honduras.
          </p>
          <a
            className="mt-4 block text-sm font-bold text-[#f2a33a]"
            href="tel:+50498265424"
          >
            +504 9826-5424
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="page-container py-5 text-center text-xs text-neutral-500">
          © {currentYear} Imprenta Maya. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
