import React from "react";
import './Blog.css';
import Article from "../../components/article/Article";
import  blog01  from '../../assets/blog01.jpeg'
import  blog02  from '../../assets/blog02.jpeg'
import  blog03  from '../../assets/blog03.jpeg'
import  blog04  from '../../assets/blog04.jpeg'
import  blog05  from '../../assets/blog05.jpeg'

const Blog=()=>{
    return(
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-header">
                <h2 className="gradient__text">Welcome to our blogging section!</h2>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Jul 20, 2023" title="AI & ML: Powering the Future"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Jul 20, 2023" title="Harnessing AI & ML: Innovation Unleashed"/>
                    <Article imgUrl={blog03} date="Jul 20, 2023" title="Exploring AI & ML: Revolutionizing Industries"/>
                    <Article imgUrl={blog04} date="Jul 20, 2023" title="AI & ML: The Path to Intelligent Automation"/>
                    <Article imgUrl={blog05} date="Jul 20, 2023" title= "AI & ML Advancements: Shaping Tomorrow's World"/>
                </div>
            </div>
        </div>
    )
}

export default Blog;