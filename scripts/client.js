//emptyform after submit ???

let monthlyCost = 0; //variable to track total of employee salaries

//function to enter values from form into table
function handleSubmit(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    let annualSalInt = parseInt(annualSalary)
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
    monthlyCost += annualSalInt;
    updateMonthlyCost();
    document.querySelector('#form').reset();
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
    let query = document.querySelector('#monthly-cost')
    query.innerHTML = `Total Monthly Cost: ${monthlyCost}`
    if(monthlyCost>20000){
       query.style.backgroundColor = "red";
    }
    else{
        query.style.backgroundColor = "white"
    }
 }