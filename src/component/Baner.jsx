import axios from "axios";
import { useEffect, useState } from "react"

export default function Baner(){
  let[Path,SetPath]=useState("")
  let[Title,setTitle]=useState("");
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=1396ea0d6d995c077a4ce37cf26ed266&page`)
    .then((res)=>{
      SetPath(res.data.results[3].poster_path)
      setTitle(res.data.results[3].title)
    })
  });
    return (
       <div className="h-[60vh] bg-cover w-[170vh] bg-center flex  items-end hover:"
       style={{backgroundImage:`URL(https://image.tmdb.org/t/p/original/${Path})`}}>
         <div className=" text-white bg-cyan-400/30 w-full text-center p-3 font-bold text-xl">{Title}</div>
       </div>
    )
}