import { useState } from "react";
import initialTodos from "../data/todos";

export default function Todo() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleEtat = (id: number) => {
    setTodos(
      todos.map((tache) =>
        tache.id === id ? { ...tache, completed: !tache.completed } : tache
      )
    );
  };

  const modifierTache = (id: number, champ: string, valeur: string) => {
    setTodos(
      todos.map((tache) =>
        tache.id === id ? { ...tache, [champ]: valeur } : tache
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-6"> Mes Todos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((tache) => (
          <div
            key={tache.id}
            className="border rounded p-3 bg-white shadow text-sm space-y-2"
          >
         
            <input
              type="text"
              value={tache.title}
              onChange={(e) =>
                modifierTache(tache.id, "title", e.target.value)
              }
              className="font-semibold w-full border-b pb-1 outline-none text-base"
            />

          
            <textarea
              value={tache.description}
              onChange={(e) =>
                modifierTache(tache.id, "description", e.target.value)
              }
              className="w-full border rounded p-1 text-sm"
              rows={2}
            />

           
            <div>
              <label className="font-semibold mr-1">Priorité :</label>
              <select
                value={tache.priority}
                onChange={(e) =>
                  modifierTache(tache.id, "priority", e.target.value)
                }
                className="border rounded px-2 py-0.5"
              >
                <option value="low">Basse</option>
                <option value="medium">Moyenne</option>
                <option value="high">Haute</option>
              </select>
            </div>

          
            <div>
              <label className="font-semibold mr-1">Date limite :</label>
              <input
                type="date"
                value={tache.dueDate}
                onChange={(e) =>
                  modifierTache(tache.id, "dueDate", e.target.value)
                }
                className="border rounded px-2 py-0.5"
              />
            </div>

           
            <div>
              <span className="font-semibold">Catégorie :</span> {tache.category}
            </div>

        
            <div>
              <span className="font-semibold">Tags :</span>{" "}
              {tache.tags.join(", ")}
            </div>

           
            <button
              onClick={() => toggleEtat(tache.id)}
              className={`w-full mt-2 px-2 py-1 rounded text-white text-sm ${
                tache.completed ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {tache.completed ? "Terminée" : "A faire"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
