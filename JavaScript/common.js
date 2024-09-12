document.addEventListener('DOMContentLoaded', (event) => {

    let dateEntry = document.getElementById('dateEntry');
    let descEntry = document.getElementById('descEntry');

    document.getElementById('addEntryButton').onclick = function() {
        let table = document.getElementById('expensesTable');
        let row = table.insertRow(-1);
        let dateCell = row.insertCell(0);
        let descCell = row.insertCell(1);

        // let dateEntry = document.getElementById('dateEntry');
        // let descEntry = document.getElementById('descEntry').value;

        dateCell.innerHTML = dateEntry;
        descCell.innerHTML = descEntry;

        console.log(dateEntry);
        console.log(descCell)
        
    }

        
});  