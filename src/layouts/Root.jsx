import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    const location = useLocation();
    console.log(location);
    const isLogin = location.pathname.includes('Login')
    return (
        <div>
            <main className="max-w-7xl m-auto">
           {isLogin ||
             <Navbar></Navbar>
           }
            <Outlet></Outlet>
            </main>
            <footer>
            {isLogin ||

                <Footer></Footer>
            }
            </footer>
        </div>
    );
};

export default Root;