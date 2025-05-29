'use client';

import Link from 'next/link';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">À propos de SANS</h1>
      <p className="max-w-3xl text-center text-lg leading-relaxed">
        <strong>SANS</strong>, c’est le cri de ceux qui n’ont pas eu le droit de parler. 
        C’est l’encre d’un nom refusé. C’est le silence qu’on a transformé en matière.
      </p>
      <p className="max-w-3xl text-center text-lg leading-relaxed">
        Chaque œuvre est née d’un lieu d’effacement : un couloir oublié, une salle condamnée, une mémoire évacuée.
        SANS ne peint pas pour décorer. Il peint pour dire ce qu’on a empêché.
      </p>
      <p className="max-w-3xl text-center text-lg leading-relaxed italic">
        Il n’y a pas d’artiste ici, seulement des traces.  
        SANS est une absence devenue visible.  
        Une réponse blanche à l’interdiction de témoigner.
      </p>
      <p className="max-w-3xl text-center text-base text-gray-600 italic">
        Les œuvres ne cherchent pas à plaire, elles réclament d’exister.
        Chaque toile est un acte de résistance.
      </p>
      <Link href="/" className="mt-6 underline text-blue-500 hover:text-black">
        ← Retour à l’accueil
      </Link>
    </div>
  );
}
