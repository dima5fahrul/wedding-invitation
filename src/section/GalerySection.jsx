import React, { useContext } from "react";
import MyModal from "../components/Modal";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "../context/GlobalContext";

export default function GalerySection({}) {
  const { state } = useContext(GlobalContext);
  const {
    images,
    modalIsOpen,
    handleOpenModal,
    handleCloseModal,
    selectedImageIndex,
    handleAccountHover,
    handleCopy,
    accountHover,
    navigate,
    onTap,
    onTapRight,
    onTapLeft,
    prevSelectedImageIndex,
  } = state;

  return (
    <>
      <section className="w-screen bg-gradient-to-b from-black to-neutral-800 text-white py-10">
        <div
          className="flex flex-col justify-center h-auto text-center items-center lg:px-28 lg:py-20 px-10 py-10"
          data-aos="fade-down"
          data-aos-duration={1000}
        >
          <h1 className="font-sacramento text-4xl">Momen</h1>
          <h1 className="font-sacramento">Bahagia Kami</h1>
          <p className="font-quicksand font-medium text-xl mt-10">
            "Mencintai bukan untuk menyamai, tetapi keikhlasan menerima
            perbedaan."
          </p>
        </div>
        <div className="lg:px-40 px-5 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:mb-5">
            {images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] lg:w-1/3 rounded-lg overflow-hidden"
              >
                <img
                  onClick={() => handleOpenModal(index)}
                  src={image}
                  alt=""
                  className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter hover:brightness-75"
                />
              </div>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col gap-4 justify-center">
            {images.slice(3, 5).map((image, index) => (
              <div
                key={index + 3}
                className="aspect-[3/4] lg:w-1/3 rounded-lg overflow-hidden"
              >
                <img
                  onClick={() => handleOpenModal(index + 3)}
                  src={image}
                  alt=""
                  className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter hover:brightness-75"
                />
              </div>
            ))}
          </div>

          <MyModal
            visible={modalIsOpen}
            closeModal={handleCloseModal}
            images={images}
            selectedImageIndex={selectedImageIndex}
            navigate={navigate}
            prevSelectedImageIndex={prevSelectedImageIndex}
            onTap={onTap}
            onTapRight={onTapRight}
            onTapLeft={onTapLeft}
          />
        </div>

        <div className="flex justify-center items-center mt-10">
          <div
            className="container bg-neutral-600 h-[40rem] w-11/12 lg:w-1/2 rounded-3xl flex flex-col justify-center items-center text-center lg:px-14 px-5"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <p className="font-sacramento lg:text-5xl text-4xl mb-5">
              {" "}
              Wedding Gift
            </p>
            <p className="font-quicksand font-medium text-sm lg:text-base mb-5">
              Bagi keluarga dan sahabat yang berkenan mengirimkan hadiah dengan
              tetap melaksanakan protokol kesehatan,silahkan mengirimkannya
              melalui tautan berikut :
            </p>

            <p className="font-quicksand font-bold text-sm lg:text-base mb-2 mt-5">
              BNI a.n Dimas Bagus Fajar Arissandi
            </p>
            <p className="font-quicksand font-bold text-sm lg:text-base mb-5">
              1130753049
            </p>
            <button
              className="rounded-xl flex flex-row bg-white hover:bg-black justify-center items-center gap-2 text-black hover:text-white"
              onMouseEnter={handleAccountHover}
              onMouseLeave={handleAccountHover}
              onClick={handleCopy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 16 16"
                id="copy"
                fill={accountHover ? "black" : "white"}
              >
                <path
                  fill={accountHover ? "white" : "black"}
                  d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z"
                />
              </svg>

              <p className="font-normal">Salin No. Rekening</p>
            </button>

            <p className="font-quicksand font-bold text-sm lg:text-base mt-5 mb-2">
              BRI a.n ELSA FEBRIANA
            </p>
            <p className="font-quicksand font-bold text-sm lg:text-base mb-5">
              807401000543502
            </p>
            <button
              className="rounded-xl flex flex-row bg-white hover:bg-black justify-center items-center gap-2 text-black hover:text-white"
              onMouseEnter={handleAccountHover}
              onMouseLeave={handleAccountHover}
              onClick={handleCopy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 16 16"
                id="copy"
                fill={accountHover ? "black" : "white"}
              >
                <path
                  fill={accountHover ? "white" : "black"}
                  d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z"
                />
              </svg>

              <p className="font-normal">Salin No. Rekening</p>
            </button>

	    <p className="font-quicksand font-bold text-sm lg:text-base mt-5 mb-2">
              MANDIRI a.n DIMAS FAHRUL PUTRA A
            </p>
            <p className="font-quicksand font-bold text-sm lg:text-base mb-5">
              1400020788619
            </p>
            <button
              className="rounded-xl flex flex-row bg-white hover:bg-black justify-center items-center gap-2 text-black hover:text-white"
              onMouseEnter={handleAccountHover}
              onMouseLeave={handleAccountHover}
              onClick={handleCopy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 16 16"
                id="copy"
                fill={accountHover ? "black" : "white"}
              >
                <path
                  fill={accountHover ? "white" : "black"}
                  d="M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z"
                />
              </svg>

              <p className="font-normal">Salin No. Rekening</p>
            </button>

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
