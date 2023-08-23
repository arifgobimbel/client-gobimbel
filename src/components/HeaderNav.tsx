import { TiShoppingCart } from 'react-icons/ti'
import { BiSolidDiscount } from 'react-icons/bi'
import { useState } from 'react'
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { LogoHeader } from '../../public/assets/svg'

const HeaderNav = () => {

  const [isLogin, setIslogin] = useState<boolean>(false);

  return (
    <div className='flex justify-between items-center py-4'>
      <span>
        <LogoHeader className="h-12 w-32"/>
      </span>
      <div className='flex items-center gap-12'>
        <span>
          <BiSolidDiscount className="h-6 w-6 text-white -rotate-45"/>
        </span>
        <span>
          <TiShoppingCart className="h-6 w-6 text-white"/>
        </span>
        {
          isLogin? 
          <Menu placement="bottom-end">
            <MenuHandler>
              <Avatar src='/assets/image/avatar.png' alt='avatar' size='md' variant='rounded' color='yellow' className='w-12 h-12'/>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem onClick={() => setIslogin(false)}>Keluar</MenuItem>
            </MenuList>
          </Menu>
          :
          <Button onClick={() => setIslogin(true)} className='bg-white text-black'>Masuk / Daftar</Button>
        }
      </div>
    </div>
  )
}

export default HeaderNav