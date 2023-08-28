import TestimoniSiswa from '@/data/TestimoniSiswa';
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import React from 'react'
import Slider from 'react-slick'

const TestimoniMuridSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <div className='container mx-auto py-6'>
      <h1 className="my-4 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">Testimoni Siswa</h1>
      <Slider {...settings}>
        {
          TestimoniSiswa.map((dataSiswa: any, index:number) => (
          <div key={index} className='px-4 py-2'>
            <Card shadow={false} className='border-4 border-primary-red rounded-lg relative'>
              <div className='text-center py-4'>
                <h3>{dataSiswa.name}</h3>
                <h2 className='font-bold'>{dataSiswa.title}</h2>
              </div>
              <div>
              <iframe className='h-[280px] w-full' src={dataSiswa.link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
              </div>
              <div className='text-center bg-primary-red text-white px-6 py-4'>
                <p>{dataSiswa.description}</p>
              </div>
            </Card>
          </div>
          ))
        }
      </Slider>
      </div>
    </div>
  )
}

export default TestimoniMuridSection