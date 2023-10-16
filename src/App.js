import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Baner from './component/Baner';
import Trendingmovies from './component/Trendingmovies';
import Watchlist from './component/Watchlist';
import Tv from './component/Tv';
import Toprated from './component/Toprated';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState,useEffect } from 'react';
function App() {

  let [watchList,setWatchlist]=useState([]);
  let [pageNo,setPageNo]=useState(1);

  function handlenext(){
     setPageNo(pageNo+1);
  }
  function handleprev(){
      if(pageNo>1)
      {
          setPageNo(pageNo-1);
      }
     
   }


  function handleaddwathchlist(movieobj){
     
     let newarray=[...watchList,movieobj];
     localStorage.setItem("moviesApp",JSON.stringify(newarray))
     setWatchlist(newarray)
  }
   function handleremovefromwatchlist(movieobj){
      let filteredwatchlist=watchList.filter((movie)=>{
          return movie.id!=movieobj.id;
      })
      localStorage.setItem("moviesApp",JSON.stringify(filteredwatchlist))
      setWatchlist(filteredwatchlist)
   }

   useEffect(()=>{
    let moviesfromlocalstorage=localStorage.getItem("moviesApp")
    if(!moviesfromlocalstorage)
    {
      return;
    }
    setWatchlist(JSON.parse(moviesfromlocalstorage))
},[])

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<> <Baner /> <Trendingmovies watchList={watchList} handleaddwathchlist={handleaddwathchlist} 
                                           setWatchlist={setWatchlist} handleremovefromwatchlist={handleremovefromwatchlist}
                                           pageNo={pageNo} handlenext={handlenext}
                                           handleprev={handleprev}/> </>} />
     <Route path='/Tv' element={< Tv handlenext={handlenext}  handleprev={handleprev}pageNo={pageNo}/>} />
     <Route path='/Toprated' element={< Toprated/>} />
                                   
     <Route path='/watchlist' element={<Watchlist  handleremovefromwatchlist={handleremovefromwatchlist}watchList={watchList}setWatchlist={setWatchlist} />} />
     </Routes>
    </BrowserRouter>
    // <>
    //   <Navbar/>
    //   <Baner/>
    //   <Trendingmovies/>
    //   <Watchlist/>
    //   </>
  );
}

export default App;
