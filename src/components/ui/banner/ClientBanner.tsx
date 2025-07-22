/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

const bannerImages = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
];

const ClientBanner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-[90%]">
      <div className="relative bg-white p-4 rounded-xl shadow-md">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={16}
          autoplay={{ delay: 3000 }}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {bannerImages.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-auto object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow z-10 flex items-center justify-center"
        >
          <FiArrowLeft className="text-blue-600 w-5 h-5" />
        </div>

        <div
          ref={nextRef}
          className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow z-10 flex items-center justify-center"
        >
          <FiArrowRight className="text-blue-600 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ClientBanner;
