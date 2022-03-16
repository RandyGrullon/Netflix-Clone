  import './App.css';
  import NavBar from './components/NavBar';
  import Banner from './components/Banner';
  import MovieRow from './components/MovieRow';
  import requests from './functions/requests';
  import Home from './Pages/Home';
  import TVShows from './Pages/TVShows';
  import Movies from './Pages/Movies';
  import NewPopular from './Pages/NewPopular';
  import MyList from './Pages/MyList';
  import NotFound from './Pages/NotFound';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
            <div className="container">
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/TV-=Shows" element={<TVShows />} /> 
                    <Route path="/Movies" element={<Movies />} />  
                    <Route path="/NewPopular" element={<NewPopular />} /> 
                    <Route path="/MyList" element={<MyList/>} /> 
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
        </Router>
     <Banner />
     <MovieRow 
     
     
     title="Netflix Original"
     fetchUrl = {requests.fetchNetflixOriginals}
     isLargeRow = {true}
     />

    <MovieRow  title="Trending Now"  fetchUrl={requests.fetchTrending} />
    <MovieRow  title="Top Rated"     fetchUrl={requests.fetchTopRated} />
    <MovieRow  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <MovieRow  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <MovieRow  title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <MovieRow  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
