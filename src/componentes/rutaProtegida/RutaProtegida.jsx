import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UsarAuth } from "../contextos/AuthContext";

export default function RutaProtegida({ children }) {
  const { usuarioActivo } = UsarAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioActivo) {
      navigate("/login");
    }
  }, []);

  return <>{usuarioActivo ? children : null}</>;
}
