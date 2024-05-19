import Section_Title from "../Section_Title/Section_Title";
import features from "../../assets/home/featured.jpg";
import './features.css'
const Features = () => {
  return (
    //that use parallax
    <div className="features_bg bg-fixed my-10">
      <Section_Title
        Sub_Heading={"---Check it out---"}
        Heading={"FROM OUR MENU"}
      ></Section_Title>
      <div className="lg:flex pb-20 pt-12 px-36 items-center space-x-4 bg-slate-800 bg-opacity-40">
        <div className="">
          <img src={features} alt=""  />
        </div>
        <div >
          <h1 className="text-xl">March 20, 2023 <br /> WHERE CAN I GET SOME?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi nostrum fugiat maiores deleniti recusandae voluptas cupiditate accusamus error vel. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quis ducimus aliquam aliquid corrupti dolorum vel perferendis nemo temporibus facere?</p>
          <button className="btn btn-outline border-0 border-b-2 ">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
