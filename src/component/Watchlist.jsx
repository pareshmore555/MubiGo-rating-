import axios from "axios";
import { useEffect, useState } from "react"
import genreids from "../utility/genres";
import { set } from "react-hook-form";

export default function Watchlist(Props){

let {watchList ,handleremovefromwatchlist,setWatchlist}=Props;
let[genreList,setGenerlist]=useState(["All genre"]);
let[currGenre,setcurrGenre]=useState("All genre");
let [search,setSearch]=useState("");

function sortincrease(movieobj){
  let sorted=watchList.sort((movieA,movieB)=>{
    return movieA.vote_average-movieB.vote_average;
  })
  setWatchlist([...sorted]);
}
function sortdecrease(){
  let sorted=watchList.sort((movieA,movieB)=>{
    return movieB.vote_average-movieA.vote_average;
  })
  setWatchlist([...sorted]);
}
function popularityincrease(){
   let sorted=watchList.sort((movieA,movieB)=>{
      return movieA.popularity-movieB.popularity;
   })
  setWatchlist([...sorted]);
}
function popularitydecrease(){
  let sorted=watchList.sort((movieA,movieB)=>{
     return movieB.popularity-movieA.popularity;
  })
  setWatchlist([...sorted]);

}

function handleSearch(e){
  setSearch(e.target.value);
}

function handlefilter(genre){
  setcurrGenre(genre)
}

useEffect(()=>{
  let temp=watchList.map((movieobj)=>{
    return genreids[movieobj.genre_ids[0]];
  })
  
  setGenerlist(temp);
},[watchList])

    return (
        <>
        <div className="flex justify-center gap-2 my-[9px]">
           {genreList.map((genre)=>{
            
            return (<div onClick={()=>handlefilter(genre)} 
            className={currGenre==genre?"bg-cyan-200 w-[8rem] h-[3rem] flex items-center justify-center rounded-lg hover:cursor-pointer":"bg-gray-200 w-[8rem] h-[3rem] flex items-center justify-center rounded-lg hover:cursor-pointer"}>{genre}</div>)
           })} 
        </div>
        <div className="flex justify-center my-4 ">
                <input onChange={handleSearch} value={search} className="border-none bg-gray-100 w-[23rem] 
                h-[3rem] outline-none px-4 text-lg rounded-xl" type="search" placeholder="Search here..." />
                
                {/* <div className="h-[3rem]"><i class="fa-solid fa-magnifying-glass"></i></div> */}
        </div>

       <div className="rounded-lg overflow-hidden border shadow-md border-gray-200 m-5 ">
        <table className="w-full p-3 text-center">
            <thead className="bg-cyan-50 border-b-2">
                <tr>
                    <th>Name</th>
                    <th>
                    <div onClick={sortincrease}><i className="fa-solid fa-caret-up"></i></div>
                    Ratings
                    <div onClick={sortdecrease}><i className="fa-solid fa-caret-down"></i></div>
                    </th>
                    <th>
                    <div onClick={popularityincrease}><i className="fa-solid fa-caret-up"></i></div>
                      Popularity
                      <div onClick={popularitydecrease}><i className="fa-solid fa-caret-down"></i></div>

                    </th>

                    <th>Genre</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody className="w-full">
            {watchList.filter((obj)=>{
               if(currGenre=="All genre")
               {
                 return true;
               }else{
                 return genreids[obj.genre_ids[0]]==currGenre;
               }
            })
            .filter((movieobj)=>{
              return movieobj.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movieobj)=>{
              return (
                <tr className="border-b-2 bg-cover bg-center">
                <td className="flex items-center  px-6 py-4">
                    <img className="h-[6rem] w-[10rem] object-fit: contain" src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`} alt="" />
                    <div className="p-4">{movieobj.title}</div>
                </td>
                
                <td>{movieobj.vote_average}</td>
                <td>{movieobj.popularity}</td>
                <td>{genreids[movieobj.genre_ids[0]]}</td>
                <td onClick={()=>handleremovefromwatchlist(movieobj)} className="text-red-600 hover:cursor-pointer">Delete</td>
             </tr>
              )
               
               
              
              
            })}
            </tbody>
        </table>
       </div>
       </>
    )
}