import Card from "../Card/Card";

const FoodItems = ({items}) => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {
            items.map(item=> <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default FoodItems;