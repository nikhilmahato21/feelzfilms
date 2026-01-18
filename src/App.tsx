import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";



import { Home } from "./page/Home";
import GovWorks from "./page/GovWorks";
import ScrollToTop from "./components/ScrollToTop";



// ✅ Layout Wrapper
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ layout added
    children: [
      { index: true, element: <Home /> },
      { path: "gov-works", element: <GovWorks /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
