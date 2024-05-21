import Menu_Card from "./Menu_Card";
import Section_Title from "../../../components/Section_Title/Section_Title";
import useMenuData from "../../../hooks/useMenuData";
import Menu_list from "../../../components/Menu_List/Menu_list";

const From_Our_menu = () => {
  const [data] = useMenuData();
  const populars = data.filter(popular=> popular.category==="popular")

  return (
    <div className="my-10">
      <div>
        <Section_Title
          Sub_Heading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        ></Section_Title>
      </div>
      <Menu_list list={populars} btn={"View Full  Menu"}></Menu_list>
    </div>
  );
};

export default From_Our_menu;
