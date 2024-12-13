import { useState, useEffect } from 'react'
import details from './details'

export default function ImgSlide () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = details.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages)
    }, 6000)

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [totalImages])

  return (
    <>
      {details.map((item, index) => (
        <S
          key={index}
          active={index === currentIndex ? '' : 'hidden'}
          img={item.img}
          text={item.text}
          id={item.id}
        />
      ))}
    </>
  )
}

function S ({ active, img, text, id }) {
  return (
    <div className={`item ${active} h-[300px] animate__fadeIn`} id={id}>
      <img src={img} alt='' className='w-full object-cover' />
      <h2 className='text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-thin text-white z-10 bg-black bg-opacity-50 p-2 rounded'>
        {text}
      </h2>
    </div>
  )
}
