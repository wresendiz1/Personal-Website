// import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Coursework from "./pages/Coursework";
import Projects from "./pages/Projects";
import AnimatedRoutes from "./components/AnimatedRoutes";
// import Viz from "./pages/Viz";

const router = createHashRouter([
  {
    path: "/",
    element: <AnimatedRoutes />,
    // element: (
    //   <>
    //     <Header />
    //     <Outlet />
    //   </>
    // ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Coursework />,
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
