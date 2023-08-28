import React, { useState } from "react";
import Fasilitas from "@/data/Fasilitas";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { ArrowRight, XMark } from "../../../public/assets/svg";
import Slider from "react-slick";
import { settingFasilitas } from "@/utils/SetingSlider";


const FasilitasSection = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});

  const handleOpen = (index: number) => {
    setOpen((prev) => ({ ...prev, [index]: true }));
  };

  const handleClose = (index: number) => {
    setOpen((prev) => ({ ...prev, [index]: false }));
  };
  return (
    <div className="bg-secondary-graylight-100">
      <div className="container mx-auto py-8 md:py-16">
        <h1 className="mb-6 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          Fasilitas Kami
        </h1>
        <div className="flex flex-col gap-12">
          <Slider {...settingFasilitas}>
          {Fasilitas.map((item, index) => (
            <div key={index}>
            <div
              className="border border-primary-red bg-white w-40 h-40 md:w-64 md:h-64 p-4 rounded-full text-center text-black grid items-center mx-auto md:mx-0"
            >
              <div className="mx-auto">
                <item.icon className="w-12 h-12 md:w-24 md:h-24" />
              </div>
              <p className="text-xs md:text-sm font-semibold -mt-2 md:-mt-4 md:px-6">
                {item.title}
              </p>
              <button
                className="flex gap-2 justify-center items-center text-xs text-primary-gray-400 -mt-4"
                onClick={() => handleOpen(index)}
              >
                Lihat Detail
                <ArrowRight className="w-2 h-2 fill-primary-gray-400" />
              </button>
              {/* <Dialog
                className="border-4 border-primary-red rounded-3xl px-2 h-fit"
                open={open[index]}
                size="md"
                handler={() => handleOpen(index)}
              >
                <DialogBody
                  divider
                  className="h-auto overflow-y-auto no-scrollbar text-black border-y-0 font-poppins"
                >
                  <div className="flex justify-end items-center mt-2 mb-6 relative">
                    <XMark
                      className="w-4 h-4 cursor-pointer fixed"
                      onClick={() => handleClose(index)}
                    />
                  </div>
                  <h1 className="font-bold text-black text-xl text-center mb-4">
                    {item.title}
                  </h1>
                  <item.link />
                </DialogBody>
              </Dialog> */}
            </div>
            </div>
          ))}
          </Slider>
          <Slider {...settingFasilitas}>
          {Fasilitas.map((item, index) => (
            <div key={index}>
            <div
              className="border border-primary-red bg-white w-40 h-40 md:w-64 md:h-64 p-4 rounded-full text-center text-black grid items-center mx-auto md:mx-0"
            >
              <div className="mx-auto">
                <item.icon className="w-12 h-12 md:w-24 md:h-24" />
              </div>
              <p className="text-xs md:text-sm font-semibold -mt-2 md:-mt-4 md:px-6">
                {item.title}
              </p>
              <button
                className="flex gap-2 justify-center items-center text-xs text-primary-gray-400 -mt-4"
                onClick={() => handleOpen(index)}
              >
                Lihat Detail
                <ArrowRight className="w-2 h-2 fill-primary-gray-400" />
              </button>
              <Dialog
                className="border-4 border-primary-red rounded-3xl px-2 h-fit"
                open={open[index]}
                size="md"
                handler={() => handleOpen(index)}
              >
                <DialogBody
                  divider
                  className="h-auto overflow-y-auto no-scrollbar text-black border-y-0 font-poppins"
                >
                  <div className="flex justify-end items-center mt-2 mb-6 relative">
                    <XMark
                      className="w-4 h-4 cursor-pointer fixed"
                      onClick={() => handleClose(index)}
                    />
                  </div>
                  <h1 className="font-bold text-black text-xl text-center mb-4">
                    {item.title}
                  </h1>
                  <item.link />
                </DialogBody>
              </Dialog>
            </div>
            </div>
          ))}
          </Slider>
          </div>
      </div>
    </div>
  );
};

export default FasilitasSection;
