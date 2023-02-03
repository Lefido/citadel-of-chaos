AOS.init();

const check_naratif = document.querySelector(".check-naratif");
const naratif = document.querySelector(".check-naratif");
const choice = document.querySelector(".choice-containt");

const cont_choice = document.querySelector(".choice");
const cont_inventaire = document.querySelector(".cont-inventaire");

let check_choice = document.querySelectorAll(".btn-choice");

/// Button Choice

const click_choice = document.querySelector(".puce-1");

click_choice.addEventListener("click", function () {
  console.log("j'ai cliqué sur choice");
  cont_choice.classList.toggle("choice-visible");
  cont_inventaire.classList.remove("inventaire-visible");
});

/// Button Inventaire

const puce_2 = document.querySelector(".puce-2");

puce_2.addEventListener("click", function () {
  console.log("j'ai cliqué sur l'inventaire");
  cont_inventaire.classList.toggle("inventaire-visible");
  cont_choice.classList.remove("choice-visible");
});

check_naratif.addEventListener("click", function () {
  cont_choice.classList.remove("choice-visible");
  cont_inventaire.classList.remove("inventaire-visible");
});

// Chargement du Json

let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON


/// Etape en cours ///
let num_etape = 1;
let etape = list_etape[num_etape]


step_type(etape.step_type);
content(etape.content)
pathways(etape.pathways)


/// Step_type ///
function step_type(step_type) {
  console.log("step_type :", step_type)
}

function content(content) {

   naratif.innerHTML = num_etape + ". " + etape.content;
   console.log(content)
}

/// Pathways ///
function pathways(pathways) {

   // console.log(pathways)

   choice.innerHTML =""
   
   for (const p in pathways) {

      let btn = document.createElement('button')
      btn.classList.add("btn-choice")
      btn.classList.add("btn")
      btn.classList.add("btn-color")
      btn.dataset.step_id = p
        
        choice.appendChild(btn);

        btn.innerHTML = pathways[p].content

        console.log(p, pathways[p].content)

   }

   check_choice = document.querySelectorAll(".btn-choice")

   console.log("Lite des bouttons", check_choice)

}

/// Combat ///
function combat(nb_rounds) {
  console.log("Max round ", nb_rounds);
}

/// Chance ///

function chance() {}
