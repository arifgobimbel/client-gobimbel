import MenuDashboard from '@/data/MenuDashboard'
import { Button } from '@material-tailwind/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-6 flex-wrap py-4'>
      {
        MenuDashboard.map((MenuData:any, index:number) => (
            <Button key={index} className={`${MenuData.name == 'Dashboard'? 'bg-primary-red text-white' : 'bg-white text-black'} flex gap-4`}>
            <MenuData.icon/>
            {MenuData.name}
            </Button>
        ))
      }
    </div>
  )
}

export default Navbar