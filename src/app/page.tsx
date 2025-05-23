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
        <p className="mt-4 text-sm text-center text-gray-600 px-4">"Je ne voulais pas mourir avec mes mots dedans." – Cellule 23</p>
      </div>

      <button
        onClick={() => setShowManifesto((prev) => !prev)}
        className="mt-4 px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
      >
        {showManifesto ? "Fermer le manifeste" : "Lire le manifeste"}
      </button>

      {showManifesto && (
        <div className="max-w-3xl text-left text-base leading-relaxed border-t border-gray-200 pt-6">
          <p className="mb-4">Je peins avec l'absence. Chaque toile est une voix que l'on a volée. Chaque blanc est un cri que personne n'a entendu. Chaque matière vient d’un lieu interdit à la parole.</p>
          <p className="mb-4">Je ne crée pas des images, je trace des absences. Pas des formes, mais des silences imposés. Pas des discours, mais ce qu’il en reste : l’effacement.</p>
          <p className="mb-4">\"Les toiles du silence\" ne sont pas là pour séduire. Elles sont là pour exister à la place de ceux qui ne le peuvent pas. Je signe SANS, parce que je suis celui qu’on a réduit au rien — mais qui parle quand même.</p>
        </div>
      )}

      <footer className="mt-12 text-sm text-gray-400 text-center">
        © 2025 SANS — Tous droits réservés
      </footer>
    </div>
  );
}
