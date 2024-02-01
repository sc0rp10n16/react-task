import { useState, useEffect } from "react";
import Modal from "./modal";

function MovieData(props) {
  const [movieList, setMovieList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => setOpenModal(false);
  const movId = props.id.toString();
  const dataLen = props.dataLen;
  console.log(dataLen);
  const url = "https://movies-api14.p.rapidapi.com/movie/" + movId;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9fe3a97c44msh54740d99fb78004p15b193jsnecf405499112",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };
  const getMovie = async () => {
    const res = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieList(json.movie));
    return (
      <div>
        <p>Id={movieList._id}</p>
      </div>
    );
  };
  useEffect(() => {
    getMovie();
  }, []);
  const title = movieList.title;
  const ytLink = movieList.youtube_trailer;
  const poster = movieList.poster_path;
  return (
    <div className="rounded-xl shadow-lg">
      <div className="p-5 flex flex-col justify-between">
        <div className="rounded-xl overflow-hidden">
          <button onClick={() => setOpenModal(true)}>
            <img src={`${movieList.poster_path}`} />
          </button>
        </div>
        <Modal
          visible={openModal}
          onClose={handleOnClose}
          ytLink={ytLink}
          poster={poster}
          title={title}
        />
        <div className="flex pt-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="px-4">{movieList.vote_average}</span>
        </div>
        <h1 className="overflow-hidden text-2xl p-3 justify-center text-center">
          {movieList.title}
        </h1>
        <div className="rounded-md object-bottom justify-center text-center border bg-slate-300">
          {movieList.release_date}
        </div>
      </div>
    </div>
  );
}

export default MovieData;
