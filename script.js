/******************************************* Medicines Database **********************************************/

let medicines = [
  /******************************************* fever **********************************************/
  {
    id: 1,
    problem: "fever",
    solution:
      "Acetaminophen(Tylenol, others), Ibuprofen(Advil, Motrin IB, others) / Aspirin",
  },

  /******************************************* cough **********************************************/
  {
    id: 2,
    problem: "cough",
    solution:
      "[ Triaminic Cold and Cough, Robitussin Cough, Vicks 44 Cough and Cold ], [ Mucinex, Robitussin Chest Congestion ]",
  },

  /******************************************* influenza **********************************************/
  {
    id: 3,
    problem: "influenza",
    solution: "Oseltamivir / Inhaled Zanamivir / Peramivir / Baloxavir",
  },

  ,
  /******************************************* headache **********************************************/ {
    id: 4,
    problem: "headache",
    solution:
      "Aspirin, Ibuprofen(Advil, Motrin IB, others), Naproxen sodium(Aleve)",
  },

  /******************************************* stomach pain **********************************************/
  {
    id: 5,
    problem: "stomach pain",
    solution: "Acetaminophen(Aspirin free Anacin, Liquiprin, Panadol, Tylenol)",
  },

  /******************************************* diarrhea **********************************************/
  {
    id: 6,
    problem: "diarrhea",
    solution:
      " Loperamide(Imodium), Bismuth subsalicylate(Kaopectate, Pepto-Bismol) ",
  },

  /******************************************* malaria **********************************************/
  {
    id: 7,
    problem: "malaria",
    solution:
      " Choloroquine Phosphate, ACTs(Artemisinin-based combination therapies) ",
  },

  /******************************************* cholera **********************************************/
  {
    id: 8,
    problem: "cholera",
    solution: " Furazolidone, Cholamphenicol, Sulfaguanidine ",
  },

  /******************************************* acidity **********************************************/
  {
    id: 9,
    problem: "acidity",
    solution:
      " Esomeprazole(Nexium), Lansoprazole(Prevacid), Omeprazole(Prilosec), Pantoprazole(Protonix), Rabeprazole(Aciphex), Dexlansoprazole(Dexilant) ",
  },

  /******************************************* knee pain **********************************************/
  {
    id: 10,
    problem: "knee pain",
    solution:
      " Ibuprofen(Advil, Motrin IB, others), Naproxen Sodium(Aleve), Creams(containing Lidocaine / Capsaicin) ",
  },
];

/************************************************ Logical stuffs ************************************************************/

let textBox = document.getElementById("inputText");
let btn = document.getElementById("searchBtn");
let resultId = document.getElementById("resultId");
let resultProb = document.getElementById("resultProb");
let resultSol = document.getElementById("resultSol");

let searchVal = "";

textBox.addEventListener("change", (e) => {
  searchVal = e.target.value;
});

btn.addEventListener("click", () => {
  medicines.forEach((item) => {
    if (item.problem === searchVal.toLocaleLowerCase()) {
      resultId.innerHTML = item.id;
      resultProb.innerHTML = item.problem;
      resultSol.innerHTML = item.solution;
    }
  });
});
