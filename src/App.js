import React from "react";
import Article from "./components/article/Article";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/cta";
import Feature from "./components/feature/Feature";
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import Whatgpt3 from "./containers/whatgpt3/whatgpt3";
import './App.css'

const App= ()=>{
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <Whatgpt3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App;