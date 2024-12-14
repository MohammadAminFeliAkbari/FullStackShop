import data from './data'
import Com from './com'

export default function Four_img () {
  return (
    <div className='flex flex-row gap-2 mx-3 my-3 items-center justify-center flex-wrap'>
      {data.map((item, index) => (
        <Com
          key={index} // Ensure each component has a unique key
          information={item.information}
          img={item.img}
          numberStart={item.numberStart}
          price={item.price}
          offer={item.offer}
        />
      ))}
    </div>
  )
}
