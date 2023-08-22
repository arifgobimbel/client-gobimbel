import BlankLayout from '@/components/Layouts/BlankLayout';
import React from 'react'

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

SignUp.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignUp