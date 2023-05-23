"use strict"

class Wrap {
    constructor() {
        this.table = document.createElement('table');
    }

    squers(){
        for(let i = 0; i < 10; i++){
            for (let k = 0; k < 10; k++){
                const squers = document.createElement('td')
                this.table.appendChild(squers);
            }
        }
    }

    render(selector = 'body'){
        selector.append(squers())
    }
}

new Wrap().render();