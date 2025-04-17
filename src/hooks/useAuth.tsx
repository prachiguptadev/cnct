
import { useCallback, useState, useEffect } from "react";

interface AuthUser {
  isAdmin: boolean;
}

// This is a simplified auth hook. In a real application, you would connect this to a backend authentication system.
export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if there's a stored admin session in localStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem("cnct_admin_auth");
    console.log("Checking stored auth:", storedAuth);
    
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        console.log("Parsed stored auth:", parsed);
        setUser({ isAdmin: parsed.isAdmin });
      } catch (e) {
        console.error("Failed to parse stored auth", e);
        localStorage.removeItem("cnct_admin_auth");
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback((password: string): boolean => {
    // Hardcoded password for demo purposes. In a real app, this would be validated on a secure backend
    // This is NOT secure for production and is only for demonstration
    if (password === "cnct2025admin") {
      const userData = { isAdmin: true };
      console.log("Login successful, setting user data:", userData);
      setUser(userData);
      localStorage.setItem("cnct_admin_auth", JSON.stringify(userData));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    console.log("Logging out, clearing user data");
    setUser(null);
    localStorage.removeItem("cnct_admin_auth");
  }, []);

  return { user, loading, login, logout };
};
