import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home-page/Home/Home.jsx"
import RegisterRestaurant from "./components/register-restaurant/RegisterRestaurant/RegisterRestaurant.jsx";
import SearchPage from "./components/SearchPage/SearchPage/SearchPage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/register-restaurant",
            element: <RegisterRestaurant />
        },
        {
            path: "/search",
            element: <SearchPage />
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
            <div className="flex"></div>
        </>
    )
}
export default App;