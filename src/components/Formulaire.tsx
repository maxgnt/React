import { useState } from 'react';

export default function Formulaire() {
    const [nom, setNomtache] = useState('');
    const [description, setDescription] = useState('');
    const [todo, setTodos] = useState(Data);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir le comportement par défaut du formulaire (evite ke rechargement de la page)
        setEnvoi(true); 
      };

return (

    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-center">Tâche</h2>
<input 
type="text"
placeholder="Nom de la tâche"
value={nom}
onChange={(e) => setNomtache(e.target.value)}
className="flex-1 border rounded px-2 py-1"
required
/>


<input 
type="description"
placeholder="Description de la tâche"
value={description}
onChange={(e) => setDescription(e.target.value)}
className="flex-1 border rounded px-2 py-1"
required
/>
<button
type="submit"
className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 p-2 m-2"
>
    Ajouter
</button>
</form>
);
}   

