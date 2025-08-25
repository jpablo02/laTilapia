import Image from "next/image";
import Head from "next/head";

export default function Home() {
  // Solo las imágenes
  const eventos = ["/t1.jpeg", "/t2.jpeg", "/t3.jpeg"];

  // Simulación del proceso del pescado
  // const proceso = [
  //   {
  //     step: "🐟 Siembra",
  //     date: "01 Ene 2025",
  //     hash: "0x9f8a7b3c1d...",
  //   },
  //   {
  //     step: "🌱 Crecimiento",
  //     date: "01 Feb 2025",
  //     hash: "0x7e4c9d1a5b...",
  //   },
  //   {
  //     step: "🎣 Cosecha",
  //     date: "01 Mar 2025",
  //     hash: "0xb2a93c8f0e...",
  //   },
  //   {
  //     step: "🚚 Entrega",
  //     date: "05 Mar 2025",
  //     hash: "0x4c8f7d2a1e...",
  //   },
  // ];

  // Siembras registradas en blockchain (con links a Arbiscan)
  const siembras = [
    {
      id: 1,
      fechaSiembra: "01 Jul 2025",
      cantidad: 500,
      fechaCosecha: "15 Ene 2026",
      link: "https://sepolia.arbiscan.io/tx/0x998a2816b301bda9cf0470e3656eb5caeab0163bbe0d2897f8e698d14643def7#eventlog",
    },
    {
      id: 2,
      fechaSiembra: "01 Ago 2025",
      cantidad: 700,
      fechaCosecha: "30 Feb 2026",
      link: "https://sepolia.arbiscan.io/tx/0x5de276a5d5d00c2788e324026d3712a73d23b27e0907d1edecb4908a2fa8ce73#eventlog",
    },
  ];

  return (
    <>
      <Head>
        <title>Tilapia fresca - Demo Blockchain</title>
        <meta
          name="description"
          content="Tilapia roja fresca, directamente del estanque a tu mesa. Ahora con trazabilidad blockchain."
        />
      </Head>

      <div className="min-h-screen bg-[var(--primary)] text-[var(--foreground)] font-sans">
        {/* Hero */}
        <section className="relative h-[90vh] flex items-center justify-center text-center bg-[var(--primary)]">
          <div className="bg-[var(--foreground)] bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />

          <div className="z-10 max-w-2xl px-6 bg-[var(--secondary)] rounded-2xl p-6 text-[var(--card)]">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Tilapia roja 100 % fresca, del estanque a tu mesa.
            </h1>

            <a
              href="#siembras"
              className="inline-block bg-[var(--foreground)] hover:opacity-80 transition px-6 py-3 rounded-full text-[var(--background)] font-medium text-lg"
            >
              Siembras Activas
            </a>
          </div>
        </section>

        {/* Eventos destacados */}
        <section
          id="eventos"
          className="py-20 px-6 max-w-6xl mx-auto bg-[var(--primary)]"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-[var(--secondary)]">
            Somos productores directos
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
            {eventos.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl hover:shadow-lg transition"
              >
                <Image
                  src={src}
                  alt={`Evento ${i + 1}`}
                  width={500}
                  height={300}
                  className="rounded-2xl object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Proceso del pescado */}
        {/* <section
          id="proceso"
          className="py-20 px-6 max-w-4xl mx-auto bg-[var(--background)] rounded-2xl shadow-md"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Proceso del pescado
          </h2>

          <div className="space-y-8">
            {proceso.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 bg-[var(--card)] p-5 rounded-xl shadow-sm"
              >
                <div className="text-3xl">{item.step.split(" ")[0]}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.step}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.date}</p>
                  <p className="text-xs font-mono text-[var(--foreground)] opacity-70">
                    Hash: {item.hash}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Siembras en blockchain */}
        <section
          id="siembras"
          className="py-20 px-6 max-w-5xl mx-auto bg-[var(--primary)]"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-[var(--secondary)]">
            Siembras activas
          </h2>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
            {siembras.map((s) => (
              <div
                key={s.id}
                className="bg-[var(--background)] rounded-2xl p-6 shadow-md border border-[var(--foreground)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Siembra #{s.id}
                  </h3>
                  <p>📅 Fecha de siembra: {s.fechaSiembra}</p>
                  <p>🐟 Cantidad de peces: {s.cantidad}</p>
                  <p>🌱 Fecha estimada de cosecha: {s.fechaCosecha}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm mt-2 inline-block"
                  >
                    🔗 Seguimiento de siembra
                  </a>
                </div>

                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/573225502972?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20tilapia%20de%20la%20siembra%20${encodeURIComponent(
                    s.fechaSiembra
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                >
                  Hacer pedido
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-[var(--secondary)] border-t border-[var(--foreground)]">
          © {new Date().getFullYear()} La tilapia. Derechos reservados.
        </footer>
      </div>
    </>
  );
}
