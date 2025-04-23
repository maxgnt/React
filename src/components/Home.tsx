export default function Home({
  onStart,
  onForm,
}: {
  onStart: () => void;
  onForm: () => void;
}) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenue </h1>
      <p className="mb-6 text-lg">Choisis une action :</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onStart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
         Mes Todo
        </button>

        <button
          onClick={onForm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ajouter une Todo
        </button>
      </div>
    </div>
  );
}
