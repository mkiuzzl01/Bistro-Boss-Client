import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <main className="max-w-7xl m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </main>
            <footer>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;