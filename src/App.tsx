import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { router } from "./layout/Layout";

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <RouterProvider router={router} />;
      </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default App;
