import "../styles/navListItem.css"; 

function NavListItem({name, link}) {
  return (
    <li>
        <a href={link}>{name}</a>
    </li>
  )
}

export default NavListItem; 