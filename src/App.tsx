import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { router } from "./layout/Layout";

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />;
    </ShoppingCartProvider>
  );
}

export default App;
