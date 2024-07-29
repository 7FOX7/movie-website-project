import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../themes/theme";
import AddIcon from '@mui/icons-material/Add';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Typography } from "@mui/material";
import "../styles/card.css"; 

function Card({movie}) {
  return (
    <Box sx={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <Box className="movie-card">
            <img src={movie.previewImg} alt="Preview Image"/>
            <Typography variant="body1" color="textColor2.main" typography="contentText5">
                {movie.length} | {movie.category}
            </Typography>
            <Box className="content">
                <Typography variant="h4" color="textColor2.main" typography="contentText5">
                    {movie.title}
                    <Box className="card-icons">
                        <AddIcon className="icon"/>
                        <PlayArrowOutlinedIcon className="icon"/>
                    </Box>
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Card