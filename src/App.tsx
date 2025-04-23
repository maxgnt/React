import { useState } from "react";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Formulaire from "./components/Formulaire"; 

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {page === "home" && (
        <Home
          onStart={() => setPage("todo")}
          onForm={() => setPage("formulaire")}
        />
      )}
      {page === "todo" && <Todo />}
      {page === "formulaire" && <Formulaire />}
    </div>
  );
}
