import Menu_Card from "../../Pages/Home/From_Our_Manu/Menu_Card";

const Menu_list = ({list,btn}) => {

  return (
      <div className="my-10">
        <div className="grid md:grid-cols-2 gap-4 my-8">
        {list.map((menu) => (
          <Menu_Card key={menu._id} menu={menu}></Menu_Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2">
          {btn}
        </button>
      </div>
      </div>
  );
};

export default Menu_list;
