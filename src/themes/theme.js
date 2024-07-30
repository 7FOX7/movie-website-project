import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        contentText1: { 
            fontSize: "2.3rem",
            fontWeight: 400,
        }, 
        contentText2: { 
            fontSize: "1rem",
            fontWeight: 400,  
        }, 
        contentText3: {
            fontSize: "6rem"
        }, 
        contentText4: {
            fontSize: "1.5rem"
        }, 
        contentText5: {
            fontSize: "1.1rem", 
            fontWeight: 400
        }, 
        contentText6: {
            fontSize: "1.4rem", 
            fontWeight: 400
        }, 
        contentText7: {
            fontSize: "1rem", 
            fontWeight: 600
        }, 
        contentText8: {
            fontSize: "2.3rem",
            fontWeight: 700, 
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