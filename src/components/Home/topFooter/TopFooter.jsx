// Import Swiper core and required modules  
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import data from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import Com from '../BottomHeader/com';

// Import Swiper styles  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TopFooter() {
    return (
        <div className='w-auto flex items-center justify-center' style={{ margin: '50px', direction: 'ltr' }}>
            <Swiper
                // install Swiper modules  
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={200}
                centeredSlides={true}
                // Use breakpoints for responsive design  
                breakpoints={{
                    // when window width is <= 640px  
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is <= 768px  
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    // when window width is > 768px  
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Com offer={item.offer} information={item.information} numberStart={item.numberStart} img={item.img} price={item.price} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};