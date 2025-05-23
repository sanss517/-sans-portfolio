'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const œuvres = {
  "cellule-23": {
    titre: "Cellule 23",
    date: "10 mars 2017",
    image: "/cellule23.jpg",
    citation: "Je ne voulais pas mourir avec mes mots dedans.",
    texte: "Dans Cellule 23, je n’ai peint ni les murs, ni les barreaux, mais ce qu'on m'a interdit de dire. Cette œuvre est un silence verrouillé par les autres."
  },
  "ecole-fermee": {
    titre: "École Fermée",
    date: "17 mai 2014",
    image: "/ecole-fermee.jpg",
    citation: "La classe a été fermée. Ma pensée, jamais.",
    texte: "Ils ont retiré les livres, les mots, les fenêtres. Mais dans ce tableau, j’ai remis ce qu'ils ne peuvent pas fermer : la mémoire et la pensée libre."
  },
  "silence-des-rues": {
    titre: "Silence des Rues",
    date: "5 août 1998",
    image: "/silence-des-rues.jpg",
    citation: "Même les murs ont oublié le bruit.",
    texte: "Ce tableau est fait d’asphalte muet et de lampadaires sans témoin. La rue n’a pas d’oreilles, et moi, je lui ai rendu une voix sans son."
  },
  "chambre-7": {
    titre: "Chambre 7",
    date: "3 novembre 1993",
    image: "/chambre-7.jpg",
    citation: "L’oubli est la couleur des murs.",
    texte: "Dans Chambre 7, je n’ai pas peint un lieu, mais une disparition. L’endroit existe encore, mais personne ne sait plus qui y a dormi."
  },
  "fenetre-morte": {
    titre: "Fenêtre Morte",
    date: "27 décembre 1990",
    image: "/fenetre-morte.jpg",
    citation: "Une ouverture sur rien.",
    texte: "Cette fenêtre ne donne sur aucun dehors. C’est une vue sur l’intérieur d’un silence. L’extérieur est vide, et l’intérieur a été volé."
  },
  "dossier-8": {
    titre: "Dossier 8",
    date: "31 août 2008",
    image: "/dossier8.jpg",
    citation: "On a classé ma vie dans une chemise sans nom.",
    texte: "Dossier 8 contient des documents qu’on ne lit jamais. Ce tableau, c’est leur bruit. Papier muet. Encre sans mémoire."
  },
  "tableau-efface": {
    titre: "Tableau Effacé",
    date: "16 janvier 1999",
    image: "/tableau-efface.jpg",
    citation: "Ce que j’avais à dire a été peint. Puis gratté.",
    texte: "Ce tableau était plein. Il ne reste que les traces. L’effacement est un acte de parole ici. Une résistance en creux."
  },
  "visage-flou": {
    titre: "Visage Flou",
    date: "29 février 2004",
    image: "/visage-flou.jpg",
    citation: "J’étais là, mais vous m’avez mal vu.",
    texte: "Le visage n’est pas absent. Il est rendu invisible par l’indifférence. Ce flou est la netteté de ma disparition."
  },
  "silence-admis": {
    titre: "Silence Admis",
    date: "20 novembre 2013",
    image: "/silence-admis.jpg",
    citation: "Le silence est devenu ma réponse officielle.",
    texte: "Le silence ici n’est pas une absence de mots, c’est un refus de parler pour rien. L’admission, c’est l’acceptation imposée."
  },
  "voix-blanche": {
    titre: "Voix Blanche",
    date: "1 avril 2013",
    image: "/voix-blanche.jpg",
    citation: "Je crie, mais le son tombe en poudre.",
    texte: "Cette œuvre est un cri dont le volume a été coupé. L’écho existe dans les yeux, pas dans les oreilles."
  },
  "archives-brulees": {
    titre: "Archives Brûlées",
    date: "8 juillet 2003",
    image: "/archives-brulees.jpg",
    citation: "Ils ont brûlé les papiers. Pas les souvenirs.",
    texte: "Les cendres ne mentent pas. Même si les documents sont partis, la mémoire noire reste inscrite dans la toile."
  },
  "matelas-vide": {
    titre: "Matelas Vide",
    date: "2 juin 2013",
    image: "/matelas-vide.jpg",
    citation: "Un corps était là. L’histoire est partie.",
    texte: "Ce n’est pas une absence. C’est un départ sans explication. Le matelas garde l’empreinte, mais pas le nom."
  },
  "cour-sans-cloche": {
    titre: "Cour Sans Cloche",
    date: "31 mars 2001",
    image: "/cour-sans-cloche.jpg",
    citation: "L’heure ne sonne plus. L’oubli a remplacé la récré.",
    texte: "Une cour vide, sans enfants ni sonnerie. Juste l’oubli des cris, et le silence des jeux qu’on n’a pas eus."
  },
  "photo-tournee": {
    titre: "Photo Tournée",
    date: "23 juillet 2014",
    image: "/photo-tournee.jpg",
    citation: "On a retourné la preuve contre le mur.",
    texte: "Ce tableau est une preuve retournée. Ce qu’on ne veut plus voir, je l’ai montré en ne le montrant pas."
  },
  "lumiere-muette": {
    titre: "Lumière Muette",
    date: "16 novembre 2018",
    image: "/lumiere-muette.jpg",
    citation: "Même la lumière a baissé les yeux.",
    texte: "Une lumière qui ne révèle rien. Qui éclaire sans témoigner. Cette œuvre est une scène sans projecteur, mais pas sans vérité."
  }
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
      <p className="text-md text-black font-medium text-center">{œuvre.date}</p>
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
