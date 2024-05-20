// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Section_Title from "../../../components/Section_Title/Section_Title";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-10">
      <Section_Title
        Sub_Heading="---What Our Clients Say---"
        Heading="TESTIMONIALS"
      ></Section_Title>
      <div>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 flex flex-col items-center space-y-4">
                <div>
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                </div>
                <div>
                  <p>{review.details}</p>
                  <h1 className="text-center text-yellow-500">{review.name}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
