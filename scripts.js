const quoteElement = document.getElementById("quote");
const button = document.getElementById("sendButton");

let quotes = [];
let lastIndex = -1;

async function loadQuotes() {
    const response = await fetch("minions.json");
    const data = await response.json();
    quotes = data.quotes;
}

function getRandomQuote() {
    if (!quotes.length) return;

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);

    lastIndex = randomIndex;
    quoteElement.textContent = quotes[randomIndex];
}

button.addEventListener("click", getRandomQuote);

loadQuotes();