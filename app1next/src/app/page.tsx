import AuthProvider from "../Proveedor/AuthProvider";
import UserProfile from "../Componente/UserProfile";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-6">
        <h1>Sistema de Autenticación</h1>
        <AuthProvider>
          <UserProfile />
        </AuthProvider>
      </main>
    </div>
  );
}
