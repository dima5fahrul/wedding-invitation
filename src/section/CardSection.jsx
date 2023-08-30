import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function CardSection({}) {
  const { state } = useContext(GlobalContext);
  const { handleMarkerHover, onMarkerHover } = state;

  return (
    <>
      <section className="w-screen bg-gradient-to-b from-neutral-800 to-black text-white dark:text-white">
        <div className="flex flex-col justify-center h-auto text-center items-center lg:py-20 py-16 gap-10 lg:px-36 px-5">
          <p
            className="font-sacramento lg:text-3xl text-2xl"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            Assalamu`alaikum Wr. Wb.
          </p>
          <p
            className="font-quicksand lg:text-lg text-base"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            Dengan segala kerendahan hati dan dengan ucapan syukur atas Rahmat
            Allah Subhanahu wa Ta`ala, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang Insya
            Allah akan dilaksanakan pada:
          </p>
          <figure className="relative text-center w-full cursor-pointer filter border-2 rounded-lg">
            <div className="bg-card rounded-lg bg-cover bg-no-repeat bg-center relative">
              <figcaption
                className="absolute inset-0 flex items-center justify-center px-4 text-lg flex-col text-white"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <path
                    d="M45.9375 8.75C46.0811 8.75008 46.2234 8.72185 46.3562 8.66691C46.4889 8.61198 46.6095 8.53142 46.7111 8.42983C46.8127 8.32825 46.8932 8.20765 46.9482 8.07491C47.0031 7.94217 47.0313 7.79991 47.0312 7.65625V5.46875C47.0312 5.17867 46.916 4.90047 46.7109 4.69535C46.5058 4.49023 46.2276 4.375 45.9375 4.375C45.6474 4.375 45.3692 4.49023 45.1641 4.69535C44.959 4.90047 44.8437 5.17867 44.8437 5.46875V7.65625C44.8437 7.79991 44.8719 7.94217 44.9268 8.07491C44.9818 8.20765 45.0623 8.32825 45.1639 8.42983C45.2655 8.53142 45.3861 8.61198 45.5188 8.66691C45.6516 8.72185 45.7938 8.75008 45.9375 8.75ZM39.6954 8.42958C39.9012 8.63125 40.1783 8.74356 40.4664 8.74211C40.7545 8.74065 41.0305 8.62555 41.2342 8.4218C41.438 8.21806 41.5531 7.94214 41.5545 7.65401C41.556 7.36587 41.4437 7.0888 41.242 6.88301L39.0545 4.69551C38.8487 4.49384 38.5716 4.38152 38.2835 4.38298C37.9954 4.38443 37.7194 4.49954 37.5157 4.70328C37.3119 4.90703 37.1968 5.18295 37.1954 5.47108C37.1939 5.75922 37.3062 6.03628 37.5079 6.24208L39.6954 8.42958ZM51.4062 8.75C51.5499 8.75017 51.6922 8.72196 51.8249 8.66697C51.9576 8.61198 52.0781 8.5313 52.1796 8.42958L54.3671 6.24208C54.5687 6.03628 54.6811 5.75922 54.6796 5.47108C54.6781 5.18295 54.563 4.90703 54.3593 4.70328C54.1556 4.49954 53.8796 4.38443 53.5915 4.38298C53.3034 4.38152 53.0263 4.49384 52.8205 4.69551L50.633 6.88301C50.4801 7.03597 50.376 7.23083 50.3338 7.44296C50.2916 7.65508 50.3133 7.87495 50.3961 8.07477C50.4788 8.27458 50.6189 8.44538 50.7988 8.56557C50.9786 8.68576 51.19 8.74994 51.4062 8.75ZM21.6806 21.2448C21.6939 21.1017 21.6789 20.9574 21.6365 20.8201C21.594 20.6829 21.525 20.5553 21.4332 20.4447C21.3415 20.3341 21.2288 20.2426 21.1018 20.1756C20.9747 20.1085 20.8356 20.0671 20.6925 20.0538C20.5495 20.0405 20.4052 20.0555 20.2679 20.0979C20.1306 20.1404 20.003 20.2094 19.8924 20.3012C19.7818 20.3929 19.6904 20.5056 19.6233 20.6327C19.5563 20.7597 19.5149 20.8988 19.5016 21.0419C19.2216 22.7716 18.5055 24.4016 17.4209 25.7778C17.2551 26.016 17.1909 26.3104 17.2421 26.596C17.2934 26.8817 17.4561 27.1352 17.6943 27.3009C17.9325 27.4667 18.2269 27.531 18.5125 27.4797C18.7981 27.4284 19.0517 27.2657 19.2174 27.0275C20.5066 25.3348 21.3532 23.3472 21.6806 21.2448Z"
                    fill="white"
                  />
                  <path
                    d="M50.9104 26.9112L56.656 19.2496C56.6659 19.2364 56.6639 19.2187 56.6731 19.2052C56.6835 19.1903 56.7019 19.184 56.7116 19.1684C56.762 19.0667 56.7957 18.9575 56.8116 18.8451C56.8638 18.7268 56.8864 18.5975 56.8774 18.4684C56.8683 18.3393 56.8279 18.2144 56.7596 18.1045L53.4784 11.542C53.383 11.3677 53.241 11.2233 53.0682 11.1251C52.8953 11.0269 52.6986 10.9788 52.5 10.9861V10.9375H39.375V10.9861C39.1764 10.9788 38.9796 11.0269 38.8068 11.1251C38.634 11.2233 38.492 11.3677 38.3966 11.5421L35.1153 18.1046C35.0471 18.2145 35.0067 18.3394 34.9976 18.4684C34.9886 18.5975 35.0112 18.7268 35.0634 18.8452C35.0792 18.9576 35.113 19.0667 35.1634 19.1684C35.173 19.184 35.1915 19.1903 35.2019 19.2053C35.2111 19.2187 35.2091 19.2364 35.219 19.2496L40.9828 26.9355C38.866 27.4818 36.8565 28.3809 35.0385 29.5951C32.7748 28.0698 30.2176 27.0342 27.5306 26.5544C27.2451 26.504 26.9514 26.569 26.7139 26.7351C26.4764 26.9012 26.3145 27.1547 26.2638 27.4401C26.2131 27.7255 26.2778 28.0193 26.4436 28.257C26.6095 28.4947 26.8629 28.6568 27.1482 28.7078C29.7708 29.1742 32.2515 30.236 34.3994 31.8116C34.4143 31.8213 34.4261 31.8353 34.4415 31.8444C35.5136 32.6327 36.492 33.541 37.3579 34.5514L37.3686 34.5631C39.9513 37.5836 41.4274 41.3941 41.5536 45.3662C41.6798 49.3383 40.4484 53.2348 38.0626 56.413C37.4641 55.963 36.905 55.4628 36.3913 54.9178C37.6271 53.2502 38.5078 51.3469 38.9789 49.3255C39.45 47.3041 39.5014 45.2076 39.1302 43.1655C38.7589 41.1234 37.9727 39.1791 36.8202 37.4529C35.6677 35.7267 34.1735 34.2552 32.4298 33.1293L32.4226 33.1203C32.3988 33.1002 32.369 33.095 32.344 33.0773C29.2473 31.0407 25.503 30.2306 21.8414 30.805C28.0168 22.8497 25.817 17.7517 24.903 16.2836C24.1887 15.0718 23.0941 14.13 21.7894 13.6044C20.4846 13.0788 19.0428 12.9989 17.688 13.3771C16.7888 13.697 15.9803 14.2298 15.3315 14.9298C14.6828 15.6299 14.2131 16.4765 13.9624 17.3975C13.214 16.8052 12.3336 16.4026 11.396 16.224C10.4585 16.0455 9.49168 16.0963 8.57801 16.3721C7.26224 16.8703 6.14823 17.7898 5.40962 18.9872C4.67101 20.1847 4.34929 21.5929 4.49461 22.9923C4.63119 24.7381 5.90666 30.2672 15.9526 32.9726C12.5501 35.076 10.1081 38.4297 9.15094 42.3136C8.19374 46.1974 8.79767 50.3018 10.833 53.7454C12.8684 57.1889 16.1729 59.697 20.037 60.7312C23.9011 61.7654 28.0167 61.2431 31.5 59.2765C32.0102 59.8316 32.5517 60.3572 33.1218 60.8507C30.3989 62.5331 27.2632 63.4285 24.0625 63.4375C20.695 63.4376 17.399 62.4661 14.5699 60.6395C11.7408 58.8129 9.4989 56.2088 8.11306 53.1397C6.72722 50.0705 6.25635 46.6667 6.75695 43.3367C7.25756 40.0066 8.70836 36.8916 10.9353 34.3656C11.1274 34.1481 11.2251 33.8631 11.2071 33.5735C11.1891 33.2838 11.0567 33.0132 10.8392 32.8211C10.6216 32.6291 10.3367 32.5313 10.047 32.5493C9.75737 32.5673 9.48675 32.6997 9.29468 32.9173C6.11761 36.4952 4.3547 41.1091 4.33649 45.8939C4.31828 50.6788 6.04602 55.306 9.19577 58.908C12.3455 62.51 16.701 64.8394 21.4455 65.4594C26.1901 66.0795 30.9979 64.9477 34.9675 62.2761C37.3433 63.8743 40.0392 64.9347 42.8672 65.3833C45.6951 65.8319 48.5869 65.6578 51.3406 64.8733C54.0943 64.0888 56.6437 62.7127 58.8106 60.841C60.9775 58.9694 62.7098 56.6474 63.8866 54.0371C65.0633 51.4268 65.6562 48.5911 65.6237 45.7279C65.5912 42.8648 64.9343 40.0433 63.6987 37.4603C62.463 34.8773 60.6785 32.5952 58.4698 30.7732C56.261 28.9511 53.6812 27.6331 50.9104 26.9112ZM6.67572 22.8214C6.56529 21.9099 6.75877 20.9875 7.22614 20.1972C7.69351 19.407 8.40863 18.793 9.26056 18.4507C9.57354 18.3479 9.90098 18.296 10.2304 18.2969C11.3108 18.3479 12.3379 18.7814 13.1282 19.5199C13.3517 19.7084 13.6195 19.8367 13.9064 19.8928C14.1933 19.9488 14.4898 19.9308 14.7678 19.8403C15.0454 19.7494 15.2949 19.5884 15.4922 19.3729C15.6894 19.1573 15.8276 18.8945 15.8936 18.6099C15.9957 17.9137 16.2782 17.2563 16.7128 16.703C17.1475 16.1497 17.7194 15.7197 18.3716 15.4556C19.2606 15.2272 20.2002 15.2977 21.0451 15.6564C21.8901 16.0151 22.5935 16.642 23.0467 17.4402C23.8297 18.6984 25.7758 23.3714 18.5489 31.3492C7.99485 29.2141 6.79107 24.2996 6.67572 22.8214ZM48.5416 26.4252C48.4215 26.4082 48.2968 26.4019 48.1762 26.3869L48.1634 26.385L49.8336 19.6875H53.5937L48.5416 26.4252ZM45.9104 26.2505C45.9109 26.2129 45.9092 26.1753 45.9054 26.1379L44.297 19.6875H47.578L45.9695 26.1378C45.9658 26.1753 45.9641 26.2129 45.9646 26.2505L45.9375 26.25L45.9104 26.2505ZM49.2187 16.1478L47.7074 13.125H50.7301L49.2187 16.1478ZM47.4489 17.5H44.4261L45.9375 14.4772L47.4489 17.5ZM42.6562 16.1478L41.1449 13.125H44.1676L42.6562 16.1478ZM54.0114 17.5H50.9886L52.5 14.4772L54.0114 17.5ZM39.375 14.4772L40.8864 17.5H37.8636L39.375 14.4772ZM42.0414 19.6875L43.7117 26.3854C43.5866 26.4009 43.4579 26.4075 43.3334 26.4252L38.2812 19.6875H42.0414ZM43.75 45.9375C43.7523 41.7512 42.4174 37.6736 39.9399 34.2991C41.9398 33.2657 44.1721 32.7646 46.4218 32.8439C48.6715 32.9233 50.8629 33.5804 52.7851 34.7521C54.7072 35.9238 56.2954 37.5706 57.3966 39.534C58.4979 41.4973 59.0752 43.7111 59.0729 45.9622C59.0707 48.2133 58.489 50.426 57.3838 52.3871C56.2786 54.3483 54.6872 55.9919 52.7627 57.1598C50.8382 58.3276 48.6455 58.9804 46.3956 59.0553C44.1458 59.1301 41.9145 58.6245 39.9167 57.5872C42.4014 54.2107 43.7442 50.1297 43.75 45.9375ZM34.9752 53.1363C33.5564 51.0015 32.8037 48.4933 32.8125 45.9301C32.8214 43.3668 33.5914 40.8639 35.025 38.7389C36.4437 40.8738 37.1964 43.3819 37.1875 45.9452C37.1786 48.5085 36.4086 51.0113 34.9752 53.1363ZM24.0625 59.0625C22.0731 59.0663 20.1089 58.6177 18.3184 57.7508C16.5278 56.8839 14.9578 55.6214 13.7268 54.0585C12.4959 52.4957 11.6364 50.6735 11.2132 48.7297C10.79 46.7858 10.8142 44.7712 11.284 42.8381C11.7537 40.905 12.6568 39.104 13.9249 37.5712C15.193 36.0384 16.7929 34.8139 18.6038 33.9902C20.4146 33.1666 22.389 32.7654 24.3778 32.8169C26.3665 32.8685 28.3174 33.3714 30.0832 34.2877C27.5932 37.6569 26.2497 41.7359 26.25 45.9254C26.2503 50.1148 27.5945 54.1937 30.0849 57.5625C28.2275 58.5401 26.1615 59.0547 24.0625 59.0625ZM45.9375 63.4375C42.6889 63.4409 39.5036 62.539 36.7389 60.8331C33.9743 59.1271 31.7397 56.6846 30.2859 53.7794C28.832 50.8743 28.2164 47.6215 28.5081 44.386C28.7998 41.1505 29.9873 38.0603 31.9373 35.4621C32.5357 35.9122 33.0947 36.4123 33.6084 36.957C31.3845 40.02 30.3706 43.7966 30.7613 47.5615C31.1521 51.3264 32.92 54.8143 35.7255 57.3553C38.531 59.8962 42.1763 61.3112 45.9614 61.3284C49.7465 61.3456 53.4046 59.9638 56.2331 57.4485C59.0615 54.9331 60.861 51.4615 61.286 47.7002C61.711 43.939 60.7314 40.1534 58.5355 37.0703C56.3395 33.9873 53.082 31.8242 49.3884 30.9964C45.6949 30.1686 41.8258 30.7346 38.5241 32.5855C38.0157 32.0287 37.4757 31.5015 36.9068 31.0067C38.7866 29.8466 40.8716 29.0579 43.0486 28.6834C43.2051 28.6574 43.3644 28.6487 43.521 28.6258C44.3212 28.5078 45.1286 28.4449 45.9375 28.4375C46.4383 28.4375 46.9308 28.4713 47.4211 28.5127C47.7515 28.5444 48.08 28.5836 48.4048 28.6322C52.7872 29.2539 56.7708 31.5141 59.5524 34.9571C62.334 38.4001 63.7067 42.7697 63.3938 47.1848C63.0808 51.6 61.1054 55.7323 57.8659 58.7484C54.6263 61.7645 50.3637 63.4402 45.9375 63.4375Z"
                    fill="white"
                  />
                </svg>
                <h1 className="font-sacramento font-semibold mt-5">
                  Pernikahan
                </h1>
                <div className="border border-t w-2/4 my-5 border-white"></div>
                <p className="font-quicksand lg:text-2xl text-xl mb-2">
                  Sabtu, 07 Oktober 2023
                </p>
                <p className="font-quicksand lg:text-2xl text-xl mb-4">
                  10.00 WIB - Selesai
                </p>
                <p className="font-quicksand lg:text-lg text-sm font-semibold">
                  Lokasi Acara
                </p>
                <p className="font-quicksand font-medium lg:text-lg text-base mb-2">
                  Rumah Mempelai Wanita
                </p>
                <p className="font-quicksand font-semibold lg:text-lg text-base">
                  Perumahan Prime Park blok A2 no.07
                </p>
                <p className="font-quicksand font-semibold lg:text-lg text-base">
                  Desa Simoangin Angin Kec. Wonoayu
                </p>
                <p className="font-quicksand font-semibold lg:text-lg text-base">
                  Kabupaten Sidoarjo
                </p>
              </figcaption>
            </div>
          </figure>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.263055340653!2d112.5947151846787!3d-7.442125933520725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780bc55508877f%3A0xfa2485e2b56a215a!2sPerum%20Prime%20Park%20Residence!5e0!3m2!1sid!2sid!4v1693051257701!5m2!1sid!2sid"
            className="w-full rounded-lg border-2"
            height={400}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href="https://goo.gl/maps/tjXHiNmJSHt71br57"
            className="bg-white rounded-xl flex flex-col lg:flex-row justify-center gap-1 border lg:gap-4 w-2/5 py-2 items-center text-center hover:bg-black  text-black hover:text-white"
            onMouseEnter={handleMarkerHover}
            onMouseLeave={handleMarkerHover}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_421_11)">
                <path
                  d="M10 1.66666C6.77916 1.66666 4.16666 4.27916 4.16666 7.49999C4.16666 11.875 10 18.3333 10 18.3333C10 18.3333 15.8333 11.875 15.8333 7.49999C15.8333 4.27916 13.2208 1.66666 10 1.66666ZM10 9.58332C8.85 9.58332 7.91666 8.64999 7.91666 7.49999C7.91666 6.34999 8.85 5.41666 10 5.41666C11.15 5.41666 12.0833 6.34999 12.0833 7.49999C12.0833 8.64999 11.15 9.58332 10 9.58332Z"
                  fill={onMarkerHover ? "white" : "black"}
                />
              </g>
              <defs>
                <clipPath id="clip0_421_11">
                  <rect
                    width="20"
                    height="20"
                    fill={onMarkerHover ? "black" : "white"}
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="font-quicksand font-semibold">Lihat Selengkapnya</p>
          </a>
        </div>
      </section>
    </>
  );
}
