import {useState} from "react"; 
import {useEffect} from "react"; 
import Box from "@mui/material/Box";
import "../styles/schedule.css"; 
import { Typography } from "@mui/material";
import Card from "./Card";
import categories from "../data/categories";

function Schedule() {
  const [movies, setMovies] = useState(null); 
  const [data, setData] = useState(null); 
  const fetchData = () => {
    fetch('./../public/data/movieData.json')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error.message)); 
  }

  useEffect(() => {
    fetchData(); 
  }, []); 

  useEffect(() => {
    setMovies(data); 
  }, [data]); 


  function handleClick(selectedCategory) {
    // const chosenCategory = categories.find(category => category.name === selectedMovie.category); 
    // const filteredMovies = movies.filter(movie => movie.category === chosenCategory.name); 

    // filteredMovies.length === 0 ? setMovies(data) : setMovies(filteredMovies); 

    const filteredMovies = data.filter(movie => movie.category === selectedCategory); 
    filteredMovies.length === 0 ? setMovies(data) : setMovies(filteredMovies); 
  }

  return (
    <section id="schedule" className="schedule">
      <Box sx={{width: "100%", display: "flex", flexDirection: "column"}}>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{flexGrow: "1"}}>
            <Typography variant="h3" color="textColor2.main" typography="contentText4" className="section-title">
              Opening this week
            </Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{flexGrow: "1", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ul className="filters">
              {categories.map(category => 
                <li key={category.id} onClick={() => handleClick(category.name)}>{category.name}</li>
              )}
            </ul>
          </Box>
        </Box>
        <Box sx={{marginTop: "30px", display: "grid", gridTemplateColumns: "auto auto auto auto auto auto", rowGap: "30px"}}>
          {movies && movies.length > 0 && movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </Box>
      </Box>
    </section>
  )
}

export default Schedule; 