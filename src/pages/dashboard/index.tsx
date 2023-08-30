import React, { useState } from "react";
import HomeLayout from "@/components/Layouts/HomeLayout";
import { TiPencil } from "react-icons/ti";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import { XMark } from "../../../public/assets/svg";
import { Buttons, IconUtbk } from "@/components/ElementComponent";
import TopskorLeaderboard from "@/components/AtributComponent/TopskorLeaderboard";

const kelas = [
  { class: "4 SD" },
  { class: "5 SD" },
  { class: "6 SD" },
  { class: "7 SMP" },
  { class: "8 SMP" },
  { class: "9 SMP" },
  { class: "10 SMA" },
  { class: "11 SMA" },
  { class: "11 SMA IPA" },
  { class: "11 SMA IPS" },
  { class: "12 SMA" },
  { class: "12 SMA IPA" },
  { class: "12 SMA IPS" },
  { class: "10 SMK" },
  { class: "11 SMK" },
  { class: "12 SMK" },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [activeClass, setActiveClass] = useState<number | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClassClick = (index: number) => {
    setActiveClass(index === activeClass ? null : index);
  };
  return (
    <div>
      {/* Dialog Modal */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={open}
        size="xs"
        handler={() => handleOpen}
      >
        <DialogBody
          divider
          className="h-auto overflow-y-auto no-scrollbar text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleClose}
            />
          </div>
          {/* START:Content */}
          <div className="kelas">
            <h2 className="font-semibold text-base mb-2">Pilih Kelasmu</h2>
            <ul className="flex gap-x-2 gap-y-3 items-center flex-wrap">
              {kelas.map((item: any, index: number) => (
                <li
                  key={index}
                  className={`border border-black rounded-lg max-w-max cursor-pointer ${
                    activeClass === index ? "bg-primary-red text-white" : ""
                  }`}
                  onClick={() => handleClassClick(index)}
                >
                  <p className="uppercase text-xs p-2 font-semibold">
                    {item.class}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="sekolah mt-6">
            <h2 className="font-semibold text-base mb-1">
              Masukkan Nama Sekolahmu
            </h2>
            <Input label="Masukkan Nama Sekolahmu" crossOrigin={undefined} />
          </div>
          {/* END:Content */}
          <div className="flex justify-center mt-10 mb-4">
            <Buttons
              label="Simpan"
              className="bg-primary-red text-white font-semibold max-w-max px-10 py-2 shadow-button"
              onClick={handleClose}
            />
          </div>
        </DialogBody>
      </Dialog>
      <div className="container lg:mx-auto">
        <div className="mt-20 mx-4">
          <p className="font-semibold text-xl">Halo, Muhammad Aji Massaid</p>
          <div className="flex gap-x-2 items-center mt-10">
            <p>
              Kamu adalah siswa kelas <b>PILIH KELAS</b> dan{" "}
              <b>ISI NAMA SEKOLAHMU</b>
            </p>
            <div className="bg-secondary-graylight-300 rounded-full grid items-center">
              <TiPencil
                className="p-1 fill-black w-6 h-6 cursor-pointer"
                onClick={handleOpen}
              />
            </div>
          </div>
          <p className="my-6">
            Saat ini kamu terdaftar dalam program{" "}
            <b>Reguler TWT 12 SMA GO KREASI Materi Sekolah & SNBT 2023/2024</b>
          </p>
          <div className="flex gap-x-2 items-center mt-10">
            <p>
              Kamu ingin masuk <b>PILIHAN 1</b>, untuk lolos jurusan tersebut
              dibutuhkan <b>SKOR</b>. Dan kamu memilih <b>PILIHAN 2</b>, untuk
              lolos jurusan tersebut dibutuhkan <b>SKOR</b>. Saat ini kamu belum
              ada skor. Segera berlatih dengan 9x TOBK dan mengerjakan minimal
              12000 Latihan Soal agar lolos UTBK-SNBT 2024
            </p>
            <div className="bg-secondary-graylight-300 rounded-full grid items-center">
              <TiPencil
                className="p-1 fill-black w-6 h-6 cursor-pointer"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
        {/* Peluang PTN */}
        <div className="flex-col md:flex gap-x-4 items-center mt-8 mx-4">
          <p className="font-semibold text-lg text-center lg:text-left mb-2 lg:mb-0">Cek peluang lolos PTN 2024</p>
          <div className="flex gap-x-3 items-center px-4 py-3 rounded-xl border-4  border-primary-red">
            <IconUtbk />
            <p className="font-semibold">PTN-Clopedia 2024</p>
          </div>
        </div>
        {/* START:Leaderboard */}
        <TopskorLeaderboard/>
        {/* END:Leaderboard */}
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Dashboard;
