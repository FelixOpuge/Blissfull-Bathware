'use client'

import Slider from 'react-slick'
import Slide from './Slide'
const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScrollL: 1,
        autoplay: true,
        pauseOnHover: false,
    }
    
    const slideData = [
        {
            id: 0,
            img: '/banner2.jpg',
            title: 'Trending Item',
            mainTitle: 'Freestanding',
            price: '$2,695'
        },
        {
            id: 1,
            img: '/banner1.jpg',
            title: 'Sale Offer',
            mainTitle: 'Clawfoot Tub',
            price: '$1,965'
        },
    ]
  return (
    <div className=''>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((data) => (
                <Slide
                    key={data.id}
                    img={data.img}
                    title={data.title}
                    mainTitle={data.mainTitle}
                    price={data.price}
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
Hero