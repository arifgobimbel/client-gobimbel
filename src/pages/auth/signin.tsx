import BlankLayout from '@/components/Layouts/BlankLayout';
import React from 'react'

const SignIn = () => {
  return (
    <div>SignIn</div>
  )
}

SignIn.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignIn