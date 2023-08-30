import React, { useEffect } from "react";
import "../app.css";
import SecondBanner from "../components/SecondBanner";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FirstBanner from "../components/FirstBanner";
import MusicButton from "../components/MusicButton";
import BrideSection from "../section/BrideSection";
import CardSection from "../section/CardSection";
import CountdownSection from "../section/CountdownSection";
import GalerySection from "../section/GalerySection";
import CommentsSection from "../section/CommentsSection";
import FooterSection from "../section/FooterSection";

export default function MainPage({}) {
  const { state } = useContext(GlobalContext);
  const { newYear, showNextPage, handleCountdown } = state;

  useEffect(() => {
    console.log(showNextPage);
    handleCountdown();
  }, [newYear]);

  return (
    <>
      <FirstBanner />

      <div
        className={`${
          showNextPage ? "w-auto overflow-x-hidden overflow-y-hidden" : "hidden"
        }`}
      >
        <MusicButton />
        <SecondBanner active="true" />
        <BrideSection />
        <CardSection />
        <CountdownSection />
        <GalerySection />
        <CommentsSection />
        <FooterSection />
      </div>
    </>
  );
}
