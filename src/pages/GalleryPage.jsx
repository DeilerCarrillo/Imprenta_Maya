import GalleryCard from "../components/cards/GalleryCard.jsx";
import { galleryItems } from "../data/gallery.js";

const GalleryPage = () => {
  return (
    <>
      <section className="bg-[#202020] text-white">
        <div className="page-container py-20">
          <span className="page-kicker">Galería</span>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Trabajos realizados
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
            En esta sección mostramos fotografías reales de productos y trabajos
            elaborados por Imprenta Maya.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;