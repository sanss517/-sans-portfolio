'use client';

import { useState } from "react";

export default function Home() {
  const [showManifesto, setShowManifesto] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans p-4 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold tracking-tight text-center">SANS</h1>
      <p className="text-xl text-center max-w-xl italic">Les toiles du silence</p>

      <div className="w-full max-w-3xl shadow-xl rounded-2xl overflow-hidden">
        <img src="/cellule23.jpg" alt="Cellule 23" className="w-full object-cover" />
        <p className="mt-4 text-sm text-center text-gray-600 px-4">&quot;Je ne voulais pas mourir avec mes mots dedans.&quot; – Cellule 23</p>
      </div>

      <button
        onClick={() => setShowManifesto((prev) => !prev)}
        className="mt-4 px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
      >
        {showManifesto ? "Fermer le manifeste" : "Lire le manifeste"}
      </button>

      {showManifesto && (
        <div className="max-w-3xl text-left text-base leading-relaxed border-t border-gray-200 pt-6">
          <p className="mb-4">Je peins avec l&apos;absence. Chaque toile est une voix que l&apos;on a volée. Chaque blanc est un cri que personne n&apos;a entendu. Chaque matière vient d’un lieu interdit à la parole.</p>
          <p className="mb-4">Je ne crée pas des images, je trace des absences. Pas des formes, mais des silences imposés. Pas des discours, mais ce qu&apos;il en reste : l&apos;effacement.</p>
          <p className="mb-4">&quot;Les toiles du silence&quot; ne sont pas là pour séduire. Elles sont là pour exister à la place de ceux qui ne le peuvent pas. Je signe SANS, parce que je suis celui qu&apos;on a réduit au rien — mais qui parle quand même.</p>
        </div>
      )}

      <div className="max-w-3xl w-full mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Précommander une œuvre</h2>
        <form
          action="https://formspree.io/f/xeogwvqb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Votre nom"
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Votre e-mail"
            className="border p-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Message ou œuvre désirée"
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

      <footer className="mt-12 text-sm text-gray-400 text-center">
        © 2025 SANS — Tous droits réservés
      </footer>
    </div>
  );
}
