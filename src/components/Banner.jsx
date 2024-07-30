import { useEffect } from "react"; 
import { useState } from "react";
import "../styles/banner.css"; 
import Box from "@mui/material/Box";
import MovieContent from "./MovieContent";
import MovieDate from "./MovieDate";
import PlayButton from "./PlayButton";
import MovieSwiper from "./MovieSwiper";

function Banner() {
    const [movies, setMovies] = useState(null); 
    const [movie, setMovie] = useState(null); 
    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error.message)); 
    }

    function handleClick(slide) { 
        setMovie(slide); 
    }

    useEffect(() => {
        fetchData(); 
    }, []); 

    return (
        <div id="home" className="banner">
            { movie && movies.length > 0 && 
            <div className="movie">
                <img src={movie.backgroundImg} alt='Background Image' className="background-image" />
                <Box sx={{width: "100vw", display: "flex", justifyContent: "space-around"}}>
                    <Box sx={{
                        width: "100%", 
                        background: "red"
                    }}>
                        <MovieContent movie={movie}/>
                    </Box>
                    <Box sx={{
                        width: "100%", 
                        background: "blue"
                    }}>
                        <MovieDate movie={movie} />
                        <PlayButton movie={movie} />
                    </Box>
                </Box>
            </div> }
            {movies && movies.length > 0 && <MovieSwiper slides={movies} onClick={handleClick}/>}
        </div>
    )
}

export default Banner; 