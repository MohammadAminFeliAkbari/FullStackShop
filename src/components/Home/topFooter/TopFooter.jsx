import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Com from '../BottomHeader/com';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../App';

export default function TopFooter() {
    const { BASE_URL } = useContext(AppContext);
    const [data, setData] = useState([]); // Initialize state  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}headphones`);
                if (!response.ok)
                    throw new Error('Network response was not OK');
                const data = await response.json(); // Correctly parse JSON  
                setData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='w-auto flex items-center justify-center' style={{ margin: '50px', direction: 'ltr' }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={200}
                centeredSlides={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 50 }
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {data.length != 0 && data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Com offer={item.offer} information={item.information} numberStart={item.numberStart} img={item.img} price={item.price} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}   