import TesModalitas from "@/data/TesModalitas";

const Fasilitas7 = () => {
  return (
    <>
      <p>
        Parents Meeting merupakan pertemuan rutin antara managemen Ganesha
        Operation bareng orang tua SobatGO, pertemuan tersebut untuk
        menyampaikan progres pembelajaran kamu selama belajar di Ganesha
        Operation. Selain itu, Parents Meeting juga sebagai sarana untuk
        membangun komunikasi dan menyampaikan informasi terbaru tentang
        pendidikan kepada orang tua SobatGO.
      </p>
      <ul className="mt-4">
        {TesModalitas.map((item, index) => (
          <li key={index} className="flex gap-x-8 items-center mb-8">
            <div>
              <item.icon className="w-20 h-20" />
              <h3 className="text-center font-semibold mt-1">{item.iconTitle}</h3>
            </div>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fasilitas7;
