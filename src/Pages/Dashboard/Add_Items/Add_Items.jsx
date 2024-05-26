import { useForm } from "react-hook-form";
import Section_Title from "../../../components/Section_Title/Section_Title";
import { FiTool } from "react-icons/fi";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Add_Items = () => {
  const axiosCommon = useAxiosCommon();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const image = { image: data.recipeImage[0] };

    const res = await axiosCommon.post(imageHostingApi, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const recipeImage = res.data?.data?.display_url;
    const name = data.recipeName;
    const recipe = data.recipeDescription;
    const category = data.category;
    const recipeInfo = {name,recipe,category,recipeImage}
    console.log(recipeInfo);
  };

  return (
    <div className="py-5">
      <div>
        <Section_Title
          Sub_Heading="---What's new?---"
          Heading="ADD AN ITEM"
        ></Section_Title>
      </div>
      <form
        className="grid grid-cols-2 gap-4 p-10 mx-10 bg-[#F3F3F3] rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="" className="col-span-2">
          <span>Recipe name*</span>
          <input
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
            defaultValue="default"
          >
            <option disabled value="default">
              Choose Your Category
            </option>
            <option value="Salad">SALAD</option>
            <option value="Pizza">PIZZA</option>
            <option value="Soup">SOUP</option>
            <option value="Desert">DESERT</option>
            <option value="Drinks">DRINKS</option>
          </select>
        </label>
        <label htmlFor="">
          <span>Price*</span>
          <input
            className="input input-bordered w-full"
            {...register("recipePrice")}
          />
        </label>
        <span>Recipe Details*</span>
        <textarea
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
          <FiTool className=""></FiTool> submit
        </button>
      </form>
    </div>
  );
};

export default Add_Items;
