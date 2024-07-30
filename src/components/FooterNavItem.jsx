import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../styles/footerNavItem.css"; 

function FooterNavItem({name}) {
  return (
    <li>
        <ChevronRightIcon className="icon" sx={{color: "textColor2.main"}}/>
        <a href="#">{name}</a>
    </li>
  )
}

export default FooterNavItem; 