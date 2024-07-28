import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AddIcon from '@mui/icons-material/Add';

import "../styles/movieContent.css"; 

function MovieContent({movie}) {
  return (
    <Box className="content" color="contentTextColor.main">
        <img src={movie.titleImg} style={{maxWidth: "250px", marginBlock: "15px"}} alt="Movie Title" className="movie-title" />
        <Typography variant="h4" typography="contentText1">
            <span>{movie.year}</span>
            <span>
                <i>{movie.ageLimit}</i>
            </span>
            <span>{movie.length}</span>
            <span>{movie.category}</span>
        </Typography>
        <Typography variant="body1" typography="contentText2">
            {movie.description}
        </Typography>
        <Button sx={{
          position: "relative", 
          display: "inline-flex",
          background: "#fff", 
          color: "var(--primary)", 
          fontSize: "1.1rem", 
          fontWeight: 400,  
          letterSpacing: "1px", 
          paddingBlock: "5px", 
          paddingInline: "16px", 
          marginRight: "15px", 
          gap: "10px", 
          ':hover': {
            background: "var(--primary)", 
            color: "buttonColor.main"
          }}}>
          <BookmarkBorderOutlinedIcon />
          Book
        </Button>

        <Button sx={{
          position: "relative", 
          display: "inline-flex",
          background: "var(--primary)", 
          color: "buttonColor.main", 
          fontSize: "1.1rem", 
          fontWeight: 400,  
          letterSpacing: "1px", 
          paddingBlock: "5px", 
          paddingInline: "16px", 
          marginRight: "15px", 
          gap: "10px", 
          ':hover': {
            background: "#fff", 
            color: "var(--primary)"
          }}}>
          <AddIcon />
          Add
        </Button>                         
    </Box>
  )
}

export default MovieContent; 