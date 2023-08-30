import { Monster1, Monster2, Monster3 } from "../../public/assets/svg";

interface TopSkorProps {
  title: string;
  avatar: any;
  name: string;
  score: number;
}

const TopSkorDatas: TopSkorProps[] = [
  { title: "Nasional", avatar: Monster1, name: "Al Fajri", score: 12975 },
  { title: "Kota", avatar: Monster2, name: "Syaifal Illahi", score: 20001 },
  { title: "Cabang", avatar: Monster3, name: "Trevor", score: 8890 },
];

export default TopSkorDatas;
