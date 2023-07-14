//function to enter values from form into table
function handleSubmit(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    document.querySelector('#employee-table').innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onClick="remove(event)">remove</button></td>
    </tr>
    `
}

//function to remove employee based on getConfirmation() results
function remove(event){
    getConfirmation()
    if(move== true){
        event.target.closest('tr').remove();
    }
    else {
        alert ("Choose the employee you would like to remove.")
    }
}

let move = false;

//function for confirmation dialog box
function getConfirmation(){
    const response = confirm("Are you sure you want to remove this employee?");
    if (response) {
         move = true;
    } 
    else {
        move = false;
    }
 }