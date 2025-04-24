import Todo from "./Todo";
import { useState } from "react";
import Formulaire from "./Formulaire";
 
export default function Home() {
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  return (
    <div className="p-4">
    <h1 className="text-2xl font bold text-center mb-4">
    Bienveue dans vos Todo
    </h1>

<div className="text-center mb-6">
<button onClick={() => setAfficherFormulaire   (!afficherFormulaire)} className="bg-black text-white px-4 py-2 rounded">

  {afficherFormulaire ? "Fermer le fomulaire" : "Ajouter une tâche"}
</button>
</div>
{afficherFormulaire && <Formulaire />}
<Todo />

</div>
  );
}
