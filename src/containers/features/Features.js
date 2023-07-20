import React from "react";
import './Features.css';
import Feature from "../../components/feature/Feature";

const featuresData=[
    {
        title:'AI in past',
        text:'Introduction-Artificial Intelligence (AI) has rapidly evolved over the years, transforming from a concept of science fiction to a reality that influences our daily lives. While AI has made remarkable advancements in recent times, it is crucial to acknowledge the significant milestones and breakthroughs that paved the way for its current state.'
    },
    {

    },
    {
        title:'AI now',
        text:'The current situation of AI showcases remarkable advancements in various domains, from deep learning and NLP to computer vision and autonomous systems. While AI offers immense potential and benefits, challenges such as ethics, data privacy, and transparency need to be carefully addressed. It is important to foster responsible AI development, enabling its positive impact while mitigating potential risks.'
    },
    {
        title:'AI in future',
        text:'The future of AI holds immense possibilities, ranging from enhanced automation and personalized experiences to breakthroughs in healthcare and autonomous systems. However, addressing ethical considerations, such as bias and fairness, ensuring job reskilling, and maintaining privacy and security, will be crucial. Human-AI collaboration will shape the future, emphasizing the need for responsible development, ethical governance, and a proactive approach to leverage AI potential for the betterment of society.'
    }
]

const Features=()=>{
    return(
        <div>
            <div className="gpt3__features section__padding">
                <div className="gpt3__features-heading">
                    <h2 className="gradient__text">The  future is now<br/>and you just need to realize it.<br/> Step into future today & make it happen!</h2>
                    <p className="para">Request early to get access and get started!!</p>
                </div>
                <div className="gpt3__features-container">
                    {featuresData.map((item, index)=>(
                        <Feature title={item.title} text={item.text} key={item.title+index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;