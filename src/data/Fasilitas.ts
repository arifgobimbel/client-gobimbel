import {
  IconFK1,
  IconFK2,
  IconFK3,
  IconFK4,
  IconFK5,
  IconFK6,
  IconFK7,
  IconFK8,
} from "../../public/assets/svg";

interface FasilitasProps {
  icon: any;
  title: string;
  link: string;
}

const Fasilitas: FasilitasProps[] = [
  {
    icon: IconFK1,
    title: "Pengajar Berkualitas dan THE KING",
    link: "https://gobimbel.com",
  },
  {
    icon: IconFK2,
    title: "Tutorial Service Time (TST)",
    link: "https://gobimbel.com",
  },
  {
    icon: IconFK3,
    title: "Try Out & Evaluasi Prestasi Belajar",
    link: "https://gobimbel.com",
  },
  { icon: IconFK4, title: "Psikotest", link: "https://gobimbel.com" },
  {
    icon: IconFK5,
    title: "Sistem IRT (Item Response Theory)",
    link: "https://gobimbel.com",
  },
  {
    icon: IconFK6,
    title: "Meeting on Maximizing Motivation",
    link: "https://gobimbel.com",
  },
  {
    icon: IconFK7,
    title: "Buku Penunjang Belajar + Ribuan Latihan Soal",
    link: "https://gobimbel.com",
  },
  { icon: IconFK8, title: "Racing Soal", link: "https://gobimbel.com" },
];

export default Fasilitas;
