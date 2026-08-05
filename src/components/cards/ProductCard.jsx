import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const quoteUrl = `/cotizacion?servicio=${encodeURIComponent(product.name)}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-60 overflow-hidden bg-neutral-100">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-extrabold tracking-[0.1em] text-[#c97820] uppercase">
          {product.category}
        </span>
        <h2 className="mt-3 text-xl font-extrabold text-[#202020]">
          {product.name}
        </h2>
        <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-600">
          {product.description}
        </p>
        <Link
          className="mt-5 inline-flex font-bold text-[#c97820] hover:underline"
          to={quoteUrl}
        >
          Solicitar cotización →
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;