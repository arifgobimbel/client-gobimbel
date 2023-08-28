import HomeLayout from '@/components/Layouts/HomeLayout';
import { useState} from 'react'
import Select from 'react-select';
import { IlustrasiEmptyProduct } from '../../../public/assets/svg';
import { Button, Card } from '@material-tailwind/react';
import ProductDiJual from '@/data/ProductDiJual';

const Kedinasan = () => {

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
      <div className='container mx-auto px-4 sm:px-0'>
        <div className='text-center pt-6 sm:pt-12 pb-2 sm:pb-6'>
        <h2 className='font-bold text-2xl mb-3'>Kamu Pilih Program Kedinasan Tahun Ajaran 2023/2024</h2>
        <p>
        Program Kedinasan adalah program GO Bimbel Offline khusus bagi kamu yang ingin melanjutkan jenjang pendidikan tinggi ke PT Kedinasan negara. Di program ini kamu akan mengikuti KBM (Kegiatan Belajar Mengajar) secara tatap muka di gedung GO. Kamu juga mendapatkan akses ke aplikasi GO yaitu GO KREASI untuk mengerjakan Buku Sakti (kumpulan latihan soal), TOBK, Racing Soal, Leaderboard, Social Network, Laporan Belajar, Rencana Belajar, Video Pembelajaran, Video Solusi dan lainnya dan lainnya
        </p>
        </div>
        <div className='sm:flex items-center gap-6 my-4'>
          <div className='sm:flex gap-4 basis-[90%]'>
            <div className='w-full mb-3 sm:mb-0'>
              <label>Kota</label>
              <Select options={optionDummy}/>
            </div>
            <div className='w-full mb-3 sm:mb-0'>
              <label>Outlet</label>
              <Select options={optionDummy}/>
            </div>
            <div className='w-full mb-3 sm:mb-0'>
              <label>Kelas</label>
              <Select options={optionDummy}/>
            </div>
          </div>
          <Button onClick={() => setIsProductEmpty(!IsProductEmpty)}>Cek Product</Button>
        </div>
        {
          IsProductEmpty?
          <div className='flex flex-col text-center items-center justify-center mb-24'>
          <IlustrasiEmptyProduct className="w-[28rem] h-[20rem] 2xl:w-[38rem] 2xl:h-[30rem]"/>
          <p>Pilih kota, outlet, dan kelas dulu untuk melihat produk terbaik untukmu</p>
          </div>
          :
          <div>
            <h2 className='text-3xl font-semibold my-4'>Product Go</h2>
            <div className='flex flex-col gap-6 mb-24'>
            {
              ProductDiJual.map((dataProduct, index) => (
              <Card key={index} shadow={false} className='flex px-4 py-6 border-4 border-primary-grey flex-row items-center'>
                <dataProduct.icon className="w-32 h-32"/>
                <div className='text-center w-full'>
                <h3 className='font-bold text-md sm:text-2xl mb-4'>{dataProduct.name}</h3>
                <h4 className='text-md sm:text-2xl'>{dataProduct.price}</h4>
                </div>
              </Card>
              ))
            }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

Kedinasan.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Kedinasan