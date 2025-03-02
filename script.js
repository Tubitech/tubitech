const leftArrow = document.querySelector('.arrow arrow-left');
console.log(leftArrow)

console.log('hello world')
const rightArrow = document.querySelector('.arrow-right');
const cardsContainer = document.querySelector('.cards-container');

leftArrow.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -100, behavior: 'smooth' });
    console.log(leftArrow)
});

rightArrow.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: 100, behavior: 'smooth' });
});

