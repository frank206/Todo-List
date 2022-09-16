const addProjectBtn = document.querySelector('#btn1');
const modalInput = document.querySelector('form');
const tableBody = document.querySelector('tbody');
const deleteRowBtn = document.querySelector('table');
const editBtn = document.querySelector('edit');

function addInput(e){
    //e.preventDefault();
    const projectName = document.getElementById('projectInput').value;
    const date = document.querySelector('#dateInput').value;
    const priority = document.querySelector('#priority').value;
    const description = document.querySelector('#projectDetails').value;
    tableBody.innerHTML +=`
        <tr data-bs-target="#collapseExample" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">
            <td>${projectName}</td>
            <td>${date}</td>
            <td>${priority}</td>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                ${description}
            </div>
            </div>
            
            <td><button class="edit" data-bs-toggle="modal" data-bs-target="#modal">Edit</button></td>
            <td><button class="deleteBtn">Delete</button></td>
    `
    const inputs = document.querySelectorAll('#projectInput, #dateInput, #projectDetails, #priority')
    inputs.forEach(input => {
        input.value = "";
    })
}

function deleteRow(e){
    if(!e.target.classList.contains('deleteBtn')){
        return;
    }
    const bnt = e.target;
    bnt.closest('tr').remove();
}


addProjectBtn.addEventListener('click',addInput);
deleteRowBtn.addEventListener('click',deleteRow);

