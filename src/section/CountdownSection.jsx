import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import countdownBg from "../assets/countdown-bg.jpg";

export default function CountdownSection({}) {
  const { state } = useContext(GlobalContext);
  const { days, hours, minutes, seconds } = state;

  return (
    <>
      <section
        className="w-screen bg-no-repeat bg-cover bg-center text-white dark:text-white"
        style={{
          backgroundImage: `url(${countdownBg})`,
        }}
      >
        <div className="flex flex-col justify-center h-auto text-center items-center lg:px-28 lg:py-40 px-10 pt-10 pb-28">
          <p
            className="font-sacramento lg:text-5xl text-3xl"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            Menuju Hari Bahagia
          </p>
          <p
            className="font-quicksand lg:text-lg text-sm font-medium mt-5"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            Siang dan malam berganti begitu cepat, di antara saat-saat
            mendebarkan yang belum pernah kami rasakan sebelumnya. Kami nantikan
            kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji
            suci kami di hari yang bahagia
          </p>
          {/* time countdown */}
          <div
            className="flex flex-row justify-center lg:gap-44 gap-12 mt-14"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="flex flex-col justify-center items-center">
              <p className="font-quicksand font-medium text-4xl">
                {days < 10 ? `0${days}` : days}
              </p>
              <p className="font-quicksand font-semibold">Hari</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-quicksand font-medium text-4xl">
                {hours < 10 ? `0${hours}` : hours}
              </p>
              <p className="font-quicksand font-semibold">Jam</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-quicksand font-medium text-4xl">
                {minutes < 10 ? `0${minutes}` : minutes}
              </p>
              <p className="font-quicksand font-semibold">Menit</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-quicksand font-medium text-4xl">
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
              <p className="font-quicksand font-semibold">Detik</p>
            </div>
          </div>
          {/* end time countdown */}
        </div>
      </section>
    </>
  );
}
