
AOS.init();

const check_naratif = document.querySelector(".check-naratif")

const naratif = document.querySelector(".check-naratif")
const choice = document.querySelector(".choice-containt")

const cont_choice = document.querySelector('.choice')
const cont_inventaire = document.querySelector('.cont-inventaire')


const click_choice = document.querySelector(".puce-1")

click_choice.addEventListener("click", function (){

   console.log("j'ai cliqué sur choice")
   cont_choice.classList.toggle('choice-visible')
   cont_inventaire.classList.remove('inventaire-visible')

})

const puce_2 = document.querySelector(".puce-2")

puce_2.addEventListener("click", function (){

   console.log("j'ai cliqué sur l'inventaire")
   cont_inventaire.classList.toggle('inventaire-visible')
   cont_choice.classList.remove('choice-visible')

})

check_naratif.addEventListener('click', function() {

   cont_choice.classList.remove('choice-visible')
   cont_inventaire.classList.remove('inventaire-visible')

})


let url = './json/citadel_of_chaos.json';
let response = await fetch(url);

let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON


let num_etape = 1;

choice_etape(list_etape[num_etape])


/// Affiche l'étape en cours ///

function choice_etape(etape) {

   naratif.innerHTML = num_etape + ". " + etape.containt

   switch (etape.step_tape) {

      // Mode combat
   
      case "combat":

         console.log("Combat");

         combat(etape.max_rounds)

         if (etape.is_escapable) {

            console.log("Combat obligatoire")
         
         } else {


          console.log("Je peux fuir le combat")
         
         }

         break;

      // Mode chance
      
      case "chance":
         console.log("chance");
         chance()
         break;

   }

}

/// Combat ///

function combat(nb_rounds) {

   console.log("Max round ", nb_rounds)

}

/// Chance ///

function chance() {



}



