import React from "react";
import './whatgpt3.css';
import Feature from "../../components/feature/Feature";

const Whatgpt3=()=>{
    return(
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is a language generation model developed by OpenAI, which was released in June 2020. It is an advanced version of the GPT series, which uses deep learning techniques to generate human-like language."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h2 className="gradient-text">The Possibilities are beyond your imagination...!</h2>
                <p>Explore Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbot" text="A chatbot is a computer program designed to simulate conversation with human users, usually through text-based messaging interfaces. Chatbots use natural language processing and machine learning algorithms to understand and interpret user input and generate appropriate responses.
Chatbots can be used for a wide range of purposes, such as customer support, marketing, and entertainment. They can also be integrated with other technologies, such as voice assistants and messaging apps."/>
                <Feature title="Knowledgebase" text="A knowledge base is a centralized repository of information that contains data, documents, and resources related to a specific subject or organization. It is designed to facilitate knowledge sharing and collaboration, and it can be used to store and organize information such as best practices, product information, troubleshooting guides, and more."/>
                <Feature title="Education" text="A knowledge base is a centralized repository of information that contains data, documents, and resources related to a specific subject or organization. It is designed to facilitate knowledge sharing and collaboration, and it can be used to store and organize information such as best practices, product information, troubleshooting guides, and more."/>
            </div>
        </div>
    )
}

export default Whatgpt3;