import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data:isAdmin, isPending:isAminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`users/Admin/${user.email}`);
      console.log(data.admin);
      return data?.admin;
    },
  });
  return [isAdmin,isAminLoading]
};

export default useAdmin;
