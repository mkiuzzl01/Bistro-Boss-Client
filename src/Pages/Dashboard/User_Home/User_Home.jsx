import useAuth from "../../../hooks/useAuth";

const User_Home = () => {
  const { user } = useAuth();
  return (
    <div className="p-10">
      <h1 className="text-2xl">
        <span>Hi,Welcome </span>
        {user ? user.displayName : "back"}
      </h1>
    </div>
  );
};

export default User_Home;
