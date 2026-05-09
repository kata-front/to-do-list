import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./components/TaskComponent/TaskComponent";
import { store } from "./utils/store";
import initStoreThunk from "./utils/thunks/initStoreThunk";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Outlet />
        </>,
        children: [
            {
                index: true,
                element: <App />,
                loader: () => {
                    return store.dispatch(initStoreThunk())
                }
            }
        ]
    }
])

export default Router