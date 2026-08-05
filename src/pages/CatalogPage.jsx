import ProductCard from "../components/cards/ProductCard.jsx";
import { products } from "../data/products.js";

const CatalogPage = () => {
  return (
    <>
      <section className="bg-[#f5f1e9]">
        <div className="page-container py-20">
          <span className="page-kicker">Catálogo</span>
          <h1 className="page-heading">Productos disponibles</h1>
          <p className="page-copy">
            Conoce algunos de los productos que puedes solicitar. Los precios
            dependen de la cantidad, tamaño, material, diseño y tipo de acabado.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogPage;