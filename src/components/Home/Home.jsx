import Four_img from './Bottom/Four_img'
import './home.css'
import ImgSlide from './slider/imgSlide'

import h3 from '../../image/h4.jpg'

export default function Home () {
  return (
    <div className='flex flex-col mb-20 gap-2'>
        <ImgSlide />
        <Four_img />
    </div>
  )
}
