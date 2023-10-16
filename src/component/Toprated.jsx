import axios from "axios";
import { useEffect, useState } from "react"
import Topratedcards from "./Topratedcards";

export default function Toprated(){
  let[toprated,setToprated]= useState([]);

   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1396ea0d6d995c077a4ce37cf26ed266`)
           .then((res)=>{
              setToprated(res.data.results)
           })
   })
   
    return(
        <>
        <div className="text-center font-bold size-10px mx-[10px] my-[5px]">Top Rated Movies</div>
        <div className="flex flex-wrap justify-around gap-3">
        {toprated.map((toprated)=>{
            return (<Topratedcards name={toprated.name} posterpath={toprated.poster_path}/>)
        })}
        </div>
        </>
        
    )
    
     
}