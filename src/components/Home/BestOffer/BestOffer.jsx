import { useEffect, useState } from 'react'
import Img_friday from '../../../image/friday.jpg'
import Img_supr_prudect from '../../../image/super-product.jpg'

export default function BestOffer () {
  const initialTime = 70000 // Total time in seconds
  const [remaining, setRemaining] = useState(initialTime)
  const [h, setH] = useState(0)
  const [m, setM] = useState(0)
  const [s, setS] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const hours = Math.floor(remaining / 3600)
    const minutes = Math.floor((remaining % 3600) / 60)
    const seconds = remaining % 60

    setH(hours)
    setM(minutes)
    setS(seconds)
  }, [remaining])

  return (
    <section className='supper-offer-section'>
      <div className='row flex'>
        <div className='col-lg-9 w-full'>
          <div className='supper-offer-box'>
            <span className='supper-offer-box-title'>پیشنهاد شگفت انگیز</span>
            <div className='body'>
              <div className='row flex justify-center items-center gap-20'>
                <div className='order-1'>
                  <div className='image-container'>
                    <img src={Img_supr_prudect} alt='' />
                  </div>
                </div>
                <div className='spesification flex items-center flex-col justify-center px-4'>
                  <div className='price'>1 میلیون تومان</div>
                  <div className='title'>هدست ایسوس مدل Strix</div>
                  <div className='counter-down w-full'>
                    <span id='hours'>{h}</span>:<span id='minutes'>{m}</span>:
                    <span id='seconds'>{s}</span>
                  </div>
                  <div className='remaining-time'>
                    زمان باقی مانده تا پایان سفارش
                  </div>
                  <div className='bg-red-500 my-2 px-3 text-white py-3 rounded-3xl'>
                    % ۶۰ تخفیف
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
