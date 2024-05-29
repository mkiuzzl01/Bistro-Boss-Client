// import { useLoaderData, useParams } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAxiosCommon from "../../../hooks/useAxiosCommon";
// import { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";

import { useLoaderData } from "react-router-dom";
import Section_Title from "../../../components/Section_Title/Section_Title";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FiTool } from "react-icons/fi";

const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Update_Menu_Item = () => {
  const menu = useLoaderData();
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const image = { image: data.recipeImage[0] || menu.image };

    //sent image to imagebb;
    const res = await axiosCommon.post(imageHostingApi, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const name = data.recipeName;
      const recipe = data.recipeDescription;
      const image = res.data?.data?.display_url;
      const category = data.category;
      const price = parseFloat(data.recipePrice);

      const recipeInfo = { name, recipe, image, category, price };
      //sent data to database
      const result = await axiosSecure.patch(`/menu/${menu._id}`, recipeInfo);
      if (result.data.modifiedCount > 0) {
        //Show popup
        reset();
        Swal.fire({
          position: "top-enter",
          icon: "success",
          title: `${name} is updated successful`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <div>
        <Section_Title Heading="UPDATE ITEM"></Section_Title>
      </div>
      <form
        className="grid grid-cols-2 gap-4 p-10 mx-10 bg-[#F3F3F3] rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="" className="col-span-2">
          <span>Recipe name*</span>
          <input
            defaultValue={menu.name}
            className="input input-bordered w-full"
            placeholder="Recipe Name"
            {...register("recipeName")}
          />
        </label>
        <label>
          <span>Category*</span>
          <select
            className="select select-bordered w-full"
            {...register("category")}
            defaultValue={menu.category}
          >
            <option value="salad">SALAD</option>
            <option value="pizza">PIZZA</option>
            <option value="soup">SOUP</option>
            <option value="desert">DESERT</option>
            <option value="drinks">DRINKS</option>
          </select>
        </label>
        <label htmlFor="">
          <span>Price*</span>
          <input
            defaultValue={menu.price}
            className="input input-bordered w-full"
            {...register("recipePrice")}
          />
        </label>
        <span>Recipe Details*</span>
        <textarea
          defaultValue={menu.recipe}
          className="textarea textarea-bordered col-span-2"
          {...register("recipeDescription")}
          id=""
          cols="5"
          rows="5"
        ></textarea>
        <input
          type="file"
          className="file-input w-full col-span-2"
          {...register("recipeImage")}
        />
        <button className="btn bg-[#835D23] text-white w-36">
          <FiTool className=""></FiTool> Update
        </button>
      </form>
    </div>
  );
};

export default Update_Menu_Item;
