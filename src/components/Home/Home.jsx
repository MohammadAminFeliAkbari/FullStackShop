import Four_img from './Bottom/App'
import './home.css'
import Slider from './slider/slider'

export default function Home () {
  return (
    <div className='flex flex-col bg-opacity-50'>
      <Slider />
      <Four_img/>
    </div>
  )
}
