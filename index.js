
let realData = "";
let quoteData = "";
// let author = "Unknown";
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQoutes = document.getElementById('newQuotes');


// function for new quotes
const getNewQuotes = ()=>{
    let randomIndex = Math.floor(Math.random()*1600); 
    // console.log(randomNumber);
    quoteData = realData[randomIndex];
    quotes.innerText = `${quoteData.text}`;
    quoteData.author == null ? (author.innerText = "Unknown"): (author.innerText = `${quoteData.author}`);
    

}


// Function to refresh the page
const refresh = ()=>{
    window.location.reload();
}


// Function for getting quotes from api
const getQuotes = async ()=>{
    const apiUrl = "https://type.fit/api/quotes"
    try {
         let data = await fetch(apiUrl)
         realData =await data.json();
        getNewQuotes();
    } catch (error) {
        console.log('Quote cant be fetched');
    }

}

newQoutes.addEventListener('click' , getQuotes);
newQoutes.addEventListener('click' , refresh);
getQuotes();