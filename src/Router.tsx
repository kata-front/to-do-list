import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import App from "./components/Tasks/TaskComponent/TaskComponent";
import { store } from "./utils/store";
import initStoreThunk from "./utils/thunks/initStoreThunk";
import Counter from "./components/Counters/Counter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
            <Link to='/'></Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/counters">Counters</Link>
        </nav>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/tasks",
        element: <App />,
        loader: () => {
          return store.dispatch(initStoreThunk());
        },
      },
      {
        path: "/counters",
        element: <Counter />,
      },
    ],
  },
]);

export default Router;
