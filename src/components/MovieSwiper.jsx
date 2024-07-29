import { Swiper, SwiperSlide } from "swiper/react"; 

import 'swiper/css/effect-coverflow'; 
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "../styles/movieSwiper.css";

function MovieSwiper({slides, onClick}) {
    return (
        <Swiper
            draggable={false}
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            autoplay={{
                delay: 2500, 
                disableOnInteraction: false, 
            }}
            coverflowEffect={{
                rotate: 50, 
                stretch: 0, 
                depth: 100, 
                modifier: 1, 
                slideShadows: true, 
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="movieSwiper"
        >
            {
                slides?.map(slide => (
                    <SwiperSlide key={slide.id} onClick={() => onClick(slide)} draggable={false}>
                        <img src={slide.previewImg} alt={slide.title} style={{height: "100%"}}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSwiper; 