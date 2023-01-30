

 AOS.init();

import { etapes } from "./Etape.js";
import { pathway } from "./Pathway.js";

const naratif = document.querySelector(".check-naratif")
const choice = document.querySelector(".choice-containt")

console.log(choice)

let etape = 1

naratif.innerHTML = check_naratif(etape)

choices(pathway[etape].choice)

// Check naratif

function check_naratif(id) {

    return etapes[id].containt
}

// Liste des questions

function choices(list_choix) {

    choice.innerHTML =""

    list_choix.forEach(choix => {

        let btn = document.createElement('a')
        
        choice.appendChild(btn);

        btn.innerHTML = choix[0]

        console.log(choix[0])
        
    });

    console.log(list_choix.length)
}



