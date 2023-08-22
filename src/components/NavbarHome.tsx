import React from 'react'
import MenuHome from '@/data/MenuHome'

const NavbarHome = () => {
  return (
    <div className='flex justify-between items-center py-4'>
      <ul className='flex justify-between w-full'>
        {
          MenuHome.map((menuData:any, index:number) => (
            <li key={index} className='text-md text-white'>{menuData.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default NavbarHome