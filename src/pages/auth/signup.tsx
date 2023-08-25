import AuthLayout from '@/components/Layouts/AuthLayout';
import React from 'react'

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

SignUp.getLayout = (page: any) => {
  return <AuthLayout>{page}</AuthLayout>;
};
export default SignUp