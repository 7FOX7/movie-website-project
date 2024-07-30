import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import "../styles/backToTopButton.css"; 

function BackToTopButton({scroll}) {
    function backToTop() {
        window.scrollTo(0, 0); 
    }

    return (
        <a className={`back-to-top ${scroll > 100 ? 'active' : undefined}`} onClick={backToTop}>
            <ArrowCircleUpOutlinedIcon fontSize="large" sx={{color: "textColor2.main"}} />
        </a>
    )
}

export default BackToTopButton; 