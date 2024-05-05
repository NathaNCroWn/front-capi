import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Principal = () => {
    return (
        <div className="bg-fondo"><Toaster /><Header /><Outlet /><Footer/>
        </div>
    );
};
export default Principal