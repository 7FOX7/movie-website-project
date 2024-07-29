import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/movieDate.css"; 

function MovieDate({movie}) {
  return (
    <Box className="date" color="textColor1.main">
        <Typography variant="h3" typography="contentText3">
            {movie.date}
        </Typography>
    </Box>
  )
}

export default MovieDate; 