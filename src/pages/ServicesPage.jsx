import { Link } from "react-router";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import { serviceCategories } from "../data/services.js";

const ServicesPage = () => {
  return (
    <>
      <section className="bg-[#202020] text-white">
        <div className="page-container py-20">
          <span className="page-kicker">Nuestros servicios</span>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Soluciones de impresión, diseño y acabados
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
            Ofrecemos diferentes opciones para empresas, negocios,
            emprendimientos, instituciones, eventos y proyectos personales.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-7 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="page-container">
          <div className="rounded-3xl bg-[#f5f1e9] px-8 py-12 text-center">
            <span className="page-kicker">Atención personalizada</span>
            <h2 className="text-3xl font-extrabold text-[#202020]">
              ¿No encuentras exactamente lo que necesitas?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
              Describe tu proyecto en el formulario y selecciona el servicio que
              más se aproxima a tu solicitud.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link className="button-primary" to="/cotizacion">
                Solicitar cotización
              </Link>
              <Link className="button-outline" to="/contacto">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;