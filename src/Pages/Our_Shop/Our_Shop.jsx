import Cover from "../../components/Cover/Cover";
import shop_bg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodItems from "../../components/FoodItems/FoodItems";
import useMenuData from "../../hooks/useMenuData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Our_Shop = () => {
  const [data] = useMenuData();
  const { category } = useParams();
  const categories = ["salad","pizza","soup","dessert","drinks"];
  const initialIndex = categories.indexOf(category);
  const [itemInx, setItemInx] = useState(initialIndex);
  const salad = data.filter((popular) => popular.category === "salad");
  const pizza = data.filter((popular) => popular.category === "pizza");
  const soup = data.filter((popular) => popular.category === "soup");
  const dessert = data.filter((popular) => popular.category === "dessert");
  const drinks = data.filter((popular) => popular.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop </title>
      </Helmet>
      <Cover
        img={shop_bg}
        title={"OUR SHOP"}
        sub_title={"Would you like to try a dish?"}
      ></Cover>
      <div className="text-center my-5">
        <Tabs defaultIndex={itemInx} onSelect={(index) => setItemInx(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <FoodItems items={salad}></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems items={pizza}></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems items={soup}></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems items={dessert}></FoodItems>
          </TabPanel>
          <TabPanel>
            <FoodItems items={drinks}></FoodItems>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Our_Shop;
