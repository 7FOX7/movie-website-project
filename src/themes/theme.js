import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0, 
            tablet: 700, 
            laptop: 1330, 
            desktop: 1650
        }
    }, 
    typography: {
        contentText1: {
            fontWeight: 400, 
            fontSize: "2.3rem"
        }, 
        contentText2: {
            fontWeight: 400, 
            fontSize: "1rem",  
        }, 
        contentText3: {
            fontSize: "6rem"
        }, 
        contentText4: {
            fontSize: "1.5rem"
        }, 
        contentText5: {
            fontSize: "1.2rem", 
            fontWeight: 400
        }
    }, 
    palette: {
        textColor1: {
            main: "rgb(255, 255, 255, 0.5)"
        },
        textColor2: {
            main: "rgb(255, 255, 255)"
        }
    }, 
}); 

export default theme; 