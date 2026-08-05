import { Link } from "react-router";

const serviceSummary = [
  {
    number: "01",
    title: "Impresión Corporativa",
    text: "Tarjetas de presentación, facturas, carpetas, hojas membretadas y talonarios.",
  },
  {
    number: "02",
    title: "Papelería",
    text: "Volantes, folletos, catálogos y banners para promocionar productos y servicios.",
  },
  {
    number: "03",
    title: "Diseño y Acabados",
    text: "Diseño gráfico, encuadernación, laminado y troquelado.",
  },
];

const HomePage = () => {
  return (
    <>
      <section className="bg-[#202020] text-white">
        <div className="page-container grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-5 inline-block rounded-full border border-[#f2a33a]/40 bg-[#f2a33a]/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#f2a33a] uppercase">
              Artes gráficas e impresión digital
            </span>

            <h1 className="max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Soluciones gráficas e impresiones de alta calidad
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300">
              Creamos productos de impresión corporativa, papelería
              publicitaria, diseños personalizados y acabados para dar una
              presentación profesional a cada proyecto.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button-primary" to="/cotizacion">
                Solicitar cotización
              </Link>
              <Link className="button-secondary" to="/galeria">
                Ver trabajos realizados
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-5 -left-5 h-28 w-28 rounded-full bg-[#f2a33a]/20 blur-2xl" />
            <img
              className="relative h-[460px] w-full rounded-3xl object-cover shadow-2xl"
              src="/local-imprenta.png"
              alt="Fachada de Imprenta Maya"
            />
            <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur">
              <strong className="block text-lg text-[#f2a33a]">Imprenta Maya</strong>
              <span className="mt-1 block text-sm text-neutral-300">
                13 y 14 calles, 6.ª avenida, Comayagüela.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <span className="page-kicker">Servicios principales</span>
          <h2 className="page-heading">Todo lo necesario para presentar tus ideas</h2>
          <p className="page-copy">
            Atendemos solicitudes de empresas, emprendimientos, instituciones,
            eventos y clientes particulares.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceSummary.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#202020] text-sm font-extrabold text-[#f2a33a]">
                  {service.number}
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-[#202020]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link className="button-primary" to="/servicios">
              Conocer todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e9]">
        <div className="page-container page-section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="page-kicker">Trabajos realizados</span>
            <h2 className="page-heading">Conoce la calidad de nuestros productos</h2>
            <p className="page-copy">
              En la galería encontrarás fotografías reales de trabajos elaborados
              por Imprenta Maya, incluyendo productos corporativos, papelería y
              diferentes acabados.
            </p>
            <Link className="button-primary mt-7" to="/galeria">
              Ver galería
            </Link>
          </div>

          <div className="rounded-3xl bg-[#303030] p-8 text-white shadow-xl">
            <img
              className="mx-auto h-56 w-full object-contain"
              src="/logo.png"
              alt="Logo de Imprenta Maya"
            />
            <p className="mt-6 text-center leading-7 text-neutral-300">
              Creatividad, impresión y acabados para convertir cada idea en un
              producto visualmente profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-[#303030] px-8 py-12 text-white md:flex-row md:items-center lg:px-14">
            <div>
              <span className="mb-3 block text-xs font-bold tracking-[0.15em] text-[#f2a33a] uppercase">
                Atención personalizada
              </span>
              <h2 className="text-3xl font-extrabold">¿Tienes un proyecto de impresión?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-neutral-300">
                Envíanos el tipo de producto, la cantidad y los detalles
                principales para preparar tu solicitud.
              </p>
            </div>
            <Link className="button-primary shrink-0" to="/cotizacion">
              Comenzar cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
