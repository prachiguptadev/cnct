import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This page now redirects to the new Home page
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
