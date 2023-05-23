const btnOne = document.querySelector('#btn-one');
const btnTwo = document.querySelector('#btn-two');
let text = document.querySelector('#text');

const add = function (element, stop) {

    let x = element;

    return function () {

        x.style.fontSize = `${stop + +x.style.fontSize.replace('px', '')}px`;

    };

};

const plus = add(text, 5);
const minus = add(text, -5);

btnOne.addEventListener('click', () => {

    plus();

});

btnTwo.addEventListener('click', () => {

    minus();

});



