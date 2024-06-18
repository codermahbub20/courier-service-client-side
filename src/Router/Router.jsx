import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Components/Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);