import HomeLayout from '@/components/Layouts/HomeLayout';
import React from 'react'

const Gokre = () => {
  return (
    <div>Gokre</div>
  )
}

Gokre.getLayout = (page: any) => {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Gokre