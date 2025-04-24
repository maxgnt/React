import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [ error, setError] = useState ("");
 const [isLoading, setIsLoading] = useState(false);

 const { login, isAuthenticated } = useAuth();
 const navigate = useNavigate();

 useEffect (() => {
    if (isAuthenticated) {
        navigate("/Home");
    }
 }, [isAuthenticated, navigate]);

 const handleSubmit = async (e: React.formEvent) => {
    e.preventDefault ();

    if (!username.trim ()) {
        setError ("Veuillez rentrer un nom d'utilisateur");
        return;
    }

    if (!password) {
        setError ("Veuillez rentrer un mot de passe");
        return;
    }

    try {
        const success = await login (username, password);

        if (ssucess) {
            navigate ('/app');

        }
        else {
            setError ("Mot de passe incorrect, essayez avec : password");
        }
    } catch (err) {
        setError("Une erreur s'est produite lors de la connexion");
        console.error(err);
    } finally {
        setIsLoading(false);
    }
 };

 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">Connexion</h2>
          <p className="text-center text-sm text-gray-600 p-4">
            Entrez un nom d'utilisateur libre et le mot de passe <strong>password</strong>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />
            <input
              type="text" 
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white py-2 rounded hover:bg-gray-500 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;