'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const œuvres = {
  'cellule-23': {
    titre: "Cellule 23",
    image: "/cellule23.jpg",
    citation: "Je ne voulais pas mourir avec mes mots dedans.",
    texte: "Dans Cellule 23, je n’ai peint ni les murs, ni les barreaux, mais ce qu&apos;on m&apos;a interdit de dire. Cette œuvre est un silence verrouillé par les autres.",
  },
  'ecole-fermee': {
    titre: "École Fermée",
    image: "/ecole-fermee.jpg",
    citation: "La classe a été fermée. Ma pensée, jamais.",
    texte: "Ils ont retiré les livres, les mots, les fenêtres. Mais dans ce tableau, j’ai remis ce qu&apos;ils ne peuvent pas fermer : la mémoire et la pensée libre.",
  },
} as const;

type Slug = keyof typeof œuvres;

export default function PageOeuvre() {
  const params = useParams();
  const slug = params.slug as Slug;

  const œuvre = œuvres[slug];

  if (!œuvre) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <p className="text-xl font-semibold">Œuvre introuvable<br />Assure-toi que l’URL est correcte.</p>
        <Link href="/" className="mt-6 underline text-blue-500 block">
          ← Retour à l’accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans p-6 flex flex-col items-center gap-4">
      <img src={œuvre.image} alt={œuvre.titre} className="w-full max-w-2xl object-cover rounded" />
      <h1 className="text-3xl font-bold text-center">{œuvre.titre}</h1>
      <p className="italic text-center text-gray-600">&quot;{œuvre.citation}&quot;</p>
      <p className="max-w-2xl text-lg leading-relaxed text-center mt-4">{œuvre.texte}</p>

      <form
        action="https://formspree.io/f/xeogwvqb"
        method="POST"
        className="mt-8 w-full max-w-md flex flex-col gap-4"
      >
        <input type="hidden" name="message" value={`Précommande : ${œuvre.titre}`} />
        <input type="text" name="name" required placeholder="Votre nom" className="border p-2 rounded" />
        <input type="email" name="email" required placeholder="Votre email" className="border p-2 rounded" />
        <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">
          Précommander
        </button>
      </form>

      <Link href="/" className="mt-6 underline text-blue-500 hover:text-black">
        ← Retour à l’accueil
      </Link>
    </div>
  );
}
