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
        }
    }, 
    palette: {
        contentTextColor: {
            main: "rgb(255, 255, 255, 0.5)"
        },
        buttonColor: {
            main: "rgb(255, 255, 255)"
        }
    }, 
}); 

export default theme; 