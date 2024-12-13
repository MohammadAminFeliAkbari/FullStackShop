import Four_img from './Bottom/Four_img'
import ImgSlide from './slider/imgSlide'
import BestOffer from './BestOffer/BestOffer'
import './home.css'

export default function Home () {
  return (
    <div className='flex flex-col mb-20 gap-2'>
        <ImgSlide />
        <Four_img />
        <BestOffer/>
    </div>
  )
}
