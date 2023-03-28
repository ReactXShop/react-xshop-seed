import React, { useState } from "react";
import { User } from "../types/types";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType>(null!);
AuthContext.displayName = "AuthContext";

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout, user };

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
