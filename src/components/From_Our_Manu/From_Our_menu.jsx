import { useEffect, useState } from "react";
import Menu_Card from "./Menu_Card";
import Section_Title from "../Section_Title/Section_Title";

const From_Our_menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const poplars = data.filter(
          (popular) => popular.category === "popular"
        );
        setMenus(poplars);
      });
  }, []);
  return (
    <div className="my-10">
      <div>
        <Section_Title
          Sub_Heading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        ></Section_Title>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {menus.map((menu) => (
          <Menu_Card key={menu._id} menu={menu}></Menu_Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2">View Full Menu</button>
        </div>
    </div>
  );
};

export default From_Our_menu;
