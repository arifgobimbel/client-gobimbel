import { PropsWithChildren } from 'react'
import HeaderNav from '../HeaderNav'
import Navbar from '../Navbar'

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className='bg-gradient-to-b from-primary-red to-primary-yellow fixed top-0 right-0 left-0 sticky'>
        <div className='container mx-auto'>
        <HeaderNav/>
        <Navbar/>
        </div>
      </div>
      <h2>Default Layouts</h2>
      {children}
    </div>
  )
}

export default DefaultLayout