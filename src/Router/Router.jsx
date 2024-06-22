import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Components/Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../SignUp/SignUp";
import Login from "../LogIn/LogIn";
import DashboardLayout from "../LayOuts/DashBoardLayout";
import Profile from "../Components/Common/Profile";
import CreatePackage from "../Components/DashBoard/Host/CreatePackage/CreatePackage";


export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

        ]
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/dashboard",
        element:
            <DashboardLayout></DashboardLayout>
        ,
        children: [
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "create-package",
                element: <CreatePackage />
            }
        ]
    }


]);