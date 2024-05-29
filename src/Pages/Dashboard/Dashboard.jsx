import { Link, Outlet } from "react-router-dom";
import {
  FiBook,
  FiCalendar,
  FiCreditCard,
  FiHome,
  FiList,
  FiMenu,
  FiPhone,
  FiPlus,
  FiShoppingCart,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [items] = useCarts();
  //todo:
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  return (
    <main className="max-w-7xl m-auto">
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu space-y-2 p-4">
            {isAdmin ? (
              <>
                <Link
                  to="/Dashboard/Admin_Home"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiHome />
                  Admin Home
                </Link>
                
                <Link
                  to="/Dashboard/Add_Items"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiPlus />
                  Add Items
                </Link>

                <Link
                  to="/Dashboard/Manage_Items"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiList/>
                  Manage Items
                </Link>
                <Link
                  to="/Dashboard/Manage_Booking"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiBook/>
                Manage Booking
                </Link>
                <Link
                  to="/Dashboard/All_Users"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiUsers/>
                  All Users
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/Dashboard/User_Home"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiHome />
                  User Home
                </Link>
                <Link
                  to="/Dashboard/Cart"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiShoppingCart /> Cart ({items.length})
                </Link>
                <Link
                  to="/Dashboard/Reservation"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiBook /> Reservation
                </Link>
                <Link
                  to="/Dashboard/Payment_History"
                  className="flex items-center text-2xl space-x-2"
                >
                  {" "}
                  <FiCreditCard />
                  Payment History
                </Link>
                <Link
                  to="/Dashboard/Add_Review"
                  className="flex items-center text-2xl space-x-2"
                >
                  <FiStar />
                  Add Review
                </Link>
                <Link
                  to="/Dashboard/My_Booking"
                  className="flex items-center text-2xl space-x-2"
                >
                  <FiCalendar />
                  My Booking
                </Link>
              </>
            )}
          </ul>

          {/* this is common for all user */}
          <div className="divider mx-4"></div>
          <div>
            <ul className="menu p-4 space-y-2">
              <Link to="/" className="flex items-center text-2xl space-x-2">
                <FiHome />
                Home
              </Link>
              <Link to="/Menu" className="flex items-center text-2xl space-x-2">
                <FiMenu />
                Menu
              </Link>
              <Link
                to="/Contact"
                className="flex items-center text-2xl space-x-2"
              >
                <FiPhone />
                Contact
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
