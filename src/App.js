  import './App.css';
  import NavBar from './components/NavBar';
  import Banner from './components/Banner';
  import MovieRow from './components/MovieRow';
  import Requests from './functions/requests'
import requests from './functions/requests';


function App() {
  return (
    <div className="App">
     <NavBar />
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
