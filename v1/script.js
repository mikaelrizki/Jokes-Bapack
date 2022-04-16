const button = document.getElementById('nextButton');

button.addEventListener('click', async () =>{
    const kolomJoke = document.getElementById('joke');

    let joke = await fetch('http://api-dad-jokes.herokuapp.com/v1/joke');
    joke = await joke.json();

    joke = joke.joke.joke;

    kolomJoke.innerText = joke;
});