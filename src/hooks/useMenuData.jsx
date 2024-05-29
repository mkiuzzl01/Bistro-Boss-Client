import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosCommon from "./useAxiosCommon";

const useMenuData = () => {
  const axiosCommon = useAxiosCommon();
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {data=[], refetch,isLoading} = useQuery({
    queryKey:['menu'],
    queryFn: async ()=>{
      const res = await axiosCommon("http://localhost:5000/menu");
      return res.data
    }
  })
  return [data,refetch,isLoading]
};

export default useMenuData;
