import React, { createContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const newYear = new Date("Oct 7, 2023").getTime();

  // images
  const images = [
    "src/assets/img/first-img.jpg",
    "src/assets/img/second-img.jpg",
    "src/assets/img/third-img.jpg",
    "src/assets/img/fourth-img.jpg",
    "src/assets/img/fifth-img.jpg",
  ];

  // additional
  const [showNextPage, setShowNextPage] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [onMarkerHover, setMarkerHover] = useState(false);
  const [onSoundHover, setSoundHover] = useState(false);
  const [onFirstDocs, setFirstDocs] = useState(false);

  // countdown
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isCountdown, setIsCountdown] = useState(true);

  // next image
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [prevSelectedImageIndex, setPrevSelectedImageIndex] = useState(0);
  const [onTap, setOnTap] = useState(false);
  const [onTapRight, setOnTapRight] = useState(false);
  const [onTapLeft, setOnTapLeft] = useState(false);

  // copy account
  const [isCopied, setIsCopied] = useState(false);
  const [accountHover, setAccountHover] = useState(false);

  const audioRef = useRef();

  // handle
  const handleNextPage = () => {
    setShowNextPage(true);
    setFirstDocs(true);
    setIsMuted(true);
    audioRef.current.play();
    console.log("Music is playing");
  };

  const toggleSound = () => {
    if (!isMuted) {
      audioRef.current.play();
      console.log("Music is playing");
    } else {
      audioRef.current.pause();
      console.log("Music is stop");
    }
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleSoundHover = () => {
    setSoundHover((prevHover) => !prevHover);
  };

  const handleMarkerHover = () => {
    setMarkerHover((prevHover) => !prevHover);
  };

  // countdown
  const handleCountdown = () => {
    if (isCountdown) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = (newYear - now) / 1000;
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor(distance / 60) % 60;
        const seconds = Math.floor(distance % 60);

        if (distance < 0) {
          clearInterval(interval);
          setIsCountdown(false);
          console.log("Countdown is over");
        } else {
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
          console.log("Countdown is running");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  // next image

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
    console.log(modalIsOpen);
    console.log(modalIsOpen);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const navigate = (direction) => {
    setOnTap(true);
    setTimeout(() => {
      setOnTap(false);
    }, 300);

    if (direction === 1) {
      setOnTapRight(true);
      setTimeout(() => {
        setOnTapRight(false);
      }, 300);
    } else {
      setOnTapLeft(true);
      setTimeout(() => {
        setOnTapLeft(false);
      }, 300);
    }

    setTimeout(() => {
      setSelectedImageIndex(
        (prevSelectedImageIndex) =>
          (prevSelectedImageIndex + direction + images.length) % images.length
      );
    }, 300);

    setPrevSelectedImageIndex(selectedImageIndex);
    if (!modalIsOpen && selectedImageIndex === prevSelectedImageIndex - 1) {
      setModalIsOpen(true);
    } else if (!modalIsOpen) {
      setModalIsOpen(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("1400020788619");
    setIsCopied(true);
    toast.success("✅ Berhasil Menyalin!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleAccountHover = () => {
    setAccountHover((prevHover) => !prevHover);
  };

  let state = {
    newYear,
    images,
    showNextPage,
    isMuted,
    onMarkerHover,
    onSoundHover,
    days,
    hours,
    minutes,
    seconds,
    modalIsOpen,
    selectedImageIndex,
    prevSelectedImageIndex,
    onTap,
    onTapRight,
    onTapLeft,
    accountHover,
    audioRef,
    onFirstDocs,
    setFirstDocs,
    handleNextPage,
    toggleSound,
    handleSoundHover,
    handleMarkerHover,
    handleCountdown,
    handleOpenModal,
    handleCloseModal,
    navigate,
    handleCopy,
    handleAccountHover,
  };

  return (
    <>
      <GlobalContext.Provider value={{ state }}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};
