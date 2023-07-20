import React from "react";
import './cta.css';

const Cta=()=>{
    return(
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Let's get started...</p>
                <h3>Register today to explore AI!</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </div>
        </div>
    )
}

export default Cta;