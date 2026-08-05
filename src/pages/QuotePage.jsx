import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import WhatsAppButton from "../components/buttons/WhatsAppButton.jsx";
import { serviceCategories } from "../data/services.js";

const initialForm = {
  nombre: "",
  telefono: "",
  correo: "",
  servicio: "",
  cantidad: "",
  tamano: "",
  material: "",
  acabado: "",
  fecha: "",
  descripcion: "",
};

const QuotePage = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("servicio") ?? "";
  const [form, setForm] = useState({ ...initialForm, servicio: requestedService });

  useEffect(() => {
    if (requestedService) {
      setForm((current) => ({ ...current, servicio: requestedService }));
    }
  }, [requestedService]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const whatsappMessage = useMemo(
    () => `
Hola, deseo solicitar una cotización en Imprenta Maya.

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Correo: ${form.correo}

Servicio: ${form.servicio}
Cantidad: ${form.cantidad}
Tamaño: ${form.tamano || "No especificado"}
Material: ${form.material || "No especificado"}
Acabado: ${form.acabado || "No especificado"}
Fecha aproximada: ${form.fecha || "No especificada"}

Descripción:
${form.descripcion}
    `.trim(),
    [form],
  );

  const formIsValid =
    form.nombre.trim() !== "" &&
    form.telefono.trim() !== "" &&
    form.correo.trim() !== "" &&
    form.servicio.trim() !== "" &&
    form.cantidad.trim() !== "" &&
    form.descripcion.trim() !== "";

  return (
    <>
      <section className="bg-[#202020] text-white">
        <div className="page-container py-20">
          <span className="page-kicker">Cotización</span>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Cuéntanos qué necesitas imprimir
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
            Completa los detalles principales del trabajo. La solicitud se
            preparará para enviarla directamente por WhatsApp.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid items-start gap-8 lg:grid-cols-[1fr_340px]">
          <form className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-lg sm:p-10" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="form-label" htmlFor="cotizacion-nombre">Nombre completo</label>
                <input className="form-control" id="cotizacion-nombre" name="nombre" type="text" value={form.nombre} onChange={handleChange} required />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-telefono">Teléfono</label>
                <input className="form-control" id="cotizacion-telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} required />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-correo">Correo electrónico</label>
                <input className="form-control" id="cotizacion-correo" name="correo" type="email" value={form.correo} onChange={handleChange} required />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-servicio">Servicio</label>
                <select className="form-control" id="cotizacion-servicio" name="servicio" value={form.servicio} onChange={handleChange} required>
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
                <label className="form-label" htmlFor="cotizacion-cantidad">Cantidad aproximada</label>
                <input className="form-control" id="cotizacion-cantidad" name="cantidad" type="number" min="1" value={form.cantidad} onChange={handleChange} required />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-tamano">Tamaño</label>
                <input className="form-control" id="cotizacion-tamano" name="tamano" type="text" value={form.tamano} onChange={handleChange} placeholder="Ejemplo: carta, media carta" />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-material">Material</label>
                <input className="form-control" id="cotizacion-material" name="material" type="text" value={form.material} onChange={handleChange} placeholder="Escribe el material si lo conoces" />
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-acabado">Tipo de acabado</label>
                <select className="form-control" id="cotizacion-acabado" name="acabado" value={form.acabado} onChange={handleChange}>
                  <option value="">Sin especificar</option>
                  <option value="Laminado">Laminado</option>
                  <option value="Encuadernación">Encuadernación</option>
                  <option value="Troquelado">Troquelado</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="cotizacion-fecha">Fecha aproximada</label>
                <input className="form-control" id="cotizacion-fecha" name="fecha" type="date" value={form.fecha} onChange={handleChange} />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="cotizacion-descripcion">Descripción del trabajo</label>
                <textarea className="form-control resize-y" id="cotizacion-descripcion" name="descripcion" rows="6" value={form.descripcion} onChange={handleChange} placeholder="Describe colores, diseño, contenido u otra información importante." required />
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-neutral-500">
              Después de abrir WhatsApp podrás adjuntar fotografías, diseños o
              documentos relacionados con el trabajo.
            </p>

            <WhatsAppButton
              message={whatsappMessage}
              className="mt-6 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!formIsValid}
            >
              Enviar solicitud por WhatsApp
            </WhatsAppButton>
          </form>

          <aside className="rounded-3xl bg-[#f5f1e9] p-8 lg:sticky lg:top-28">
            <span className="page-kicker">Recomendaciones</span>
            <h2 className="text-2xl font-extrabold text-[#202020]">
              Incluye todos los detalles posibles
            </h2>
            <ul className="mt-6 flex flex-col gap-4 text-sm leading-6 text-neutral-700">
              <li>• Producto o servicio requerido.</li>
              <li>• Cantidad aproximada.</li>
              <li>• Tamaño del producto.</li>
              <li>• Colores o diseño.</li>
              <li>• Material deseado.</li>
              <li>• Tipo de acabado.</li>
              <li>• Fecha aproximada de entrega.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};

export default QuotePage; 

