import { Link } from "react-router";

const values = [
  {
    number: "01",
    title: "Calidad",
    description: "Cuidamos la presentación y terminación de cada producto impreso.",
  },
  {
    number: "02",
    title: "Responsabilidad",
    description: "Trabajamos de acuerdo con las características acordadas con el cliente.",
  },
  {
    number: "03",
    title: "Creatividad",
    description: "Buscamos soluciones gráficas adecuadas para cada tipo de proyecto.",
  },
  {
    number: "04",
    title: "Atención",
    description: "Escuchamos las necesidades del cliente antes de preparar cada solicitud.",
  },
];

const AboutPage = () => {
  return (
    <>
      <section className="bg-[#f5f1e9]">
        <div className="page-container grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="page-kicker">Nosotros</span>
            <h1 className="page-heading">Conoce Imprenta Maya</h1>
            <p className="page-copy">
              Imprenta Maya es una empresa dedicada a ofrecer soluciones
              gráficas, productos de impresión corporativa, papelería, diseño
              gráfico y diferentes tipos de acabados.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-600">
              Nuestro propósito es ayudar a personas, empresas y emprendimientos
              a presentar sus ideas, información, productos y servicios mediante
              materiales impresos profesionales.
            </p>
            <Link className="button-primary mt-8" to="/contacto">
              Comunícate con nosotros
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <img className="mx-auto h-72 w-full object-contain" src="/logo.png" alt="Logo de Imprenta Maya" />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#202020] p-9 text-white">
            <span className="text-xs font-bold tracking-[0.15em] text-[#f2a33a] uppercase">
              Lo que hacemos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold">Soluciones para diferentes necesidades</h2>
            <p className="mt-5 leading-8 text-neutral-300">
              Elaboramos tarjetas de presentación, facturas, carpetas, hojas
              membretadas, talonarios, volantes, folletos, catálogos y banners.
            </p>
            <p className="mt-4 leading-8 text-neutral-300">
              También ofrecemos diseño gráfico, encuadernación, laminado y
              troquelado para complementar la presentación final de los trabajos.
            </p>
          </article>

          <article className="overflow-hidden rounded-3xl">
            <img className="h-full min-h-96 w-full object-cover" src="/local-imprenta.png" alt="Fachada de Imprenta Maya" />
          </article>
        </div>
      </section>

      <section className="bg-[#f5f1e9]">
        <div className="page-container page-section">
          <span className="page-kicker">Nuestra forma de trabajar</span>
          <h2 className="page-heading">Valores que orientan el servicio</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article className="rounded-2xl bg-white p-7 shadow-sm" key={value.number}>
                <span className="font-extrabold text-[#f2a33a]">{value.number}</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#202020]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;