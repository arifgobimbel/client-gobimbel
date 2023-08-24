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

interface FasilitasKamiProps {
  icon: any;
  title: string;
}

const FasilitasKami: FasilitasKamiProps[] = [
  { icon: IconFK1, title: "Pengajar Berkualitas dan THE KING" },
  { icon: IconFK2, title: "Tutorial Service Time (TST)" },
  { icon: IconFK3, title: "Try Out & Evaluasi Prestasi Belajar" },
  { icon: IconFK4, title: "Psikotest" },
  { icon: IconFK5, title: "Sistem IRT (Item Response Theory)" },
  { icon: IconFK6, title: "Meeting on Maximizing Motivation" },
  { icon: IconFK7, title: "Buku Penunjang Belajar + Ribuan Latihan Soal" },
  { icon: IconFK8, title: "Racing Soal" },
];

export default FasilitasKami;
