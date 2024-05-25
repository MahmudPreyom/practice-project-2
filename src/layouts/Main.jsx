import { Outlet } from "react-router-dom";
import Navber from "../pages/Navber";
import Footer from "../pages/Footer";


const Main = () => {
    return (
        <div>
            <Navber/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;