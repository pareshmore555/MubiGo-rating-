import axios from "axios";
import { useEffect, useState } from "react"
import MoviecardTv from "./MoviecardTv";

export default function Tv(Props){
    let{handlenext,handleprev,pageNo}=Props
    let[tv,setTv]=useState([]);
    useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=1396ea0d6d995c077a4ce37cf26ed266`)
       .then(function(res){
         setTv(res.data.results);
       })
    },[]);
    return(
        <>
        <div className="text-center font-bold my-[5px] mx-[10px] size-10px">Trending Tv shows</div>

      <div className="flex flex-wrap justify-around gap-3">
        {tv.map((tvs)=>{
            console.log(tvs);
        return (<MoviecardTv name={tvs.name} posterpath={tvs.poster_path}/>)
        
        })}
      </div>
      </>
    )
    
   
    
}