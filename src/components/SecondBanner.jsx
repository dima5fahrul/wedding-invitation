import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function SecondBanner({}) {
  const { state } = useContext(GlobalContext);
  const { showNextPage, handleNextPage, handleMarkerHover, onMarkerHover } =
    state;

  useEffect(() => {
    if (showNextPage) {
      console.log(showNextPage);
      AOS.init({
        easing: "ease-in-out",
        once: true,
      });
    }
  }, [showNextPage === true]);

  return (
    <>
      <section className="w-screen">
        <div className="bg-img-second-banner flex flex-col lg:justify-center justify-start bg-center h-screen pt-5 bg-cover bg-no-repeat text-center items-center dark:text-black text-black px-6">
          <h1
            className="font-sacramento lg:text-5xl text-4xl"
            data-aos="fade-down"
            data-aos-duration={2000}
          >
            Dimas & Elsa
          </h1>
          <p
            className="font-quicksand text-base lg:text-lg font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            7 Oktober 2023
          </p>
        </div>
      </section>
    </>
  );
}
