import "../styles/navListItem.css"; 

function NavListItem({name, link, active}) {
  return (
    <li>
        <a href={link}>{name}</a>
    </li>
  )
}

export default NavListItem