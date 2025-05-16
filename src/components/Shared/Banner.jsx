import { useEffect, useState } from "react";
import { getRandomQuote } from "../../services/quote_api";

export default function Banner(){

    //Creating the quote state to get a random quote every refresh
    const [quote, setQuote] = useState(null);
    useEffect(() => {
        setQuote(getRandomQuote());
    },[]);

    return(
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
    )


}