import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "../styles/search.css"

function Search() {
  return (
    <div className="search">
        <input type="text" placeholder="Search"/>
        <SearchOutlinedIcon className="search-icon"/>
    </div>
  )
}

export default Search