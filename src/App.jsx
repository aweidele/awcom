import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Homepage } from "./pages/Homepage";
import { Blog } from "./pages/Blog";
import { Projects } from "./pages/Projects";
import { LinkInBio } from "./pages/LinkInBio";
import { Project, projectLoader } from "./pages/Project";

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
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":slug",
            id: "project-slug",
            element: <Project />,
            loader: projectLoader,
          },
        ],
      },
      {
        path: "link-in-bio",
        element: <LinkInBio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
