import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function MusicButton({}) {
  const { state } = useContext(GlobalContext);
  const { isMuted, toggleSound, onSoundHover, handleSoundHover, audioRef } =
    state;

  return (
    <>
      <div className="fixed bottom-10 right-10">
        <button
          onClick={toggleSound}
          onMouseEnter={handleSoundHover}
          onMouseLeave={handleSoundHover}
          className="bg-white border border-black hover:border-white hover:bg-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-black dark:hover:bg-black"
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6667 17.2708V15.9792C13.0139 15.5903 14.1146 14.8437 14.9688 13.7396C15.8229 12.6354 16.25 11.3819 16.25 9.97917C16.25 8.57639 15.8264 7.31944 14.9792 6.20833C14.1319 5.09722 13.0278 4.35417 11.6667 3.97917V2.6875C13.3889 3.07639 14.7917 3.94792 15.875 5.30208C16.9583 6.65625 17.5 8.21528 17.5 9.97917C17.5 11.7431 16.9583 13.3021 15.875 14.6562C14.7917 16.0104 13.3889 16.8819 11.6667 17.2708ZM2.5 12.5V7.5H5.83333L10 3.33333V16.6667L5.83333 12.5H2.5ZM11.25 13.5V6.47917C12.0139 6.71528 12.6215 7.15972 13.0729 7.8125C13.5243 8.46528 13.75 9.19444 13.75 10C13.75 10.7917 13.5208 11.5139 13.0625 12.1667C12.6042 12.8194 12 13.2639 11.25 13.5Z"
                fill={onSoundHover ? "white" : "black"}
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.9375 18.8333L14.1875 16.0833C13.7986 16.3611 13.3785 16.6007 12.9271 16.8021C12.4757 17.0035 12.007 17.1597 11.5208 17.2708V15.9792C11.8403 15.882 12.1493 15.7743 12.4479 15.6563C12.7465 15.5382 13.0278 15.382 13.2917 15.1875L9.85418 11.7292V16.6667L5.68751 12.5H2.35418V7.50001H5.60418L1.02084 2.91668L1.91668 2.02084L17.8333 17.9167L16.9375 18.8333ZM16.1875 14L15.2917 13.1042C15.5695 12.632 15.7743 12.132 15.9063 11.6042C16.0382 11.0764 16.1042 10.5347 16.1042 9.97918C16.1042 8.54862 15.6875 7.26737 14.8542 6.13543C14.0208 5.00348 12.9097 4.28473 11.5208 3.97918V2.68751C13.2431 3.0764 14.6458 3.94793 15.7292 5.30209C16.8125 6.65626 17.3542 8.21529 17.3542 9.97918C17.3542 10.6875 17.257 11.382 17.0625 12.0625C16.8681 12.7431 16.5764 13.3889 16.1875 14ZM13.3958 11.2083L11.5208 9.33334V6.62501C12.1736 6.93057 12.684 7.3889 13.0521 8.00001C13.4201 8.61112 13.6042 9.27779 13.6042 10C13.6042 10.2083 13.5868 10.4132 13.5521 10.6146C13.5174 10.816 13.4653 11.0139 13.3958 11.2083ZM9.85418 7.66668L7.68751 5.50001L9.85418 3.33334V7.66668Z"
                fill={onSoundHover ? "white" : "black"}
              />
            </svg>
          )}
        </button>
        <audio ref={audioRef} loop>
          <source src="https://dl.sndup.net/tx2f/y2matecom%20-%20Westlife%20%20My%20Love%20Lyrics.mp3" />
        </audio>
      </div>
    </>
  );
}
