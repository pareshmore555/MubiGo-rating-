export default function MovieCard(Props){
let {movieobj,handleaddwathchlist,handleremovefromwatchlist,watchList}=Props;
  function iscontain(movieobj)
  {
    
    for(let i=0;i<watchList.length;i++)
    {
      if(watchList[i].id==movieobj.id)
      {
        return true;
      }
    }
    return false;
  }
     return(
      <>
      <div className="h-[40vh] w-[200px] bg-center bg-cover  rounded-xl hover:scale-105
       hover:cursor-pointer my-2 flex items-end overflow-hidden flex-col justify-between"
         style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${Props.posterpath})`}}>
         
          {iscontain(movieobj)?
          <div onClick={()=>handleremovefromwatchlist(movieobj)} className="bg-gray-900/40 m-2"><i className="fa-solid fa-xmark fa-xl"></i></div>
          :<div onClick={()=>handleaddwathchlist(movieobj)} className="bg-gray-900/40 m-2 hover:cursor-pointer"><i className="fa-solid fa-plus fa-fade fa-xl"></i></div>
        }
        
         <div className=" text-white bg-cyan-400/30 w-full text-center p-1 font-bold text-xl">{Props.name}</div>
         
       </div>

        </>
     )
}