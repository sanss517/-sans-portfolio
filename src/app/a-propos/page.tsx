export default function APropos() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">À propos de SANS</h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        SANS est le nom de ceux qu'on a effacés.  
        Le nom de ceux qui n’ont pas eu le droit de signer.  
        Le nom qu’on inscrit quand on retire tout le reste.
      </p>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        Derrière chaque toile : une mémoire bâillonnée, un cri invisible.  
        Ces œuvres ne représentent rien — elles revendiquent l’absence.
      </p>
      <p className="max-w-2xl text-center text-lg leading-relaxed italic">
        SANS n’est pas un artiste.  
        C’est une résistance muette.  
        Une réponse blanche au bruit.
      </p>

      <a href="/" className="mt-6 underline text-blue-500 hover:text-black">
        ← Retour à l’accueil
      </a>
    </div>
  );
}
