import { Link } from "react-router-dom"

export default function Navbar(){
    return (
       <div className="flex items-center shadow-md" >
       <img className="h-[55px]" src="https://t4.ftcdn.net/jpg/04/64/96/91/360_F_464969171_EhrkPWQOrARbuyIHL8Na6H6OzJkYZwwQ.jpg" alt="Icon" />
       <Link to={"/"}className="mx-[10px] text-cyan-400  font-bold text-md hover:cursor-pointer">Trending</Link>
       <Link to={"/Tv"} className="mx-[10px] font-bold text-cyan-400 text-md hover:cursor-pointer">Tv</Link>
       <Link to={"/Toprated"} className="mx-[10px] font-bold text-cyan-400 text-md hover:cursor-pointer">TopRated</Link>

       <Link to={"/watchlist"} className="mx-[10px] font-bold text-cyan-400 text-md hover:cursor-pointer">Watchlist</Link>
        
       <img className="h-[70px] mx-[1050px]" src="https://musicboxtheatre.com/sites/default/files/styles/page_images/public/series-images/MUBI%20Go%20Still%201.jpg?itok=L_zHveV3" alt="Icon" />
       <img className="h-[70px] mx-[700px]" src="https://w7.pngwing.com/pngs/953/543/png-transparent-line-holiday-lights-light-art-line-thumbnail.png" alt="Icon" />

       <Link to={"/Login"} className="mx-[1220px] font-bold text-cyan-400 text-md hover:cursor-pointer bg-black-200 w-[8rem] h-[2rem] items-center justify-center rounded-lg">LogIn</Link>

       </div>
       
    )
}