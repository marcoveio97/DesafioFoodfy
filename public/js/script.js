const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function () {
        const cardId = card.getAttribute('id');
        window.location.href = `/receitas/${cardId}`;
    });
}

//const links = document.querySelector('.links');
//const link = links.querySelectorAll('a');

//for (let a of link) {
//    a.addEventListener('click', function () {
//        a.classList.add('ativo');
//    });
//}