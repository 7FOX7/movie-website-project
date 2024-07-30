import Box  from "@mui/material/Box";
import "../styles/footer.css"; 
import { Typography, useMediaQuery } from "@mui/material";
import theme from "../themes/theme";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import FooterNavItem from "./FooterNavItem";
import { usefulLinks, locations } from "../data/links";

function Footer() {
    const smallDevice = useMediaQuery(theme.breakpoints.between("xs", "md"))
    return (
        <footer id='footer' className="footer">
            <Typography color="textColor2.main" variant="span" fontSize="14px">
                <Box className="footer-top">
                    <Box className="container">
                        <Box className="footer-info">
                            <a href="/" className="logo" style={{width: "fit-content", height: "fit-content"}}>
                                <Typography variant="span" color="textColor2.main" typography="contentText8">
                                    CINEMA
                                </Typography>
                            </a>
                            <Box sx={{maxWidth: "50%", textWrap: "wrap", overflow: "hidden", height: "fit-content"}}>
                                <Typography variant="body1">
                                    Cjsoiswl jdsuwlslo sjsundndsolw djsusslsolw
                                    skssikw nada jduwlsolaolwls ussnsl sunmmwsn
                                    lsumensna suwmwnsn paolsolw. 
                                </Typography>
                            </Box>
                            <Box className="social-links">
                                <a href="#">
                                    <YouTubeIcon fontSize="large"/>
                                </a>
                                <a href="#">
                                    <GitHubIcon fontSize="large"/>
                                </a>
                                <a href="#">
                                    <FacebookIcon fontSize="large"/>
                                </a>
                            </Box>
                        </Box>
                        
                        <Box className="footer-links">
                            <Box>
                                <Typography variant="h4" typography="contentText7">
                                    Useful Links
                                </Typography>
                                <Box>
                                    <ul>
                                        {usefulLinks.map(link => <FooterNavItem key={link} name={link} />)}
                                    </ul>
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="h4" typography="contentText7">
                                    Our Cinemas
                                </Typography>
                                <Box>
                                    <ul>
                                        {locations.map(link => <FooterNavItem key={link} name={link} />)}
                                    </ul>
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="h4" typography="contentText7">
                                    Contact Us
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Phone: </strong> +1 234 555 6666
                                    <br />
                                    <strong>Email: </strong> example@gmail.com
                                    <br />
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="footer-bottom">
                    <Box className="copyright">
                        Copyright
                        <strong>
                            <span> 7FOX7</span>
                        </strong>
                        . All Rights Reserved
                    </Box>
                    <Box className="credits">
                        Designed by <a href="#">7FOX7</a>
                    </Box>
                </Box>
            </Typography>
        </footer>
    )
}

export default Footer; 