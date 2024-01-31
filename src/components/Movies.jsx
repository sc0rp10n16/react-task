import { useState } from "react";
import axios from 'axios';

export default function Movies() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [response, setResponse] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/search',
    params: {
      query: from,
      
    },
    headers: {
      'X-RapidAPI-Key': '32b9f3b5b1msh96e08fbc4b7a992p1b3aa5jsnab80f2cc69d7',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };
  const getSearchResults = async () => {
    const res = await axios.request(options);
    console.log(res.data)
    setResponse(res.data)
  }
  const movies = response.data
  console.log(response)
  const data = response.data
  return (
    <>
		<div className="flex h-full justify-center pt-6">
      <label className="text-xl pr-4">From:</label>
			<input
				type="date"
				placeholder="From date"
				onChange={e => setFrom(e.target.value)}
        className="border bg-slate-300 border-black rounded-md mr-4 px-0.5"
			/>
      <label className="text-xl px-4">To:</label>
      <input type="date" placeholder="To date" onChange={e => setTo(e.target.value)} className="bg-slate-300 border border-black rounded-md mr-4 px-0.5" />
			<button className="border border-black rounded-md bg-slate-300 px-5 mx-5" onClick={getSearchResults}>Search</button>
		</div>
    
    </>
    )
}