import React from "react";

export default function MyModal({
  visible,
  closeModal,
  images,
  selectedImageIndex,
  navigate,
  onTap,
  onTapRight,
  onTapLeft,
}) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 pt-10 flex justify-center items-center">
      <img
        src={images[selectedImageIndex + 1]}
        alt=""
        className={`max-h-screen h-5/6 rounded-lg cursor-pointer filter hover:brightness-75 absolute
    ${
      onTapRight
        ? "transition-transform duration-300 translate-x-0"
        : onTapLeft
        ? "hidden"
        : "translate-x-[60rem]"
    }
  `}
      />

      <img
        src={images[selectedImageIndex]}
        alt=""
        className={`max-h-screen h-5/6 rounded-lg cursor-pointer filter hover:brightness-75 absolute
    ${
      onTapRight
        ? "transition-transform duration-300 -translate-x-[60rem]"
        : onTapLeft
        ? "hidden"
        : "translate-x-0"
    }
  `}
      />

      <img
        src={images[selectedImageIndex - 1]}
        alt=""
        className={`max-h-screen h-5/6 rounded-lg cursor-pointer filter hover:brightness-75 absolute
    ${
      onTapLeft
        ? "transition-transform duration-300 translate-x-0"
        : onTapRight
        ? "hidden"
        : "-translate-x-[60rem]"
    }
  `}
      />

      <img
        src={images[selectedImageIndex]}
        alt=""
        className={`max-h-screen h-5/6 rounded-lg cursor-pointer filter hover:brightness-75 absolute
    ${
      onTapLeft
        ? "transition-transform duration-300 translate-x-[60rem]"
        : onTapRight
        ? "hidden"
        : "translate-x-0"
    }
  `}
      />

      <img
        src={images[selectedImageIndex]}
        alt={`Image ${selectedImageIndex + 1}`}
        className={`max-h-screen h-5/6 rounded-lg cursor-pointer filter hover:brightness-75 absolute ${
          onTap ? "hidden" : ""
        }`}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="close"
        className="absolute top-5 right-10 h-5 cursor-pointer"
        onClick={closeModal}
        fill="white"
      >
        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
      </svg>
      {/* show image index */}
      <div className="absolute top-5 left-10 text-white text-lg font-semibold">
        {selectedImageIndex + 1} / {images.length}
      </div>

      {/* show previous button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        viewBox="0 0 24 24"
        id="previous"
        className="absolute top-1/2 left-10 h-10 cursor-pointer"
        onClick={() => navigate(-1)}
        fill="white"
        disabled={selectedImageIndex === 0}
      >
        <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
        <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
      </svg>

      {/* show next button and transition */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="white"
        viewBox="0 0 24 24"
        id="next"
        disabled={selectedImageIndex === images.length - 1}
        onClick={() => navigate(1)}
        className="absolute top-1/2 right-10 cursor-pointer"
      >
        <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" />
        <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
      </svg>
    </div>
  );
}
