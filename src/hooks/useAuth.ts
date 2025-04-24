import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username: string, password: string): Promise<boolean> => {
    if (password === "password") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return { login, isAuthenticated };
};
