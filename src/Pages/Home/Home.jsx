import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import From_Our_menu from "./From_Our_Manu/From_Our_menu";
import Contact from "./Contact/Contact";
import Features from "./Fetures/Features";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <From_Our_menu></From_Our_menu>
            <Contact></Contact>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;