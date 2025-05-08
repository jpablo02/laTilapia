import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title className="min-h-screen bg-black text-white font-sans">Aeronotiqz - Your musical events portal</title>
        <meta name="description" content="Descubre los próximos conciertos, festivales y experiencias musicales en tu ciudad." />
      </Head>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Hero */}
        <section className="relative bg-[url('/concert-bg.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center text-center">
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />

          <title className="min-h-screen bg-black text-white font-sans">Aeronotiqz- Your musical events portal</title>
          <meta name="description" content="Descubre los próximos conciertos, festivales y experiencias musicales en tu ciudad." />




          <div className="z-10 max-w-2xl px-6">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Feel the music. Live the experience.
            </h1>
            <p className="text-lg mb-6 text-gray-300">
            Explore exclusive concerts, festivals, and events in real time.
            </p>
            <a
              href="#eventos"
              className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-white font-medium text-lg"
            >
              View events
            </a>
          </div>
        </section>

        {/* Eventos destacados */}
        <section id="eventos" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Eventos destacados</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {[1, 2, 3].map((event, i) => (
              <div key={i} className="bg-[#1a1a1a] p-5 rounded-2xl hover:shadow-lg transition">
                <Image
                  src={`/event${i + 1}.jpg`}
                  alt={`Evento ${i + 1}`}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <h3 className="text-xl font-semibold mb-1">Event name {i + 1}</h3>
                <p className="text-sm text-gray-400">Date and place</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} Aeronotiqz. All rights reserved.
        </footer>
      </div>
    </>
  );
}
