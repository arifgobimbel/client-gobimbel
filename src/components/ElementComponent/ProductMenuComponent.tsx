import MenuProduct from '@/data/MenuProduct'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'

const ProductMenuComponent = () => {
  return (
    <div className='absolute -top-12 z-10 w-full'>
        <div className='container mx-auto px-2 sm:px-0'>
          <div className='grid grid-cols-3 gap-2 lg:gap-6 bg-white px-6 py-2 lg:py-4 rounded-lg'>
            {
              MenuProduct.map((menuData:any, index:number) => (
                <Card key={index} className='bg-gradient-to-tr from-primary-yellow to-primary-red-500 cursor-pointer'>
                  <CardBody className='flex flex-col lg:flex-row items-center gap-2 lg:gap-6'>
                    <div className='p-2 rounded-full bg-white bg-opacity-30'>
                    <menuData.icon/>
                    </div>
                    <Typography className="text-white text-xs lg:text-xl font-bold">{menuData.name}</Typography>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductMenuComponent