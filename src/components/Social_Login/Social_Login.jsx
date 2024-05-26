import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Social_Login = () => {
  const navigate = useNavigate();
  const { googleLogin, user:newUser, setUser } = useAuth();
  const axiosCommon = useAxiosCommon();

  const go = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleLogin();
      setUser(newUser);
      if (user) {
        const info = {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        };
        try {
         await axiosCommon.post('/users',info);
          navigate(go);
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <button onClick={handleGoogleLogin}>
          <FcGoogle className="text-3xl"></FcGoogle>
        </button>
        <p className="underline">Login with Google</p>
      </div>
    </div>
  );
};

export default Social_Login;
