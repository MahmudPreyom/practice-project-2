import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/Navber";
import Footer from "../pages/Footer";


const Main = () => {

    const location = useLocation();
    const hideNavAndFooter = ['/login', '/register'].includes(location.pathname);

    return (
        <div>
            {!hideNavAndFooter && <Navber />}
            <div>
                <Outlet/>
            </div>
            {!hideNavAndFooter && <Footer />}
        </div>
    );
};

export default Main;