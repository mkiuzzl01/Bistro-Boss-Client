import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: items = [] } = useQuery({
    queryKey: ["carts",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [items, refetch];
};

export default useCarts;
