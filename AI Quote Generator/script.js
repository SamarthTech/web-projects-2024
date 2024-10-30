const getQuoteBtn = document.getElementById("getQuoteBtn");
const quoteText = document.getElementById("quoteText");

// Configuration options for quotes
const quoteConfig = {
    tags: [], 
    minLength: 100,
    maxLength: 200,
    author: ''
};

// Backup quotes in case API fails
const fallbackQuotes = [
    { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { content: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" }
];

getQuoteBtn.addEventListener("click", () => {
    getQuoteBtn.classList.add("loading");
    getQuoteBtn.textContent = "Loading...";
    getQuote();
});

// Initially, remove loading state
getQuoteBtn.classList.remove("loading");
getQuoteBtn.textContent = "Get Quote";

function buildApiUrl() {
    // Using a CORS proxy to handle SSL issues
    const corsProxy = "https://cors-anywhere.herokuapp.com/";  // Note: You'll need to request access first
    const baseUrl = "https://api.quotable.io/random";
    const params = new URLSearchParams();

    if (quoteConfig.tags.length > 0) {
        params.append("tags", quoteConfig.tags.join(","));
    }
    
    if (quoteConfig.minLength) {
        params.append("minLength", quoteConfig.minLength);
    }
    
    if (quoteConfig.maxLength) {
        params.append("maxLength", quoteConfig.maxLength);
    }
    
    if (quoteConfig.author) {
        params.append("author", quoteConfig.author);
    }

    const queryString = params.toString();
    return `${corsProxy}${baseUrl}${queryString ? `?${queryString}` : ''}`;
}

function getFallbackQuote() {
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
}

function getQuote() {
    const apiUrl = buildApiUrl();
    
    fetch(apiUrl, {
        headers: {
            'Origin': window.location.origin,
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const formattedQuote = `"${data.content}" - ${data.author}`;
            quoteText.innerHTML = formattedQuote;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            // Use fallback quote when API fails
            const fallbackQuote = getFallbackQuote();
            const formattedFallback = `"${fallbackQuote.content}" - ${fallbackQuote.author}`;
            quoteText.innerHTML = formattedFallback;
        })
        .finally(() => {
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.textContent = "Get Quote";
        });
}