// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let members = ["Wayne Barnett", "Angela Caroll", "Walter Gordon" , "Angela Lopez", "Scott Estrada", "Barbara Ramos"];

let occupation = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];

let data = {
    
        "name": ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
        "occupation": ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"],
        "photo": ["img/wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor", "walter-gordon-office-manager", "angela-lopez-social-media-manager", "scott-estrada-developer", "barbara-ramos-graphic-designer"]

}

console.log(data.name);
console.log(data.occupation);
console.log(data.photo);

for (i=0; i < 6; i++) {



}

const cardTitle = document.getElementById('member-name');

cardTitle.append(data.name[0]) 

const cardSubtitle = document.getElementById('member-position');

cardTitle.append(data.occupation[0])

const cardImgTop = document.getElementById('member-face');
cardImgTop.append(data.photo[0])




// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe