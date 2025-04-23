export default function Home({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans votre Todo List</h1>
      <p className="mb-6 text-lg">Organise tes tâches efficacement </p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Commencer
      </button>
    </div>
  );
}
