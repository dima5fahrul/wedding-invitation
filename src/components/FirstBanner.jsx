import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function FirstBanner({}) {
  const { state } = useContext(GlobalContext);
  const { showNextPage, handleNextPage, handleMarkerHover, onMarkerHover } =
    state;

  return (
    <>
      <div
        className={`absolute bg-img-first-banner flex flex-col justify-center bg-cover bg-no-repeat w-screen h-screen text-center items-center dark:text-white text-white px-6 transition-all duration-1000 bg-center transform ${
          showNextPage ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <p className="font-quicksand text-lg font-bold mb-4">
          Undangan Pernikahan
        </p>
        <h1 className="font-sacramento text-5xl">Dimas & Elsa</h1>
        <p className="font-quicksand text-base mt-4">
          Yth. Bapak/Ibu/Saudara/i
        </p>
        <p className="font-quicksand text-3xl mt-4">LETING GASANDA</p>
        <p className="font-quicksand text-sm font-semibold mt-4">
          `Mohon maaf apabila ada terdapat kesalahan penulisan nama dan gelar`
        </p>
        <button
          type="button"
          onClick={handleNextPage}
          onMouseEnter={handleMarkerHover}
          onMouseLeave={handleMarkerHover}
          className={`mt-4 text-white bg-gray-800 hover:bg-white hover:border-black hover:text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-white dark:border-white border-white border flex flex-row gap-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 17.4792L9.14584 16.7083C7.67362 15.3611 6.45834 14.1979 5.5 13.2187C4.54167 12.2396 3.77778 11.3646 3.20834 10.5937C2.63889 9.82291 2.23959 9.125 2.01042 8.5C1.78126 7.875 1.66667 7.24305 1.66667 6.60416C1.66667 5.35416 2.08681 4.30902 2.92709 3.46874C3.76737 2.62847 4.80556 2.20833 6.04167 2.20833C6.83334 2.20833 7.56598 2.39583 8.23959 2.77083C8.9132 3.14583 9.5 3.68749 10 4.39583C10.5833 3.64583 11.2014 3.09374 11.8542 2.73958C12.5069 2.38541 13.2083 2.20833 13.9583 2.20833C15.1944 2.20833 16.2326 2.62847 17.0729 3.46874C17.9132 4.30902 18.3333 5.35416 18.3333 6.60416C18.3333 7.24305 18.2188 7.875 17.9896 8.5C17.7604 9.125 17.3611 9.82291 16.7917 10.5937C16.2222 11.3646 15.4583 12.2396 14.5 13.2187C13.5417 14.1979 12.3264 15.3611 10.8542 16.7083L10 17.4792Z"
              fill={onMarkerHover ? "black" : "white"}
            />
          </svg>
          Buka Undangan
        </button>
      </div>
    </>
  );
}
