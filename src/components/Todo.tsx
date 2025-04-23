import todos from "../data/todos";

export default function Todo() {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center"> Liste des Todo</h2>

      <ul className="space-y-4">
        {todos.map((tache) => (
          <li key={tache.id} className="border rounded p-4 hover:shadow">
            <h3 className="text-lg font-semibold">{tache.title}</h3>
            <p className="text-sm text-gray-600">{tache.description}</p>
            <div className="text-sm text-gray-500 mt-2">
              <strong>Catégorie :</strong> {tache.category} |{" "}
              <strong>Priorité :</strong> {tache.priority} |{" "}
              <strong>Date :</strong> {tache.dueDate}
            </div>
            <div className="mt-2 text-sm">
              {tache.completed ? (
                <span className="text-green-600 font-semibold"> Fait</span>
              ) : (
                <span className="text-red-600 font-semibold"> À faire</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
