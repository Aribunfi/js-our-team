const card = document.getElementById("teamMember");




let members =
       [
              {
                     "name": "Wayne Barnett",

                     "occupation": "Founder & CEO",

                     "photo": "img/wayne-barnett-founder-ceo.jpg"
              },


              {
                     "name": "Angela Caroll",

                     "occupation": "Chief Editor",

                     "photo": "angela-caroll-chief-editor.jpg"
              },



              {
                     "name": "Walter Gordon",

                     "occupation": "Office Manager",

                     "photo": "walter-gordon-office-manager.jpg"
              },


              {
                     "name": "Angela Lopez",

                     "occupation": "Social Media Manager",

                     "photo": "angela-lopez-social-media-manager.jpg"
              },


              {
                     "name": "Scott Estrada",

                     "occupation": "Developer",

                     "photo": "scott-estrada-developer.jpg"
              },



              {
                     "name": "Barbara Ramos",

                     "occupation": "Graphic Designer",

                     "photo": "barbara-ramos-graphic-designer.jpg"
              }

       ];

for (const member of members) {
       console.log(member.name);
       console.log(member.occupation);
       console.log(member.photo);


       const cardHTML =
              `
<div class="card" style="width: 18rem;" id="teamMember">
<div class="cardBody">
    <img src=". . ." class="cardImgTop" id="member-face" alt="...">

    <h5 class="cardTitle" id="member-name">${member.name}</h5>
    <h6 class="cardSubtitle" id="member-position">${member.occupation}</h6>

</div>
</div>`;
}


card.innerHTML += cardHTML;


