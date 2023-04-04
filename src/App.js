import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountriesPage from "./pages/Countries";
import CountryPage from "./pages/Country";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <CountriesPage /> },
      { path: "/:countryId", element: <CountryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
