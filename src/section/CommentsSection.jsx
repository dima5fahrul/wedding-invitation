import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/FirebaseConfig";
import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { GlobalContext } from "../context/GlobalContext";

export default function CommentsSection({}) {
  const { state } = useContext(GlobalContext);
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalComment, setTotalComment] = useState(0);
  const [onLimitComments, setLimitComments] = useState(10);
  const [onBigger, setBigger] = useState(false);
  const [onTapComments, setTapComments] = useState(false);
  const [input, setInput] = useState({
    name: "",
    message: "",
    createdAt: Timestamp.fromDate(new Date()),
    attend: true,
  });

  const timeAgo = (date) => {
    const now = moment();
    const diff = now.diff(date);

    if (diff < 1000) {
      return "baru saja";
    } else if (diff < 60000) {
      return `${Math.floor(diff / 1000)} detik yang lalu`;
    } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)} menit yang lalu`;
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)} jam yang lalu`;
    } else if (diff < 604800000) {
      return `${Math.floor(diff / 86400000)} hari yang lalu`;
    } else if (diff < 2592000000) {
      return `${Math.floor(diff / 604800000)} minggu yang lalu`;
    } else if (diff < 31536000000) {
      return `${Math.floor(diff / 2592000000)} bulan yang lalu`;
    } else {
      return `${Math.floor(diff / 31536000000)} tahun yang lalu`;
    }
  };

  const collectionData = collection(db, "comments");

  const sortingData = query(
    collectionData,
    orderBy("createdAt", "desc"),
    limit(onLimitComments)
  );

  useEffect(() => {
    getCommentList();
    const interval = setInterval(() => {
      getCommentList();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleInput = (e) => {
    let value = e.target.value;
    if (e.target.name === "attend") {
      value = e.target.value === "true" ? true : false;
    }

    setInput({ ...input, [e.target.name]: value });
  };

  const getCommentList = async () => {
    try {
      const data = await getDocs(collectionData);
      const filteredComment = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Success fetching data : ", filteredComment);
      setCommentList(filteredComment);
      const countDoc = await getCountFromServer(collectionData);
      const objectCountDoc = countDoc.data().count;
      console.log("Total documents : ", objectCountDoc);
      setTotalComment(objectCountDoc);
      setIsLoading(false);
    } catch (error) {
      console.log("Error Fetching data: ", error);
      setIsLoading(false);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collectionData, input);
      console.log("Document written with ID: ", docRef.id);
      toast.success("✉️ Berhasil mengirim pesan!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getCommentList();
      setInput({
        name: "",
        message: "",
        createdAt: Timestamp.fromDate(new Date()),
        attend: true,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("❌ Gagal mengirim pesan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleShowMore = () => {
    if (onLimitComments <= totalComment) {
      setLimitComments(onLimitComments + 10);
      getCommentList();
      setBigger(false);
    } else {
      getCommentList();
      setBigger(true);
    }
  };

  const handleShowLess = () => {
    setLimitComments(10);
    getCommentList();
    setBigger(false);
  };

  return (
    <>
      <section className="w-screen bg-gradient-to-b from-neutral-800 to-black text-white py-10 overflow-hidden">
        <div
          className="text-center"
          data-aos="fade-down"
          data-aos-duration={1000}
        >
          <h1 className="font-sacramento text-4xl mb-5">Ucapan & Do'a</h1>
          <p className="font-quicksand font-medium text-lg tracking-wider">
            Kepada Kedua Mempelai
          </p>
        </div>

        <div className="lg:px-56 px-5 mt-5">
          <p
            className="my-5 font-quicksand font-semibold text-xl"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            {totalComment} Ucapan & Do'a
          </p>
          <form onSubmit={addComment}>
            <div className="grid lg:grid-cols-2 lg:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={input.name}
                  onChange={handleInput}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-quicksand"
                >
                  Nama
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <ul className="grid w-full gap-6 grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="attend-yes"
                      name="attend"
                      onChange={handleInput}
                      value="true"
                      defaultChecked={input.attend === true}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="attend-yes"
                      className="inline-flex items-center justify-between w-full p-5 text-white bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-neutral-500 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-white hover:bg-neutral-800 dark:text-gray-400 dark:bg-neutral-600 dark:hover:bg-neutral-700"
                    >
                      <div className="block">
                        <p className="w-full text-lg font-semibold font-quicksand">
                          Hadir
                        </p>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="attend-no"
                      name="attend"
                      onChange={handleInput}
                      value="false"
                      defaultChecked={input.attend === false}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="attend-no"
                      className="inline-flex items-center justify-between w-full p-5 text-white bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-neutral-500 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-white hover:bg-neutral-800 dark:text-gray-400 dark:bg-neutral-600 dark:hover:bg-neutral-700"
                    >
                      <div className="block">
                        <p className="w-full text-lg font-semibold font-quicksand">
                          Tidak Hadir
                        </p>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium font-quicksand text-white dark:text-white"
            >
              Sampaikan Pesan
            </label>
            <textarea
              typeof="message"
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-white bg-neutral-600 rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-neutral-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white font-quicksand"
              name="message"
              onChange={handleInput}
              value={input.message}
              placeholder="Sampaikan pesan untuk mempelai di sini..."
              required
            />

            <button
              type="submit"
              className="hover:text-white text-black bg-white hover:bg-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-black mt-5"
            >
              Submit
            </button>
          </form>

          {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
            </div>
          ) : (
            commentList !== null &&
            commentList.map((comment) => (
              <article key={comment.id}>
                <div className="flex items-center mb-4 space-x-4 my-5">
                  <div className="space-y-1 font-medium dark:text-white">
                    <p className="font-quicksand">
                      {comment.name}{" "}
                      <time
                        dateTime="2014-08-16 19:00"
                        className="block text-sm text-gray-500 dark:text-gray-400 font-quicksand"
                      >
                        {comment.attend ? "Hadir" : "Tidak Hadir"}
                      </time>
                    </p>
                  </div>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                  <p className="font-quicksand">
                    {timeAgo(new Date(comment.createdAt.seconds * 1000))}
                  </p>
                </footer>
                <p className="mb-2 text-gray-500 dark:text-gray-400 font-quicksand">
                  {comment.message}
                </p>
                <div className="border border-t w-full my-5 border-gray-400 hover:border-white"></div>
              </article>
            ))
          )}

          {/* <div className="flex">
            {onLimitComments > 10 ? (
              <button
                type="submit"
                className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleShowLess}
              >
                Lihat Sebagian
              </button>
            ) : (
              <></>
            )}

            {!onBigger ? (
              <button
                type="submit"
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleShowMore}
              >
                Lihat Lainnya
              </button>
            ) : (
              <></>
            )}
          </div> */}
        </div>
      </section>
    </>
  );
}
