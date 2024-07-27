import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import "../styles/playButton.css"; 

function PlayButton() {
  return (
    <Box className="trailer active">
        <a href="" className="play-button">
            <PlayArrowOutlinedIcon fontSize="large" sx={{color: "buttonColor.main"}}/>
        </a>
        <Typography variant="body1" typography="contentText4">
            Watch Trailer
        </Typography>
    </Box>
  )
}

export default PlayButton; 