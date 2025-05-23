'use client';

export default function ExposerPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-6 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center">Exposer SANS</h1>
      <p className="text-center max-w-2xl text-lg italic text-gray-700">
        Voici ce que vous pourriez exposer. Ce que vous ne pouvez encore voir.  
        Ce que d’autres n’ont pas pu montrer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Blocs floutés */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/cellule23.jpg"
            alt="cellule23"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/ecole-fermee.jpg"
            alt="ecole-fermee"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/silence-des-rues.jpg"
            alt="silence-des-rues"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/chambre-7.jpg"
            alt="chambre-7"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/fenetre-morte.jpg"
            alt="fenetre-morte"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/dossier8.jpg"
            alt="dossier8"
            className="w-full h-64 object-cover filter blur-sm hover:blur-none transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="max-w-xl w-full mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Galeries, commissaires, institutions</h2>
        <form
          action="https://formspree.io/f/xeogwvqb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Nom / Organisation"
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Adresse e-mail"
            className="border p-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Proposition, intention ou lieu d’exposition"
            className="border p-2 rounded h-32"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
}
