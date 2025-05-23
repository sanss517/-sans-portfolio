'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showManifesto, setShowManifesto] = useState(false);
  const [précommandeTitre, setPrécommandeTitre] = useState("");

  const œuvres = [
    {
      titre: "Cellule 23",
      image: "/cellule23.jpg",
      citation: "Je ne voulais pas mourir avec mes mots dedans.",
    },
    {
      titre: "École Fermée",
      image: "/ecole-fermee.jpg",
      citation: "La classe a été fermée. Ma pensée, jamais.",
    },
    {
      titre: "Silence des Rues",
      image: "/silence-des-rues.jpg",
      citation: "Même les murs ont oublié le bruit.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans p-4 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold tracking-tight text-center">SANS</h1>
      <p className="text-xl text-center max-w-xl italic">Les toiles du silence</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
        {œuvres.map((œuvre, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="shadow-xl rounded-2xl overflow-hidden bg-white border flex flex-col transform transition duration-300 hover:scale-105"
          >
            <img src={œuvre.image} alt={œuvre.titre} className="w-full object-cover h-72" />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h2 className="text-xl font-semibold text-center">{œuvre.titre}</h2>
              <p className="text-sm text-gray-600 text-center italic">&quot;{œuvre.citation}&quot;</p>
              <button
                onClick={() => {
                  setPrécommandeTitre(œuvre.titre);
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="mt-4 border border-black rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition mx-auto"
              >
                Précommander
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setShowManifesto((prev) => !prev)}
        className="mt-8 px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
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

      <div className="max-w-3xl w-full mt-12 border-t border-gray-200 pt-6">
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
            value={précommandeTitre}
            onChange={(e) => setPrécommandeTitre(e.target.value)}
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
