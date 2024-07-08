import { Carousel } from 'antd'
import { listBanner } from '../utils/constants'
const Banner = () => {
  return (
    <Carousel autoplay>
      {listBanner.map((banner, index) => (
        <div className='flex justify-center items-center cursor-pointer' key={index}>
          <img className='w-full' src={banner.image} alt={banner.alt} />
        </div>
      ))}
    </Carousel>
  )
}

export default Banner
