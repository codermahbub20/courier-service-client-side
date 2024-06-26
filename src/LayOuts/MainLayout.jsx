import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-rancho">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;