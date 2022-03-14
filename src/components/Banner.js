import React, { useState, useEffect} from 'react'
import '../style/Banner.css'
import axios from '../functions/axios'
import requests from '../functions/requests'

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    return (
    <div>
        <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My list</button>
                </div>
            
                <h1 className='banner-description'>{truncate(movie?.overview, 150)}
               </h1>

               
            </div>
            <div className='banner-fadeBottom'>

            </div>
        </header>
    </div>
  )
}

export default Banner