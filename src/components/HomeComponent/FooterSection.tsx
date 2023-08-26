import React from "react";
import {
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
} from "../../../public/assets/svg";

interface FooterProps {
  icon?: any;
  title?: string;
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

const MediaSosial: FooterProps[] = [
  { icon: Youtube },
  { icon: Instagram },
  { icon: Facebook },
  { icon: XTwitter },
];

const FooterSection = () => {
  return (
    <footer className="bg-primary-red">
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex justify-center">
          <div className="text-center text-white font-bold text-lg">
            <LogoHeader className="w-[18rem]" />
            <h3>The King of The Fastest Solution</h3>
          </div>
        </div>
        {/* menus */}
        <div className="menus flex justify-between items-center">
          {/* Kolom1 */}
          <div className="flex gap-x-4 items-center text-sm w-1/3">
            <MobilePhone className="w-[25rem] h-[25rem]" />
            <div className="mt-40 text-white">
              <p>
                Saat ini aplikasi bimbel online
                <b className="font-bold"> GO KREASI</b> bisa di download di
                Google Play dan App Store
              </p>
              <GAStore className="w-32 h-32" />
            </div>
          </div>
          {/* Kolom2 */}
          <div className="w-1/3 text-white mt-10">
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
          {/* Kolom3 */}
          <div className="w-1/3 text-white mt-10">
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
        {/* media sosial */}
        <ul className="flex justify-center gap-x-4 items-center">
          {MediaSosial.map((item, index) => (
            <li key={index}>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <item.icon className="w-6 h-6"/>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-center text-white mt-6 pb-8">Copyright 2023, Ganesha Operation. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;
