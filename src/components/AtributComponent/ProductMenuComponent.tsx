import MenuProduct from '@/data/MenuProduct'
import { Card, CardBody } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const ProductMenuComponent = () => {
  return (
    <div className='absolute -top-12 z-10 w-full'>
        <div className='container mx-auto px-2 sm:px-0'>
          <div className='grid grid-cols-3 gap-2 lg:gap-6 bg-white px-6 py-0 sm:py-4 rounded-lg'>
            {
              MenuProduct.map((menuData:any, index:number) => (
                <Card key={index} shadow={false} className='bg-none sm:bg-gradient-to-tr from-primary-yellow to-primary-red-500 cursor-pointer'>
                  <Link href={menuData.path}>
                  <CardBody className='flex flex-col lg:flex-row items-center gap-2 lg:gap-6'>
                    <div className='p-2 rounded-full bg-white bg-opacity-30'>
                    <menuData.icon/>
                    </div>
                    <p className="text-black sm:text-white text-xs lg:text-xl font-bold">{menuData.name}</p>
                  </CardBody>
                  </Link>
                </Card>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductMenuComponent