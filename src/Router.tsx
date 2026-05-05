import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./components/App";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Outlet />
        </>,
        children: [
            {
                index: true,
                element: <App />
            }
        ]
    }
])

export default Router