export default function MoviecardTv(Props){
    
 return(
 <>
 
<div className="h-[40vh] w-[200px] bg-center bg-cover  rounded-xl hover:scale-105
       hover:cursor-pointer my-2 flex items-end overflow-hidden flex-col justify-between"
         style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${Props.posterpath})`}}>
        
         
       </div>
</>

    )
}