import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img_1 from '../../assets/home/01.jpg'
import img_2 from '../../assets/home/02.jpg'
import img_3 from '../../assets/home/03.png'
import img_4 from '../../assets/home/04.jpg'
import img_5 from '../../assets/home/05.png'
import img_6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel autoPlay={true}>
                <div>
                    <img src={img_1} />
                </div>
                <div>
                    <img src={img_2} />
                </div>
                <div>
                    <img src={img_3} />
                </div>
                <div>
                    <img src={img_4} />
                </div>
                <div>
                    <img src={img_5} />
                </div>
                <div>
                    <img src={img_6} />
                </div>
            </Carousel>
    );
};

export default Banner;