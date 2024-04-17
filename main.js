// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: `"I am the night"`,
        person: "batman"
    },
    {
        quote: `"I am vengeance"`,
        person:"batman"
    },
    {
        quote: `I am BATMAN"`,
        person: "batman"
    },
    {
        quote: `"What if a child dreams of becoming something other than what society had intended?"`,
        person: "superman"
    },
    {
        quote: `"A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders to let him know that the world hadn't ended."`,
        person:"batman"
    },
    {
        quote: `"Heroes are made by the path they choose, not the powers they are graced with."`,
        person: "iron-man"
    },
    {
        quote: `"With great power comes great responsibility."`,
        person: "spiderman"
    },
    {
        quote: `"I wear a mask. And that mask, it's not to hide who I am, but to create what I am."`,
        person:"batman"
    },
    {
        quote: `"I am the goddamn BATMAN"`,
        person: "batman"
    },
    {
        quote: `"The idea was to be a symbol. Batman could be anybody, that was the point."`,
        person: "batman"
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})