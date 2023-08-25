import AuthLayout from '@/components/Layouts/AuthLayout';
import { Button, Card, Checkbox, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react'

const SignIn = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Masuk.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <Button className="mt-6" fullWidth>
          Masuk
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  )
}

SignIn.getLayout = (page: any) => {
  return <AuthLayout>{page}</AuthLayout>;
};
export default SignIn