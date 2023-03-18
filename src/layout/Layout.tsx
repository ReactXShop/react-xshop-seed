import { createBrowserRouter, Outlet } from "react-router-dom";
import { Landing } from "../pages/landing/Landing";
import { SearchResult } from "../pages/search/SearchResult";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
    ],
  },
]);
