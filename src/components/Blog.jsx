import { useState } from "react"; 
import { useEffect } from "react"; 
import Box from "@mui/material/Box";
import { Typography } from "@mui/material"; 
import "../styles/blog.css"; 
import BlogCard from "./BlogCard";

function Blog() {
    const [blogs, setBlogs] = useState(null);

    const fetchData = () => {
        fetch('http://localhost:3000/data/blogData.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }
    
    useEffect(() => {
        fetchData(); 
    }); 

    return (
        <section id="blog" className="blogs">
            <Box sx={{width: "100%", display: "flex", flexDirection: "column"}}>
                <Box sx={{flexGrow: "1"}}>
                    <Typography variant="h3" color="textColor2.main" typography="contentText4" className="section-title">
                        Our Blog
                    </Typography>
                </Box>
                <Box sx={{flexGrow: "1", marginTop: "30px", display: "grid", gridTemplateColumns: "auto auto auto auto", columnGap: "30px"}}>
                    {
                        blogs && blogs.length > 0 && blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                    }
                </Box>
            </Box>
        </section>
    )
}

export default Blog; 