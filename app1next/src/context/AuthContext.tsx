import { createContext } from "react";

export const AuthContext = createContext({
  user: null as { name: string } | null,
  login: () => {},
  logout: () => {},
});
