import ListProduct from '@/data/ListProduct'
import MenuHome from '@/data/MenuHome'
import { Button, MenuItem, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

const MobileMenu = () => {

  const [isClose, setIsClose] = useState(false)
  const [isProdukOpen, setIsProdukOpen] = useState(false)

  return (
    <>
    <div className={`${isClose? 'hidden': ''} bg-black bg-opacity-50 fixed inset-0 z-[99]`}>
        <ul className='bg-white px-4 py-2 h-full'>
        {
          MenuHome.map((menuData:any, index:number) => ( 
              menuData.name === "Produk kami" ?
              <>
              <MenuItem key={index} onClick={() => setIsProdukOpen(!isProdukOpen)} className='text-base flex items-center gap-2 text-black cursor-pointer'>
                {menuData.name}
                <HiChevronDown
                  strokeWidth={2}
                  className={`h-3 w-3 ml-2 transition-transform ${
                    isProdukOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
              {
                isProdukOpen && (
                  <>
                  {
                    ListProduct.map((listData:any, index:number) => (
                      <MenuItem key={index} className='text-base text-black cursor-pointer'>
                        <Typography className="font-bold">{listData.title}</Typography>
                        <Typography>{listData.description}</Typography>
                      </MenuItem>
                    ))
                  }
                  </>
                )
              }
              </>
              :
              <MenuItem key={index} className='text-base text-black cursor-pointer'>{menuData.name}</MenuItem>        
          ))
        }
        <Link href="/auth/signin">
          <Button className='bg-primary-yellow text-black mt-4'>Masuk / Daftar</Button>
        </Link>
        </ul>
    </div>
    </>
  )
}

export default MobileMenu