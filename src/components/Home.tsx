import { Link } from "react-router";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
      <p className="mb-6 text-lg">Je souhaite...</p>

      <div className="flex justify-center gap-4">
        <Link
          to="/todo"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Voir mes Todo
        </Link>
        <Link
          to="/formulaire"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ajouter une Todo
        </Link>
      </div>
    </div>
  );
}
