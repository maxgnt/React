import { useState } from 'react';

export default function Formulaire() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [envoi, setEnvoi] = useState(false); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoi(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Tâche</h2>

      <input 
        type="text"
        placeholder="Nom de la tâche"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="flex-1 border rounded px-2 py-1 mb-4 w-full"
        required
      />

      <input 
        type="text"
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 border rounded px-2 py-1 mb-4 w-full"
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 w-full"
      >
        Ajouter
      </button>

      {envoi && (
        <p className="mt-4 text-green-600 text-center">
          ✅ Tâche ajoutée avec succès !
        </p>
      )}
    </form>
  );
}
