import { PropsWithChildren } from 'react'
import HeaderNav from '../HeaderNav'
import NavbarHome from '../NavbarHome'

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className='bg-primary-red fixed top-0 right-0 left-0 sticky'>
        <div className='container mx-auto'>
        <HeaderNav/>
        <NavbarHome/>
        </div>
      </div>
      {children}
    </div>
  )
}

export default HomeLayout