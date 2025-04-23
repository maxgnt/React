import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Todo from './components/Todo';
import Formulaire from './components/Formulaire';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/formulaire" element={<Formulaire />} />
      </Routes>
    </div>
  );
}
