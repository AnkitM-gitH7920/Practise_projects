import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
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