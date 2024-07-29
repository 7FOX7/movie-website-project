import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "../styles/blogCard.css";  

function BlogCard({blog}) {
  return (
    <Box className="blog">
        <article>
            <Box className="post-img">
                <img src={blog.thumbnail} alt="thumbnail image" style={{maxWidth: "100%", height: "auto"}}/>
            </Box>
            <Typography variant="body1" className="post-category" color="textColor2.main" typography="contentText2">
                {blog.category}
            </Typography>
            <Typography variant="h3" className="title" typography="contentText6">
                <a href="#">
                    {/* <Typography color="textColor2.main" variant="body1" typography="contentText6">{blog.title}</Typography> */}
                    {blog.title}
                </a>
            </Typography>

            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={blog.author.image} alt={blog.author.name} className="post-author-img"/>
                <Box className="post-meta">
                    <Typography variant="body1" color="textColor2.main" typography="contentText7" >
                        {blog.author.name}
                    </Typography>
                    <Typography variant="body1" color="textColor2.main" fontSize="14px">
                        <time dateTime="2024-04-04">{blog.date}</time>
                    </Typography>
                </Box>
            </Box>
        </article>
    </Box>    
  )
}

export default BlogCard; 