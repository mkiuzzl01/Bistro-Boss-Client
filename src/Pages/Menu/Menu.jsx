import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import banner3 from '../../assets/menu/banner3.jpg'
import Section_Title from "../../components/Section_Title/Section_Title";
import Menu_list from "../../components/Menu_List/Menu_list";
import useMenuData from "../../hooks/useMenuData";
import dessert_bg from "../../assets/menu/dessert-bg.jpeg";
import soup_bg from "../../assets/menu/soup-bg.jpg";
import pizza_bg from "../../assets/menu/pizza-bg.jpg";
import salad_bg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
    const [data] = useMenuData();
    const offered = data.filter(popular=> popular.category==="offered")
    const dessert = data.filter(popular=> popular.category==="dessert")
    const pizza = data.filter(popular=> popular.category==="pizza")
    const salad = data.filter(popular=> popular.category==="salad")
    const soup = data.filter(popular=> popular.category==="soup")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu </title>
            </Helmet>
            <Cover img={banner3} title={'OUR MENU'} sub_title={"Would you like to try a dish?"}></Cover>
            <Section_Title Sub_Heading={"---Don't miss---"} Heading={"TODAY'S OFFER"}></Section_Title>
            {/* This is Todays Offers */}
            <Menu_list list={offered} btn={"ORDER YOUR FAVOURITE FOOD"} to={"offered"}></Menu_list>
            {/* This is Dessert menu section */}
            <Cover img={dessert_bg} title={'DESSERTS'} sub_title={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <Menu_list list={dessert} btn={"ORDER YOUR FAVOURITE FOOD"} to={"dessert"}></Menu_list>
            {/* This is Pizza Menu Section */}
            <Cover img={pizza_bg} title={'PIZZA'} sub_title={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <Menu_list list={pizza} btn={"ORDER YOUR FAVOURITE FOOD"} to={"pizza"}></Menu_list>
            {/* This is Salad Menu Section */}
            <Cover img={salad_bg} title={'SALADS'} sub_title={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <Menu_list list={salad} btn={"ORDER YOUR FAVOURITE FOOD"} to={"salad"}></Menu_list>
            {/* This is Soup Menu Section */}
            <Cover img={soup_bg} title={'SOUPS'} sub_title={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <Menu_list list={soup} btn={"ORDER YOUR FAVOURITE FOOD"} to="soup"></Menu_list>
        </div>
    );
};

export default Menu;