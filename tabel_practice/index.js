function addRow(){
    let table = document.getElementsByTagName('second-table')[0];
    let tbody = document.getElementsByTagName('tbody')[0];
    let fName = document.getElementById('fName').value;
    let mName = document.getElementById('mName').value;
    let lName = document.getElementById('lName').value;

    let newRow = tbody.insertRow(0);
    let newCell1 = newRow.insertCell(0)
    let newCell2 = newRow.insertCell(0)
    let newCell3 = newRow.insertCell(0)

    newCell1.innerHTML = fName;
    newCell2.innerHTML = mName;
    newCell3.innerHTML = lName
    
}

let button = document.getElementById('submit-button')
button.addEventListener('click',(event)=> {
   
    addRow();
})