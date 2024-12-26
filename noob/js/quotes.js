const quotes = [
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        quote: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The secret of happiness is not doing what one likes, but in liking what one does.",
        author: "JM Barrie"
    },
    {
        quote: "Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
        author: " Oscar Wilde"
    },
    {
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Stephen Chomsky"
    },
    {
        quote: "I'm not afraid of storms, for I'm learning how to sail my ship.",
        author: "Louisa May Alcott"
    },
    {
        quote: "You only live once but, if you do it right, once is enough.",
        author: "Mae West"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

let todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;


