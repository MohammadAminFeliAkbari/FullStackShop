import Icons from './icons'
import ImgSlide from './imgSlide'

export default function Slider () {
  return (
    <section className='slider'>
      <div className='slides'>
        <ImgSlide />
      </div>
      <div className='buttons'>
        <Icons />
      </div>
    </section>
  )
}
