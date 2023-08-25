import TopGuru from '@/data/TopGuru'
import { Avatar, Card, CardBody, CardFooter } from '@material-tailwind/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdWorkHistory } from 'react-icons/md'
import Slider from "react-slick";

const TopGuruSection = () => {

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
      <div className='container mx-auto'>
      <h1 className="my-4 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">TOP Guru GO</h1>
        <Slider {...settings}>
        {
          TopGuru.map((menudata:any, index:number) => (
            <div key={index} className='px-12 py-12'>
              <Card shadow={false} className='border-4 border-primary-red rounded-lg relative'>
              <Avatar src='/assets/image/avatar.png' alt='avatar' size='md' variant='rounded' color='yellow' className='w-16 h-16 absolute -left-8 -top-8'/>
                <CardBody>
                  <div className='text-center'>
                  <h3 className='font-medium text-2xl mb-1'>{menudata.name}</h3>
                  <h4 className='text-md'>{menudata.matapelajaran}</h4>
                  </div>
                  <div className='flex items-center gap-2 mb-3 mt-4'>
                    <MdWorkHistory className="w-6 h-6 text-primary-red"/>
                    <p>{menudata.pengalaman}</p>
                  </div>
                  <p className='font-bold'>{menudata.pencapaian}</p>
                </CardBody>
                <hr className="mx-4 border-2 border-primary-red"/>
                <CardFooter>
                  {
                    menudata?.content?.map((dataContent:any, index:number) => (      
                    <div key={index} className="flex items-center p-2">
                      <div className="mr-2">
                        <AiFillStar className="w-5 h-5 text-primary-red" />
                      </div>
                      <p className="text-sm font-medium">{dataContent.content}</p>
                    </div>
                    ))
                  }
                </CardFooter>
              </Card>
            </div>
          ))
        }
        </Slider>
      </div>
    </div>
  )
}

export default TopGuruSection