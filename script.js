let addIcon = document.querySelector('.addIcon');
let cardsContainer = document.querySelector('.cards');








addIcon.addEventListener('click', function() {
    let userInput = document.querySelector('.inputContainer input').value;
    if (!(userInput.length === 0)) {
        let cardsHTML = `<div class="card">
        <span>${userInput}</span>
        <div class="show">
        <i class="fas fa-check-square checkIcon"></i>
        <i class="fas fa-window-close closeIcon"></i>
        </div>
    </div>`
        cardsContainer.innerHTML += cardsHTML;
        document.querySelector('.inputContainer input').value = '';
    }    
});







document.addEventListener('click', function(event) {
    let element = event.target;
    let firstParent;
    if(element.classList.contains('closeIcon')) {
        firstParent = element.parentElement.parentElement;
        cardsContainer.removeChild(firstParent);
    }
    else if (element.classList.contains('checkIcon')){
        firstParent = element.parentElement;
        let secondParent = firstParent.parentElement;
        firstParent.removeChild(element);
        secondParent.style.backgroundColor = 'lightgreen';
    }






})










