import { PropsWithChildren } from 'react'
import NavbarHome from '../NavbarHome'

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className='bg-primary-red sticky fixed top-0 left-0 right-0 z-[99]'>
        <div className='container mx-auto'>
        <NavbarHome/>
        </div>
      </div>
      {children}
    </div>
  )
}

export default HomeLayout