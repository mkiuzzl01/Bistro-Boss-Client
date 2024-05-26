import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Social_Login from "../../components/Social_Login/Social_Login";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const go = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    loginUser(email, pass)
      .then((result) => {
        if (result) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
        navigate(go);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const userCaptcha = e.target.value;
    if (validateCaptcha(userCaptcha) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="py-24">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="flex flex-col max-w-md m-auto p-6 rounded-md sm:p-10 bg-gray-400">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">
            Login to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="demo@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label>
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleValidateCaptcha}
                placeholder="Enter Your Captcha"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                className="w-full px-8 py-3 font-semibold rounded-md btn "
                disabled={disable}
                type="submit"
                value="Sign in"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                to="/Registration"
                className="hover:underline dark:text-violet-600"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </form>
        <Social_Login></Social_Login>
      </div>
    </div>
  );
};

export default Login;
