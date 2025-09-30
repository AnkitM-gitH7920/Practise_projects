import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import RegisterRestaurant from "./components/registerRestaurant/RegisterRestaurant.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "register-restaurant",
            element: <RegisterRestaurant />
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