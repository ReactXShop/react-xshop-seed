import { PropsWithChildren } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Collection } from "../pages/collection/Collection";
import { Landing } from "../pages/landing/Landing";
import { SearchResult } from "../pages/search/SearchResult";
import { TokenDetails } from "../pages/token-details/TokenDetails";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout: React.FC<PropsWithChildren> = () => {
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
      {
        path: "/collection/:id",
        element: <Collection />,
      },
      {
        path: "/token/:collectionId/:id",
        element: <TokenDetails />,
      },
    ],
  },
]);
