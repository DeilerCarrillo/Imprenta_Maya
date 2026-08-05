import { Link } from "react-router";

const ServiceCard = ({ number, title, description, services }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[#202020] text-sm font-extrabold text-[#f2a33a]">
        {number}
      </div>

      <h2 className="text-xl font-extrabold text-[#202020]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {services.map((service) => (
          <li
            className="flex items-start gap-3 text-sm text-neutral-700"
            key={service}
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f2a33a]" />
            {service}
          </li>
        ))}
      </ul>

      <Link
        className="mt-7 font-bold text-[#c97820] hover:underline"
        to="/cotizacion"
      >
        Solicitar cotización →
      </Link>
    </article>
  );
};

export default ServiceCard;