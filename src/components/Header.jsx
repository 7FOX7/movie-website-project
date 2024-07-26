import React from 'react'; 
import NavListItem from './NavListItem';
import navListData from '../data/navListData';
import Search from './Search';

import "../styles/header.css"; 


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
    </header>
  )
}

export default Header