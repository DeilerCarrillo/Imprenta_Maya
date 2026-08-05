const GalleryCard = ({ item }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-72 overflow-hidden bg-neutral-100">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-extrabold tracking-[0.1em] text-[#c97820] uppercase">
          {item.category}
        </span>
        <h2 className="mt-3 text-xl font-extrabold text-[#202020]">{item.title}</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
      </div>
    </article>
  );
};

export default GalleryCard;
