'use strict'

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];




class Iteam {
    constructor(e) {

        if ( e.author === undefined || e.name === undefined || e.price === undefined){
            throw new InvalidError();

        }

        this.author = e.author;
        this.name = e.name;
        this.price = e.price;
    }

    validator(){
        if (!Object.keys(this.author).includes('author')){
            throw new InvalidError('author')
        }else if (!Object.keys(this.name).includes('name')){
            throw new InvalidError('name')
        }else if (!Object.keys(this.price).includes('price')){
            throw new InvalidError('price')
        }
    }
    render(){
        const div = document.querySelector('#root');
        const list =    `<ul>
                                    <li>${this.author}</li>
                                    <li>${this.name}</li>
                                    <li>${this.price}</li>
                                </ul> `

        div.insertAdjacentHTML('beforeend',list);

        this.validator()
    }
}

class InvalidError extends Error {
    constructor(e) {
        super();
        this.names = 'InvalidError';
        this.message = `InvalidError ${e} `;

    }
}

books.forEach((e) => {

    try {

        new Iteam(e).render();

    }catch (error) {

        if (error.names === 'InvalidError'){
            console.log(error)
        }else{
            throw error
        }
    }

})


