import { HeroSection, AboutSection, TOBKSection, BerlatihSection, GoNewsSection, FooterSection} from '@/components/HomeComponent/Index'
import HomeLayout from '@/components/Layouts/HomeLayout';
import NavbarHome from '@/components/NavbarHome';
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <div className='bg-primary-red'>
        <div className='container mx-auto'>
          <HeaderNav/>
          <NavbarHome/>
        </div>
      </div> */}
      <HeroSection/>
      <AboutSection/>
      <TOBKSection/>
      <BerlatihSection/>
      <GoNewsSection/>
      <FooterSection/>
      <NavbarHome/>
    </div>
  )
}

Home.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home