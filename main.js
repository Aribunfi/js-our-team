// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

//let members = ["Wayne Barnett", "Angela Caroll", "Walter Gordon" , "Angela Lopez", "Scott Estrada", "Barbara Ramos"];

//let occupation = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];
let members =

   [
        {
        "name" : "Wayne Barnett",

        "occupation" : "Founder & CEO" ,

        "photo" : "img/wayne-barnett-founder-ceo.jpg"

        } ,


        {"name": "Angela Caroll",

        "occupation": "Chief Editor",

        "photo": "angela-caroll-chief-editor"

       }


 ];

 for (let key in members) {
        console.log(members[key]);
 }



          //Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos" , ,  "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"], }],

             //"walter-gordon-office-manager", "angela-lopez-social-media-manager", "scott-estrada-developer", "barbara-ramos-graphic-designer"]



// console.log(data.name);
// console.log(data.occupation);
// console.log(data.photo);



// const cardTitle = document.getElementById('member-name');

// cardTitle.append(members.name[0])

// const cardSubtitle = document.getElementById('member-position');

// cardTitle.append(members.occupation[0])

// const cardImgTop = document.getElementById('member-face');
// cardImgTop.append(members.photo[0])


// for (let name in data) {
//   console.log(data[name]);
//  }

// for (i=0; i < 6; i++) {

//     document.createElement(data.name[members]);
//     document.createElement(data.occupation[occupation]);

// }



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// const palla = {
//         "prezzo": 12,
//         "tipo": "pallina da golf"
// };

// for (let key in palla) {
//         console.log(palla[key]);
// }