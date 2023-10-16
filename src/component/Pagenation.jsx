

export default function Pagenation({pageNo,handlenext,handleprev}){
   
    return(
      <div className="flex justify-center h-7 m-5 items-center">
        <div onClick={handleprev} className="p-4 font-bold bg-cyan-200 rounded-2xl hover:cursor-pointer"><i className="fa-solid fa-less-than"></i></div>
        <div className="p-4 font-bold ">{pageNo}</div>
       <div onClick={handlenext}className="p-4 font-bold bg-cyan-200 rounded-2xl hover:cursor-pointer"><i className="fa-solid fa-greater-than "></i></div>
      </div>
    )
}