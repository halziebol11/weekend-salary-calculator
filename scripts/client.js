let monthlyCost = 0; //variable to track total of employee salaries

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
        <td><button onClick="removeEmployee(event)">remove</button></td>
    </tr>
    `;
    monthlyCost += annualSalary;
    updateMonthlyCost();
}

//function to remove employee based on getConfirmation() results
function removeEmployee(event){
    getConfirmation()
    if(move== true){
        let cell = event.target.parentElement.closest('tr').querySelector(':nth-child(5)')
        let reduction = parseInt(cell.innerHTML)
        monthlyCost -= reduction;
        event.target.closest('tr').remove();
        updateMonthlyCost();
    }
}

let move = false; //variable for dialog box

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

 //function to update monthly cost, feeds into handleSubmit() and removeEmployee()
 function updateMonthlyCost(){
    document.querySelector('#monthly-cost').innerHTML = `Total Monthly Cost: ${monthlyCost}`
 }