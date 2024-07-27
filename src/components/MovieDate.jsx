import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/movieDate.css"; 

function MovieDate() {
  return (
    <Box className="date active" color="contentTextColor.main">
        <Typography variant="h3" typography="contentText3">
            On January 10
        </Typography>
    </Box>
  )
}

export default MovieDate; 