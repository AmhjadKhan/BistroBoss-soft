import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import Sectiontitle from "../../Components/SectionTitle/Sectiontitle";

const Catagory = () => {
  return (
    <section>
      <Sectiontitle subHeading={"Order now"}
      heading={"bdcnmvbn"}>
      </Sectiontitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className="text-4xl -mt-16 text-red-500">SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className="text-4xl -mt-16 ">PIZAA</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className="text-4xl -mt-16 text-red-500">PAYES</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className="text-4xl -mt-16">CAKE</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className="text-4xl -mt-16 text-red-500">BIRANY</h3>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Catagory;
