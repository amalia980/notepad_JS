const myForm = document.getElementById('form');




myForm.addEventListener('input', function(e) {
    e.preventDefault();

    const titleInput = document.createElement('title')
    const desInput = document.createElement('description');

    const myButton = document.getElementById('button');
    const myTbody = document.getElementById('tbody');



    if (titleInput.length >= 3 && desInput.length >= 3) {

        myButton.addEventListener('click', function(e) {
            e.preventDefault();

            const row = document.createElement('tr');

            const tdTitle = document.createElement('td');
            const tdDes = document.createElement('td');
            //const tdDate = document.createElement('td');
            
            tdTitle.innerText = titleInput.value;
            tdDes.innerText = desInput.value;
            //tdDate.innerHTML = tdDate.getTime();

            row.appendChild(tdTitle);
            row.appendChild(tdDes);
            //row.appenChild(tdDate)

            myTbody.appendChild(row);

        });
    }
});