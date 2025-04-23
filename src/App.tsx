import { useState } from "react";
import Home from "./components/Home";
import Todo from "./components/Todo";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {page === "home" && <Home onStart={() => setPage("todo")} />}
      {page === "todo" && <Todo />}
    </div>
  );
}
