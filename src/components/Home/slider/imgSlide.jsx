import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../App';

export default function ImgSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const { BASE_URL } = useContext(AppContext);
  let totalImages = data.length;

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}slider`);
    if (!response.ok) console.log('not OK');

    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount  
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, 6000);
    return () => clearInterval(interval); // Clean up the interval on component unmount  
  }, [totalImages, BASE_URL]); // Added BASE_URL to dependencies  

  return (
    <>
      {data.length > 0 && data.map((item, index) => (
        <S
          key={index}
          active={index === currentIndex ? '' : 'hidden'}
          img={item.img}
          text={item.text}
          id={item.id}
        />
      ))}
    </>
  );
}

function S({ active, img, text, id }) {
  const { BASE_URL } = useContext(AppContext);
  return (
    <div className={`${active} animate__fadeIn relative`} id={id}>
      <img src={`${BASE_URL}image?id=${img}`} alt='' className='w-full' />
      <h2 className='text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-thin text-white z-10 bg-black bg-opacity-50 p-2 rounded'>
        {text}
      </h2>
    </div>
  );
}