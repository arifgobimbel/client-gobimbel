import HomeLayout from '@/components/Layouts/HomeLayout';
import { useState} from 'react'
import Select from 'react-select';
import { Gold, IlustrasiEmptyProduct } from '../../../public/assets/svg';
import { Button, Card } from '@material-tailwind/react';

const Product1thn = () => {

  const [IsProductEmpty, setIsProductEmpty] = useState<boolean>(true)

  const optionDummy = [
    {
      value: 1,
      label: "Udin"
    },
    {
      value: 2,
      label: "Bambang"
    },
    {
      value: 3,
      label: "Nurdin"
    }
  ]

  return (
    <div>
      <div className='container mx-auto'>
        <div className='text-center pt-6 pb-2'>
        <h2 className='font-bold text-2xl'>Kamu Pilih Program GO KREASI Tahun Ajaran 2023/2024</h2>
        <p>
        Program GO KREASI adalah program GO Bimbel Online dimana kamu mendapatkan full akses pada aplikasi GO yaitu GO KREASI untuk mengerjakan Buku Sakti (kumpulan latihan soal+pembahasan), TOBK, Racing Soal, Leaderboard, Social Network, Laporan Belajar, Rencana Belajar, Video Pembelajaran, Video Solusi dan lainnya
        </p>
        </div>
        <div className='flex items-center gap-6 my-4'>
          <div className='flex gap-4 basis-[90%]'>
          <div className='w-full'>
            <label>Kota</label>
            <Select options={optionDummy}/>
          </div>
          <div className='w-full'>
            <label>Outlet</label>
            <Select options={optionDummy}/>
          </div>
          <div className='w-full'>
            <label>Kelas</label>
            <Select options={optionDummy}/>
          </div>
          </div>
          <Button onClick={() => setIsProductEmpty(!IsProductEmpty)}>Cek Product</Button>
        </div>
        {
          IsProductEmpty?
          <div className='flex flex-col items-center justify-center'>
          <IlustrasiEmptyProduct className="w-[28rem] h-[20rem] 2xl:w-[38rem] 2xl:h-[30rem]"/>
          <p>Pilih kota, outlet, dan kelas dulu untuk melihat produk terbaik untukmu</p>
          </div>
          :
          <div>
            <Card>
              <Gold className="w-24 h-24"/>
            </Card>
          </div>
        }
      </div>
    </div>
  )
}

Product1thn.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Product1thn