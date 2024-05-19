import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Features from "../Fetures/Features";
import From_Our_menu from "../From_Our_Manu/From_Our_menu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
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