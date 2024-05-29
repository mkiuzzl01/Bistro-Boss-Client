import { FiDelete, FiEdit } from "react-icons/fi";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useMenuData from "../../../hooks/useMenuData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Section_Title from "../../../components/Section_Title/Section_Title";

const Manage_Items = () => {
  const [data, refetch] = useMenuData();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (menu) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async () => {
      try {
        const { data } = await axiosSecure.delete(`/menu/${menu._id}`);

        if (data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your food has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  return (
    <div className="py-5">
      <div>
        <Section_Title
          Sub_Heading="---Hurry Up!---"
          Heading="MANAGE ALL ITEMS"
        ></Section_Title>
      </div>
      <div className="ps-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((menu, i) => (
                <tr key={menu._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={menu.image} alt={menu.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{menu.name}</td>
                  <td className="text-right">${menu.price}</td>
                  <th>
                    <Link to={`/Dashboard/Update_Menu_Item/${menu._id}`}>
                      <FiEdit className="text-2xl"></FiEdit>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(menu)}
                      className="btn btn-ghost"
                    >
                      <FiDelete className="text-2xl"></FiDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage_Items;
