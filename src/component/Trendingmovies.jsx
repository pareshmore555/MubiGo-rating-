
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Pagenation from "./Pagenation";
import axios from "axios"
import { json } from "react-router-dom";

export default function Trendingmovies(Props){
  let {watchList,handleaddwathchlist,handleremovefromwatchlist,setWatchlist,handleprev,pageNo,handlenext}=Props;
  let[movies,setMovies]=useState([]);
  let[search,setSearch]=useState("");
 
  function handlesearch(e){
    setSearch(e.target.value);
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1396ea0d6d995c077a4ce37cf26ed266&page=${pageNo}`)

    .then(function(res){
     
     setMovies(res.data.results)
    })
  },[pageNo])

 
  
    return (
        <>
       <div className="text-center font-bold my-[5px] mx-[10px] size-10px">Trendingmovies</div>
       
       <input onChange={handlesearch} value={search}  className="border-none bg-gray-100 w-[40rem] 
                h-[2rem] outline-none px-4 text-lg mx-[500px] my-[10px] rounded-xl" type="search" placeholder="Search here..." />
       <div className="flex flex-wrap justify-around gap-3">
         
        {movies.filter((movieobj)=>{
              return movieobj.title.toLowerCase().includes(search.toLowerCase());
            })
        .map((movieobj)=>{
          //console.log(movieobj)
          return (<MovieCard name={movieobj.title} 
                             movieobj={movieobj}
                             posterpath={movieobj.poster_path}
                             watchList={watchList}
                             handleaddwathchlist={handleaddwathchlist}
                             handleremovefromwatchlist={handleremovefromwatchlist}
                             />)
          
        })}
        
       </div>
       <Pagenation pageNo={pageNo} handlenext={handlenext} handleprev={handleprev}/>
       </>
    )
}






