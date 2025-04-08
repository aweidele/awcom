import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Homepage } from "./pages/Homepage";
import { Blog } from "./pages/Blog";
import { Projects } from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error.</div>,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
