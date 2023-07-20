import React from "react";
import './Possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility=()=>{
    return(
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility"/>
            </div>
            
                <div className="gpt3__possibility-content">
                    <h3>Let's Get Started!</h3>
                    <h2 className="gradient__text">The possibilities in AI are endless!</h2>
                    <p>
                    As technology advances and AI continues to evolve, it is likely that we will see even more innovative and impactful applications in various domains.
                    </p>
                </div>
            
        </div>
    )
}

export default Possibility;