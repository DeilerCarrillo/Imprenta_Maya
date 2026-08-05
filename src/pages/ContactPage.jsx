import { useState } from "react";
import WhatsAppButton from "../components/buttons/WhatsAppButton.jsx";
import { serviceCategories } from "../data/services.js";

const initialForm = {
  nombre: "",
  telefono: "",
  correo: "",
  servicio: "",
  mensaje: "",
};

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const whatsappMessage = `
Hola, deseo comunicarme con Imprenta Maya.

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Correo: ${form.correo}
Servicio de interés: ${form.servicio}

Mensaje:
${form.mensaje}
  `.trim();

  const address =
    "13 y 14 calles, casa #1325, 6ª avenida, Comayagüela, Honduras";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const formIsValid = Object.values(form).every((value) => value.trim() !== "");

  return (
    <>
      <section className="bg-[#f5f1e9]">
        <div className="page-container py-16">
          <span className="page-kicker">Contacto</span>
          <h1 className="page-heading">Comunícate con Imprenta Maya</h1>
          <p className="page-copy">
            Consulta nuestros servicios o envíanos los datos principales del
            trabajo que deseas realizar.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid overflow-hidden rounded-3xl bg-[#202020] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-white">
            <img className="h-80 w-full object-cover lg:h-[430px]" src="/local-imprenta.png" alt="Fachada de Imprenta Maya" />
            <div className="p-8">
              <span className="text-xs font-bold tracking-[0.14em] text-[#f2a33a] uppercase">Visítanos</span>
              <h2 className="mt-4 text-2xl font-extrabold">Ubicación y contacto</h2>
              <p className="mt-5 leading-7 text-neutral-300">
                13 y 14 calles, casa #1325, 6.ª avenida, Comayagüela, Honduras.
              </p>
              <a className="mt-5 block font-extrabold text-[#f2a33a]" href="tel:+50498265424">
                +504 9826-5424
              </a>
              <a className="mt-5 inline-block text-sm font-bold text-white hover:underline" href={mapUrl} target="_blank" rel="noreferrer">
                Abrir ubicación en Google Maps →
              </a>
            </div>
          </div>

          <div className="bg-white p-7 sm:p-10 lg:p-12">
            <span className="page-kicker">Formulario</span>
            <h2 className="text-3xl font-extrabold text-[#202020]">Envíanos un mensaje</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Selecciona el servicio de interés y completa tus datos.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label className="form-label" htmlFor="contacto-nombre">Nombre completo</label>
                <input className="form-control" id="contacto-nombre" name="nombre" type="text" value={form.nombre} onChange={handleChange} required />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="form-label" htmlFor="contacto-telefono">Teléfono</label>
                  <input className="form-control" id="contacto-telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="contacto-correo">Correo</label>
                  <input className="form-control" id="contacto-correo" name="correo" type="email" value={form.correo} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="contacto-servicio">Servicio</label>
                <select className="form-control" id="contacto-servicio" name="servicio" value={form.servicio} onChange={handleChange} required>
                  <option value="">Selecciona un servicio</option>
                  {serviceCategories.map((category) => (
                    <optgroup key={category.id} label={category.title}>
                      {category.services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="contacto-mensaje">Mensaje</label>
                <textarea className="form-control resize-y" id="contacto-mensaje" name="mensaje" rows="5" value={form.mensaje} onChange={handleChange} placeholder="Escribe brevemente lo que necesitas." required />
              </div>

              <WhatsAppButton message={whatsappMessage} className="mt-2 disabled:cursor-not-allowed disabled:opacity-50" disabled={!formIsValid}>
                Enviar mensaje por WhatsApp
              </WhatsAppButton>

              {!formIsValid && (
                <p className="text-xs text-neutral-500">
                  Completa todos los campos antes de enviar el mensaje.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage; 
