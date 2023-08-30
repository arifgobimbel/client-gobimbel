import BlankLayout from '@/components/Layouts/BlankLayout';
import React, { useState } from 'react'
import { ITB, IlustrasiUniv, LogoGoWithColor } from '../../public/assets/svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Card, CardBody } from '@material-tailwind/react';
import Select from 'react-select'
import OptionUniversitas from '@/data/OptionUniversitas';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const PtnClopedia = () => {

    const [isEmptyPTN, setIsEmptyPTN] = useState(true)

    const seriesDaya = [
        {
            name: "Jumlah Peminat",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Daya Tampung",
            data: [12, 51, 25, 31, 79, 22, 59, 61, 108]
        }
    ]

    const optionsDaya:any = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            enabled: false
          }
        },
        colors: ['#DF6A18', '#FDD100'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Daya Tampung & Peminat ',
          align: 'left'
        },
        grid: {
            show: false
        //   row: {
        //     borderColor: '#DF6A18',
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        },
        xaxis: {
          categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        }
      }

      const seriesSimulasi = [
        {
            name: "Passing Grade",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Skor TOBK",
            data: [12, 51, 25, 31, 79, 22, 59, 61, 108]
        }
    ]

    const optionsSimulasi:any = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#DF6A18', '#17B26A'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Simulasi UTBK',
          align: 'left'
        },
        grid: {
            show: false
        //   row: {
        //     borderColor: '#DF6A18',
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        },
        xaxis: {
          categories: ['TOBK 1', 'TOBK 2', 'TOBK 3', 'TOBK I1', 'TOBK I2', 'TOBK I3', 'TOBK SI1', 'TOBK SI2', 'TOBK SI3'],
        }
      }

  return (
    <main>
        <div className='container mx-auto'>
            <div>
                <LogoGoWithColor className="w-36 h-20"/>
            </div>
            <div className='flex justify-between mt-4'>
                <Link href="/">
                <FiArrowLeft className="w-6 h-6 mb-12"/>
                </Link>
                <div>
                    <Card shadow={false}>
                        <CardBody className='bg-primary-red py-2 rounded-t-lg'>
                            <h4 className='font-bold text-white'>UTBK 2024</h4>
                        </CardBody>
                        <CardBody className='border-2 border-primary-gray-100 rounded-b-lg text-center p-0'>
                        <h4 className='font-bold text-2xl'>299</h4>
                        <p>Hari Lagi</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-2'>PTN-Clopedia</h3>
                <p className='mb-6'><span className='font-bold'>PTN-Clopedia</span> adalah 'kaca mata' pilihan <br/>yang memperjelas pilihanmu dalam <span className='font-bold'>menentukan kampus impian</span></p>
                <div className='flex justify-between gap-6'>
                    <Select options={OptionUniversitas} onChange={() => setIsEmptyPTN(!isEmptyPTN)} className='w-full'/>
                    <Select options={OptionUniversitas} onChange={() => setIsEmptyPTN(!isEmptyPTN)} className='w-full'/>
                </div>
            </div>
            {
                isEmptyPTN?
                <div className='flex flex-col justify-center items-center py-12'>
                    <IlustrasiUniv className="h-96 w-96 mb-4"/>
                    <p>Pilih PTN dan jurusan impianmu terlebih dahulu, ya sob!</p>
                </div>
                :
                <div className='py-12'>
                    <div className='flex mb-4'>
                        <Card shadow={false} className='border-2 border-primary-grey bg-secondary-graylight-100'>
                            <CardBody className='flex gap-6 items-center relative'>
                            <div>
                                <ITB className="h-24 w-24"/>
                            </div>
                            <div>
                                <p className='text-sm'>INSTITUT TEKNOLOGI BANDUNG</p>
                                <h3 className='font-bold'>SEKOLAH BISNIS DAN MANAJEMEN</h3>
                                <p>Passing Grade: <span className='font-bold'>879</span> | Peminat: <span className='font-bold'>600</span> | Daya Tampung: <span className='font-bold'>150</span></p>
                            </div>
                            <div className='bg-primary-gray-100 px-4 py-2 rounded-full absolute top-4 right-2'>
                                <p className='text-sm font-bold text-black'>
                                SOSHUM
                                </p>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='md:flex gap-6'>
                        <div className='w-full'>
                        <ReactApexChart series={seriesDaya} options={optionsDaya} type="line" height={350} width={'100%'} />
                        </div>
                        <div className='w-full'>
                        <ReactApexChart series={seriesSimulasi} options={optionsSimulasi} type="line" height={350} width={'100%'} />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='font-bold mb-2'>Deskripsi Jurusan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. </p>
                        <h3 className='font-bold mt-4 mb-2'>Lapangan Kerja</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. Lorem ipsum dolor sit amet consectetur. Semper gravida amet laoreet aliquet eget nibh. Quisque amet urna sit sem elementum neque sapien. Et et malesuada. </p>
                    </div>
                </div>
            }
        </div>
    </main>
  )
}

PtnClopedia.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default PtnClopedia