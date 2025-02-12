import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Newsletter } from "./components/newsletter.tsx";
import { Mails } from "./components/mails.tsx";
import backgroundImage from "./assets/backgroundimage.jpg";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mails",
        element: <Mails />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen items-center justify-center bg-blue-400">
        <div
          className="h-[90vh] w-full max-w-7xl bg-cover bg-center p-4 shadow-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  </StrictMode>
);
