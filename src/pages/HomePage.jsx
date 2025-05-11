import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";
import { getRandomQuote } from "../services/quote_api";

import workImg from "../assets/work.png";
import studyImg from "../assets/study.png";
import relationshipsImg from "../assets/relationships.png";
import selfImg from "../assets/self.png";

const categoryImages = {
    Work: workImg,
    Study: studyImg,
    Relationships: relationshipsImg,
    Self: selfImg,
};

export default function HomePage(){

    //Quote part:
    const [quote, setQuote] = useState(null);
    useEffect(() => {
        setQuote(getRandomQuote());
    },[]);

    return (
    <div className = "home">
        <NavBar />

        
        <section className="HomePageBanner">
            <div className="banner-overlay">
                {quote && (
                    <>
                        <h2 className="quote">"{quote.text}"</h2>
                        <p className="author">- {quote.author} -</p>
                    </>
                )}
            </div>
        </section>

        <section className="HomePageFilter">
            <button>Today</button>
            <button>Tomorrow</button>
            <button>This week</button>
            <button>This month</button>
        </section>

        <section className="categories">
            {["Work", "Study", "Relationships", "Self"].map((cat) => (
                <div className="category-card" key={cat}>
                    <img src={categoryImages[cat]} alt={cat} />
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width:"60%"}}></div>
                    </div>
                    <h4>{cat}</h4>
                </div>
            ))}
        </section>
    </div>
    )
}