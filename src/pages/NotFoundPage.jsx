import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="page-container flex min-h-[620px] flex-col items-center justify-center py-20 text-center">
      <span className="text-8xl font-extrabold text-[#f2a33a] sm:text-9xl">404</span>
      <h1 className="mt-5 text-3xl font-extrabold text-[#202020]">Página no encontrada</h1>
      <p className="mt-4 max-w-xl leading-7 text-neutral-600">
        La dirección que intentaste visitar no existe dentro del portal de
        Imprenta Maya.
      </p>
      <Link className="button-primary mt-8" to="/inicio">Regresar al inicio</Link>
    </section>
  );
};

export default NotFoundPage; 
