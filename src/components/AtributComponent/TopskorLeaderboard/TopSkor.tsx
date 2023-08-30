import TopSkorDatas from "@/data/TopSkorDatas";
import { StarsLeft, StarsRight } from "../../../../public/assets/svg";
import { FormattedNumber } from "@/components/ElementComponent";

const TopSkor = () => {
  return (
    <div className="mx-16 my-10 py-10 border-2 border-primary-red rounded-3xl">
      <div className="flex justify-center gap-x-3 items-center">
        <StarsLeft className="w-28 h-auto" />
        <h1 className="top-skor-leaderboard text-2xl text-center text-white font-extrabold">
          TOP SKOR PENGERJAAN SOAL
        </h1>
        <StarsRight className="w-28 h-auto" />
      </div>
      {/* carousel */}
      <div className="flex gap-x-8 mt-20 mx-10">
        {TopSkorDatas.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -top-14 left-12 bg-white border border-primary-red rounded-xl text-center py-4 w-48">
            <p className="font-semibold">{item.title}</p>
          </div>
          <div>
            <div className="bg-primary-red -mt-6 grid items-center py-24 px-16 rounded-t-[2rem]">
              <item.avatar className="h-40" />
            </div>
            <div className="bg-white border-2 border-primary-red rounded-b-[2rem] py-6 text-center">
              <p className="font-semibold">{item.name}</p>
              <p className="mt-1">{FormattedNumber(item.score)}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TopSkor;
