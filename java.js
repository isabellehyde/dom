const main = document.querySelector('main');

const jokeOne = "A horse walked into a bar. The bartender said why the long face?"
const jokeTwo = "A horse walked into a bar. Ouch."
const jokeThree = "A dyslexic horse walked into a bra."

const template = `
<section>
<h1>My Jokes</h1>
<ul>
    <li>${jokeOne}</li> 
    <li>${jokeTwo}</li>
    <li>${jokeThree}</li>
 </ul>
</section>
`
main.innerHTML = template

const p = document.createElement('p');
p.textContent = "That's all folks!"
main.appendChild(p);