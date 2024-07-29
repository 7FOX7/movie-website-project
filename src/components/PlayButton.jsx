import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'; 
import Modal from "./Modal";
import "../styles/playButton.css";

function PlayButton({movie}) {
  const [modal, setModal] = useState(false); 
  
  function toggleModal(e) {
    e.preventDefault(); 
    setModal(!modal); 
  }
  return (
    <>
      <Box className="trailer">
        <a href="" className="play-button" onClick={toggleModal}>
            <PlayArrowOutlinedIcon fontSize="large" sx={{color: "textColor2.main"}}/>
        </a>
        <Typography variant="body1" typography="contentText4">
            Watch Trailer
        </Typography>
      </Box>
      <Modal movie={movie} status={modal} toggleModal={toggleModal}/>
    </>
  )
}

export default PlayButton; 