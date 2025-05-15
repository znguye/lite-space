import NavBar from "../components/NavBar";
import React from "react";
//Banner - to be refactored
import { useEffect, useState } from "react";
import { getRandomQuote } from "../services/quote_api";

import CommpassCard from "../components/CompassCard"; 
import '../pages/pages_styles/CompassPage.css'
import Archetype from "../components/Archetype";


export default function CompassPage(){

    //Quote part:
        const [quote, setQuote] = useState(null);
        useEffect(() => {
            setQuote(getRandomQuote());
        },[]);

    return(
        <div>
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

            <section className="card-container">
                <div className="card"><Archetype /></div>
                <div className="card"><CommpassCard /></div>
                <div className="card">Card 3</div>

            </section>
        </div>
    )
}