import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/errorPages/ErrorPage";
import HomePage from "./pages/home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
