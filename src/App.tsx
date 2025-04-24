import { Routes, Route, Navigate } from 'react-router';
import Login from './components/Login';
import Home from './components/Home';
import Todo from './components/Todo';
import Formulaire from './components/Formulaire';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/login" element={<Login />} />
       <Route
  path="/app"
  element={
    <h1 className="text-center text-2xl mt-10">
      Bienvenue dans votre application de Todo
    </h1>
  }
/>

      </Routes>
    </div>
  );
}
