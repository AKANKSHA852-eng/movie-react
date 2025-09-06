import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Tvshows from './Components/TvShows'
import People from './Components/People'
import MovieDetails from './Components/MovieDetails'
import TvDetails from './Components/TVDetails'
import PersonDetails from './Components/PersonDetails'
import Trailer from "./Components/partials/Trailer"
import Notfound from "./Components/Notfound"
import Movie from "./Components/Movie"



const App = () => {
  return   <div className="bg-[#1F1E24] flex">
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/trending" element={<Trending/>} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />}/>
           <Route path="/movie/details/:id" element={<MovieDetails />} >
             <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
           </Route>
          <Route path="/tv" element={<Tvshows/>}/> 
           <Route path="/tv/details/:id" element={<TvDetails/>}>
                 <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
            </Route>
            <Route path="/person" element={<People />} />
              <Route path="/person/details/:id" element={<PersonDetails />} />
               <Route path='*' element={<Notfound/>}></Route>

    </Routes>
  </div>
  
}

export default App

