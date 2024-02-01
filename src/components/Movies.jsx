import { useEffect, useState } from "react";
import axios from "axios";
import MovieData from "./MovieData";

export default function Movies() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [response, setResponse] = useState([]);

  const url = "https://movies-api14.p.rapidapi.com/movies";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9fe3a97c44msh54740d99fb78004p15b193jsnecf405499112",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };
  const getResults = async () => {
    const res = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => setResponse(json.movies));
  };
  useEffect(() => {
    getResults();
  }, []);

  const startDate = new Date(from);
  const endDate = new Date(to);
  const filteredMovies = response.filter(function (movie) {
    const date = new Date(movie.release_date);
    return date >= startDate && date <= endDate;
  });
  console.log(filteredMovies);
  return (
    <>
      <div className="flex h-full justify-center pt-6">
        <label className="text-xl pr-4">From:</label>
        <input
          type="date"
          placeholder="From date"
          onChange={(e) => setFrom(e.target.value)}
          className="border bg-slate-300 border-black rounded-md mr-4 px-0.5"
        />
        <label className="text-xl px-4">To:</label>
        <input
          type="date"
          placeholder="To date"
          onChange={(e) => setTo(e.target.value)}
          className="bg-slate-300 border border-black rounded-md mr-4 px-0.5"
        />
        <button
          className="border border-black rounded-md bg-slate-300 px-5 mx-5"
          onClick={getResults}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredMovies.map((mov) => (
          <MovieData id={mov._id} />
        ))}
      </div>
    </>
  );
}
