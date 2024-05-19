// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import "./Category.css";
import { Pagination } from "swiper/modules";
import img_1 from "../../assets/home/slide1.jpg";
import img_2 from "../../assets/home/slide2.jpg";
import img_3 from "../../assets/home/slide3.jpg";
import img_4 from "../../assets/home/slide4.jpg";
import img_5 from "../../assets/home/slide5.jpg";
import Section_Title from "../Section_Title/Section_Title";

const Category = () => {
  return (
    <div>
      <div className="my-10">
        <Section_Title
          Sub_Heading={"---From 11:00am to 10:00pm---"}
          Heading={"ORDER ONLINE"}
        ></Section_Title>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={img_1} alt="" />
          <p className="uppercase -mt-16 text-2xl text-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="" />
          <p className="uppercase -mt-16 text-2xl text-center">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="" />
          <p className="uppercase -mt-16 text-black text-2xl text-center">
            Soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="" />
          <p className="uppercase -mt-16 text-black text-2xl text-center">
            Deserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="" />
          <p className="uppercase -mt-16 text-black text-2xl text-center">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
      <div className="category_bg bg-fixed bg-center p-24">
        <div className="text-center p-24 bg-white text-black">
          <h1 className="text-4xl">Bistro Boss</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
