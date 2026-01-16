import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";

import GovWorks from "./page/GovWorks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gov-works",
    element: <GovWorks />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
