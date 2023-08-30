import React from "react";

export default function BrideSection({}) {
  return (
    <>
      <section className="bg-gradient-to-b from-black to-neutral-800 w-screen text-white">
        <div className="flex flex-col justify-center items-center h-auto text-center lg:py-20 py-16">
          <h1
            className="text-2xl lg:mb-5 mb-7"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>
          <p
            className="font-quicksand font-semibold text-base mb-7 lg:mb-5 lg:px-60 px-14"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan- Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir."
          </p>
          <p
            className="font-semibold font-quicksand text-base"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            (Qs. Ar-Rum: 21 )
          </p>
        </div>

        <div className="flex flex-col h-auto text-center lg:py-20 py-16 gap-16 px-5">
          <p
            className="font-sacramento lg:text-5xl text-4xl"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            Sang Mempelai
          </p>
          <div className="flex lg:flex-row flex-col justify-evenly items-center">
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <p className="font-sacramento text-5xl">Dimas</p>
              <div className="border border-t w-40"></div>
              <p className="font-quicksand font-semibold text-2xl mt-5">
                Dimas Bagus
              </p>
              <p className="font-quicksand text-2xl mb-5 font-semibold">
                Fajar Arissandi
              </p>
              <p className="font-quicksand text-base font-semibold">
                Putra dari
              </p>
              <p className="font-quicksand text-base font-semibold">
                Ibu Tuminah
              </p>
            </div>

            <p
              className="font-sacramento lg:text-5xl text-4xl lg:my-0 my-16"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              - & -
            </p>

            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <p className="font-sacramento text-5xl">Elsa</p>
              <div className="border border-t w-24"></div>
              <p className="font-quicksand text-2xl mt-8 mb-8 font-semibold">
                Elsa Febriana
              </p>
              <p className="font-quicksand text-base font-semibold">
                Putri dari
              </p>
              <p className="font-quicksand text-base font-semibold">
                Ibu Anik Ulfa
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
