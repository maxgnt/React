import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<{ id: number; texte: string; fait: boolean }[]>([]);
  const [input, setInput] = useState("");

  const ajouterTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), texte: input, fait: false }]);
    setInput("");
  };

  const toggleEtat = (id: number) => {
    setTodos(
      todos.map((tache) =>
        tache.id === id ? { ...tache, fait: !tache.fait } : tache
      )
    );
  };

  const supprimerTodo = (id: number) => {
    setTodos(todos.filter((tache) => tache.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Ma Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ajouter une tâche"
        />
        <button
          onClick={ajouterTodo}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Ajouter
        </button>
      </div>

      <ul>
        {todos.map((tache) => (
          <li key={tache.id} className="flex justify-between items-center mb-2">
            <span
              className={`cursor-pointer ${tache.fait ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleEtat(tache.id)}
            >
              {tache.texte}
            </span>
            <button
              onClick={() => supprimerTodo(tache.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
