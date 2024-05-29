import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Social_Login from "../../components/Social_Login/Social_Login";

const Registration = () => {
  const { createUser, updateUser, setUser, user } = useAuth();
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    const userInfo = { name, email, photo };
    try {
      const newUser = await createUser(email, password);
      await updateUser(name, photo);
      if (newUser.user) {
        //user info transfer to database
        setUser(user);
        try {
          const { data } = await axiosCommon.post("/users", userInfo);
          if(data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Register Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            navigate("/");
          }

        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Bistro Boss | Registration</title>
      </Helmet>
      <div className="flex flex-col m-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-300">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm dark:text-gray-600">
            Register to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.name && (
                <span className="text-red-500">This Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                {...register("photo")}
                placeholder="Enter Your Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.name && (
                <span className="text-red-500">This Email is required</span>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])/,
                })}
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">This Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  This Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  This Password must be lees than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  This Password must be use one uppercase and one lowercase and
                  special characters
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                value="Registration"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              If have an account yet?
              <Link
                to="/Login"
                className="hover:underline dark:text-violet-600"
              >
                Login
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

export default Registration;
