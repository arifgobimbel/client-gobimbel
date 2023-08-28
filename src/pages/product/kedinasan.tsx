import HomeLayout from '@/components/Layouts/HomeLayout';
import React from 'react'

const Kedinasan = () => {
  return (
    <div>Kedinasan</div>
  )
}
Kedinasan.getLayout = (page: any) => {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Kedinasan