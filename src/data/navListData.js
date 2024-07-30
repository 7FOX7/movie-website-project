import { nanoid } from "nanoid"

const navListData = [
    {
        id: nanoid(4), 
        link: '#home', 
        name: 'home', 
        active: true 
    },

    {
        id: nanoid(4), 
        link: '#schedule', 
        name: 'schedule', 
        active: false
    },

    {
        id: nanoid(4), 
        link: '#blog', 
        name: 'blog', 
        active: false
    }
]

export default navListData; 