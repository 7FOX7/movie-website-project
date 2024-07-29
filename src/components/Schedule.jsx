import {useState} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box";
import "../styles/schedule.css"; 
import { Typography } from "@mui/material";
import Card from "./Card";

function Schedule() {
  const [data, setData] = useState(null); 
  const [movies, setMovies] = useState(null); 

  const fetchData = () => {
    fetch('https://localhost:3000/data/movieData.json')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error.message)); 
  }

  useEffect(() => {
    fetchData(); 
  }, []); 

  useEffect(() => {
    setMovies(data)
  }, []); 

  return (
    <section id="schedule" className="schedule">
      <Box sx={{width: "100%", display: "flex", flexDirection: "column"}}>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{flexGrow: "1"}}>
            <Typography variant="h3" color="textColor2.main" typography="contentText4" className="section-title">
              Opening this week
            </Typography>
          </Box>
          <Box sx={{flexGrow: "1"}}></Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{flexGrow: "1"}}>
            <Box className="filters">
              <Typography variant="body1">
                Filters
              </Typography>
            </Box>
          </Box>
          <Box sx={{flexGrow: "1"}}></Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", marginTop: "5px"}}>
          {movies && movies.length > 0 && movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </Box>
      </Box>
    </section>
  )
}

export default Schedule