const titleInput = document.createElement('title');
const noteInput = document.createElement('note');

const myButton = document.getElementById('button');

const myTbody = document.getElementById('tbody');

function whenClicked() {

    // skapar ett <tr> element
    const row = document.createElement("tr");

    // skapar ett <td> element
    const td1 = document.createElement("td");
    // lagger vi vardet fran <input>
    // firstname i td elementet
    td1.innerText = titleInput.value;

    // skapar ett <td> element
    const td2 = document.createElement("td");
    // lagger vi vardet fran <input>
    // lastName i td elementet
    td2.innerText = noteInput.value;

    // skapar ett <td> element
    //const td3 = document.createElement("td");
    // lagger vi vardet fran <input>
    // email i td elementet
    //td3.innerText = email.value;

    // Vi lagger in alla <td> vi skapat
    // inuti varan <tr> som vi skapat (table row)
    row.appendChild(td1);
    row.appendChild(td2);
    //row.appendChild(td3);

    // stoppar in varan <tr> vi skapat i varan
    // tabels <tbody>.
    myTbody.appendChild(row);
}

myButton.addEventListener("click", whenClicked);