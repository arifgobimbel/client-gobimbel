import { PropsWithChildren } from 'react'
import NavbarHome from '../NavbarHome'

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className='bg-primary-red top-0 right-0 left-0 relative'>
        <div className='container mx-auto'>
        <NavbarHome/>
        </div>
      </div>
      {children}
    </div>
  )
}

export default HomeLayout