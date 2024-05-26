import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const Card = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCarts();

  const handleOrder = async (food) => {
    if (user && user.email) {
      const cardItem = {
        menuId: food._id,
        email: user?.email,
        name: food.name,
        image: food.image,
        price: food.price,
      };
      const { data } = await axiosSecure.post("/carts", cardItem);
      if (data.insertedId) {
        Swal.fire({
          position: "top-enter",
          icon: "success",
          title: `${name} is added your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "You are not Login",
        text: "Please Login to add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="absolute right-10 top-5 bg-black text-white p-2">
          ${price}
        </p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleOrder(item)}
              className="btn btn-outline  bg-stone-300 text-orange-600 border-0 border-b-2"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
