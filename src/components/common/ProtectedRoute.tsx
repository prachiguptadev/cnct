
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    console.log("Protected Route - Auth state:", { user, loading });
    if (!loading) {
      setIsAuthenticated(!!user?.isAdmin);
    }
  }, [user, loading]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (isAuthenticated === false) {
    console.log("Not authenticated, redirecting to login");
    return <Navigate to="/admin/secret/login" />;
  }

  console.log("Authenticated, rendering protected content");
  return <>{children}</>;
};

export default ProtectedRoute;
