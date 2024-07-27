import { useEffect } from "react"; 
import { useState } from "react";
import "../styles/banner.css"; 
import Box from "@mui/material/Box";
import theme from "../themes/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import wicked from '../../src/images/movies/background-wicked.jpg'; 
import { ThemeProvider } from "@emotion/react"; 
import MovieContent from "./MovieContent";
import MovieDate from "./MovieDate";
import PlayButton from "./PlayButton";

function Banner() {
    const [movies, setMovies] = useState(null); 
    const smallScreen = useMediaQuery(theme.breakpoints.down('laptop')); 

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error.message)); 
    }

    useEffect(() => {
        fetchData(); 
    }, []); 

    return (
        <ThemeProvider theme={theme}>
            <div className="banner">
                <div className="movie">
                    <img src={wicked} alt='Background Image' className="background-image active" />
                    <Box sx={{width: "100vw", display: "flex", justifyContent: "space-around"}}>
                        <Box sx={{
                            width: `${smallScreen ? "100%" : "50%"}`, 
                            background: "red"
                        }}>
                            <MovieContent />
                        </Box>
                        <Box sx={{
                            width: `${smallScreen ? "100%" : "50%"}`, 
                            background: "blue"
                        }}>
                            <MovieDate />
                            <PlayButton />
                        </Box>
                    </Box>
                </div>
            </div>
        </ThemeProvider>
  )
}

export default Banner