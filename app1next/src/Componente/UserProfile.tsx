'use client';

import React from "react";
import { useAuth } from "../Proveedor/AuthProvider";

export default function UserProfile() {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ textAlign: "center" }}>
      {user ? (
        <>
          <h3>Hola, <strong>{user.name}</strong></h3>
          <button onClick={logout} style={{ background: "lightcoral" }}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h3>No estás autenticado</h3>
          <button onClick={login} style={{ background: "Yellow" }}>
            Iniciar sesión
          </button>
        </>
      )}
    </div>
  );
}

