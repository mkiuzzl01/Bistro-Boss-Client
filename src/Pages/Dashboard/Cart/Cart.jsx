import { FiTrash } from "react-icons/fi";
import useCarts from "../../../hooks/useCarts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items,refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {

        const { data } = await axiosSecure.delete(`/item-delete/${id}`);
        console.log(data);

        if (data.deletedCount > 0) {
            refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Items: {items.length}</h1>
        <h1 className="text-3xl">Total Price: {totalPrice}</h1>
        <div>
          {
            !items.length ?<button  className="btn">Pay</button>:<Link to='/Dashboard/Payment'>
            <button className="btn">Pay</button>
          </Link>
          }
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {items.map((item, idx) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FiTrash className="text-2xl text-red-500" />
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
