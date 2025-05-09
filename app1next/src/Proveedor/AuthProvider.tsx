'use client';

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ViewReact } from "../modelos/ViewReact"; // lo mismo que usas en el ejemplo

export default function AuthProvider(props: ViewReact) {
  const [user, setUser] = useState<{ name: string } | null>(null);

  function login() {
    setUser({ name: "Greysi Ortiz" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export const useAuth = () => {
  return useContext(AuthContext);
};
