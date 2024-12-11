import details from './details'

export default function ImgSlide () {
  return (
    <>
      {details.map((item, index) => (
        <S active={item.active} img={item.img} text={item.text} id={item.id} />
      ))}
    </>
  )
}

function S ({ active, img, text, id }) {
  return (
    <div className={`item ${active} relative `} id={id}>
      <img src={img} alt='' className='h-auto w-full'/>
      <h2 className='absolute text-3xl font-thin'>{text}</h2>
    </div>
  )
}
