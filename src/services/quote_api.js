import quotes from "../../quote.json";

export function getRandomQuote(){
  const index= Math.floor(Math.random()*quotes.length);
  return quotes[index];
}