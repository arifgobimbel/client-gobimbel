import MenuHome from '@/data/MenuHome'
import { Button, MenuItem } from '@material-tailwind/react'
import { useState } from 'react'

const MobileMenu = () => {

  const [isClose, setIsClose] = useState(false)

  return (
    <>
    <div onClick={() => setIsClose(true)} className={`${isClose? 'hidden': ''} bg-black bg-opacity-50 fixed inset-0 z-[99]`}>
        <ul className='bg-white px-4 py-2 h-full'>
        {
          MenuHome.map((menuData:any, index:number) => (
            <MenuItem key={index} className='text-base text-black cursor-pointer'>{menuData.name}</MenuItem>
          ))
        }
        <Button className='bg-primary-yellow text-black mt-4'>Masuk / Daftar</Button>
        </ul>
    </div>
    </>
  )
}

export default MobileMenu