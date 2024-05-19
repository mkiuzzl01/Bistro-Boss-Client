import { useEffect, useState } from "react";
import Menu_Card from "./Menu_Card";

const From_Our_menu = () => {
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        fetch('menu.json').then(res=>res.json()).then(data=>{
            const poplars= data.filter(popular=> popular.category === 'popular');
            setMenus(poplars)
        })
    },[])
    return (
        <div className="grid md:grid-cols-2 gap-4 my-8">
            {
                menus.map(menu=><Menu_Card key={menu._id}  menu={menu}></Menu_Card>)
            }
        </div>
    );
};

export default From_Our_menu;