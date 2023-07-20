import React from "react";
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.jpeg';

const Header=()=>{
    return(
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h2 className="gradient_text">Let's Build with GPT-3 OpenAI</h2>
                <p className="text">
                OpenAI develops and deploys cutting-edge AI models 
                and tools, including natural language processing models 
                like GPT-3, reinforcement learning algorithms, and 
                computer vision models, to solve real-world problems and 
                conduct research in various fields, including medicine, 
                robotics, and more.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your E-Mail Address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p className="text1">
                        So many people have requested access in 24 hours!!
                    </p>
                </div>
            </div>
                <div className="gpt3__header-image">
                    <img src={ai} alt="ai"/>
                </div>
        </div>
        
    )
}

export default Header;