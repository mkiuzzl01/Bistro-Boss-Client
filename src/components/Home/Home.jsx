import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Features from "../Fetures/Features";
import From_Our_menu from "../From_Our_Manu/From_Our_menu";
import Section_Title from "../Section_Title/Section_Title";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section_Title
            Sub_Heading={'---From 11:00am to 10:00pm---'}
            Heading={'ORDER ONLINE'}
            ></Section_Title>
            <Category></Category>
            <Section_Title
            Sub_Heading={'---Check it out---'}
            Heading={'FROM OUR MENU'}
            ></Section_Title>
            <From_Our_menu></From_Our_menu>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;