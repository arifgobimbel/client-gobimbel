import React from "react";
import {
  Copyright,
  Facebook,
  GAStore,
  Instagram,
  Line,
  LogoHeader,
  Mail,
  MobilePhone,
  Phone,
  WA,
  XTwitter,
  Youtube,
  BgFooter
} from "../../../public/assets/svg";
import Link from "next/link";

interface FooterProps {
  icon?: any;
  title: string;
}

const HubungiKami: FooterProps[] = [
  { icon: Phone, title: "(022)4218177" },
  { icon: Mail, title: "officialgopusat@gmail.com" },
  { icon: WA, title: "+62 811 2468 988" },
  { icon: Line, title: "Ganesha Operation" },
];

const InfoLanjutan: FooterProps[] = [
  { title: "FAQ" },
  { title: "Kontak" },
  { title: "Syarat dan Ketentuan" },
  { title: "Kebijakan Privasi" },
  { title: "Refund Policy" },
];

const MediaSosial = [
  { icon: Youtube, link: "https://google.com" },
  { icon: Instagram, link: "https://google.com" },
  { icon: Facebook, link: "https://google.com" },
  { icon: XTwitter, link: "https://google.com" },
];

const FooterSection = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex justify-center">
          <div className="text-center text-white font-bold text-lg">
            <LogoHeader className="w-48 lg:w-[18rem] inline" />
            <h3 className="text-sm">The King of The Fastest Solution</h3>
          </div>
        </div>
        {/* menus */}
        <div className="menus flex flex-col md:flex-row justify-between">
          {/* Kolom1 */}
          <div className="flex flex-col lg:flex-row mt-8 md:mt-10 lg:mt-0 gap-x-4 items-center text-sm md:w-1/3">
            <MobilePhone className="w-60 h-60 md:w-52 md:h-52 lg:w-[25rem] lg:h-[25rem]" />
            <div className="lg:mt-40 mt-6 px-4 md:px-0 text-white">
              <p>
                Saat ini aplikasi bimbel online
                <b className="font-bold"> GO KREASI</b> bisa di download di
                Google Play dan App Store
              </p>
              <GAStore className="w-40 mx-auto h-auto md:w-32 md:h-32" />
            </div>
          </div>
          {/* Kolom2 */}
          <div className="md:w-1/3 w-full px-4 md:px-0 text-white mt-10 md:grid justify-center">
            <div>
              <h2 className="font-bold text-lg">Hubungi Kami</h2>
              <ul>
                {HubungiKami.map((item, index) => (
                  <li key={index} className="flex gap-x-4 items-center my-4">
                    <item.icon className="w-5 h-5" />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Kolom3 */}
          <div className="md:w-1/3 px-4 md:px-0 text-white mt-10 md:grid justify-center">
            <div>
              <h2 className="font-bold text-lg mb-3">Info Lebih Lanjut</h2>
              <ul>
                {InfoLanjutan.map((item, index) => (
                  <li key={index} className="mb-4">
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* media sosial */}
        <ul className="flex justify-center gap-x-4 mt-4 md:mt-0 items-center">
          {MediaSosial.map((item, index) => (
            <li key={index}>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <Link href={item.link}>
                  <item.icon className="w-6 h-6" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-white mt-6 pb-8 px-4 md:px-0 text-sm flex justify-center md:items-center gap-x-2">
          <Copyright className="w-5 h-5"/>
          <p>Copyright 2023, Ganesha Operation. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
