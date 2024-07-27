import NavListItem from './NavListItem';
import navListData from '../data/navListData';
import Search from './Search';
import "../styles/header.css"; 
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
  return (
    <header>
        <a href="" className="logo">
            Cinema
        </a>
        <ul className="nav">
            {navListData.map(nav => 
                <NavListItem 
                    key={nav.id}
                    name={nav.name}
                    link={nav.link}
                    active={nav.active}
                />
            )}
        </ul>
        <Search />
        <Button sx={{
          position: "relative", 
          display: "inline-flex",
          background: "var(--primary)", 
          color: "#fff", 
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
          <LoginIcon />
          Sign in
        </Button>
    </header>
  )
}

export default Header