import React, { useState } from "react";
import "../app.css";
import MyModal from "../components/Modal";

// function TransitionPage() {
//   const images = [
//     "https://images.unsplash.com/photo-1692003509966-80ca67c85068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     "https://plus.unsplash.com/premium_photo-1691031429909-539e8af8b4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     "https://images.unsplash.com/photo-1691873220133-13959ae99da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
//     "https://images.unsplash.com/photo-1691745034385-d5376238a97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//   ];

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [prevSelectedImageIndex, setPrevSelectedImageIndex] = useState(0);
//   const [onTap, setOnTap] = useState(false);
//   const [onTapRight, setOnTapRight] = useState(false);
//   const [onTapLeft, setOnTapLeft] = useState(false);

//   const handleOpenModal = (index) => {
//     setSelectedImageIndex(index);
//     setModalIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   const navigate = (direction) => {
//     setOnTap(true);
//     setTimeout(() => {
//       setOnTap(false);
//     }, 300);

//     if (direction === 1) {
//       setOnTapRight(true);
//       setTimeout(() => {
//         setOnTapRight(false);
//       }, 300);
//     } else {
//       setOnTapLeft(true);
//       setTimeout(() => {
//         setOnTapLeft(false);
//       }, 300);
//     }

//     setTimeout(() => {
//       setSelectedImageIndex(
//         (prevSelectedImageIndex) =>
//           (prevSelectedImageIndex + direction + images.length) % images.length
//       );
//     }, 300);

//     setPrevSelectedImageIndex(selectedImageIndex);
//     if (!modalIsOpen && selectedImageIndex === prevSelectedImageIndex - 1) {
//       setModalIsOpen(true);
//     } else if (!modalIsOpen) {
//       setModalIsOpen(true);
//     }
//   };

//   return (
//     <>
//       <div className="w-screen py-5 px-5">
//         <div className="flex flex-row gap-4 mb-5">
//           {images.slice(0, 3).map((image, index) => (
//             <div
//               key={index}
//               className="aspect-[3/4] lg:w-1/3 rounded-lg overflow-hidden"
//             >
//               <img
//                 onClick={() => handleOpenModal(index)}
//                 src={image}
//                 alt=""
//                 className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter hover:brightness-75"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex lg:flex-row flex-col gap-4 justify-center">
//           {images.slice(3, 5).map((image, index) => (
//             <div
//               key={index + 3}
//               className="aspect-[3/4] lg:w-1/3 rounded-lg overflow-hidden"
//             >
//               <img
//                 onClick={() => handleOpenModal(index + 3)}
//                 src={image}
//                 alt=""
//                 className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter hover:brightness-75"
//               />
//             </div>
//           ))}
//         </div>

//         <MyModal
//           visible={modalIsOpen}
//           closeModal={handleCloseModal}
//           images={images}
//           selectedImageIndex={selectedImageIndex}
//           navigate={navigate}
//           prevSelectedImageIndex={prevSelectedImageIndex}
//           onTap={onTap}
//           onTapRight={onTapRight}
//           onTapLeft={onTapLeft}
//         />
//       </div>
//     </>
//   );
// }

// export default TransitionPage;

export default function Testing() {
  const [showNextPage, setShowNextPage] = useState(false);

  const handleNextPage = () => {
    setShowNextPage(true);
    console.log(showNextPage);
  };

  return (
    <>
      <div
        className={`absolute h-screen justify-center items-center flex transition-transform w-screen bg-white ${
          showNextPage ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <button className="bg-black" onClick={handleNextPage}>
          Tap
        </button>
      </div>

      <div className={`${showNextPage ? "" : "hidden "}`}>
        <div className="h-screen px-5">
          <h1>Testing</h1>
        </div>

        <div className="fixed bottom-0 right-0 mb-5 mr-5">
          <button className="bg-gray-900 text-white rounded-full w-16 h-16 flex justify-center items-center">
            Fixed
          </button>
        </div>
      </div>
    </>
  );
}
