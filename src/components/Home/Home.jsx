import Four_img from './BottomHeader/Four_img'
import ImgSlide from './slider/imgSlide'
import BestOffer from './BestOffer/BestOffer'
import './home.css'
import TopFooter from './topFooter/TopFooter'

export default function Home() {
  return (
    <div className='flex flex-col mb-20 gap-2'>
      <ImgSlide />
      <Four_img />
      <BestOffer />
      <TopFooter />
    </div>
  )
}
