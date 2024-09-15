document.addEventListener('DOMContentLoaded', (event) => {


//Values of every entry keep coming back as Null.

    // let dateEntry = document.getElementById('dateEntry');
    // let descEntry = document.getElementById('descEntry');

    document.getElementById('addEntryButton').onclick = function() {
        let table = document.getElementById('expensesTable');
        let dateEntry = document.getElementById('dateEntry');
        let descEntry = document.getElementById('descEntry').value;

        let row = table.insertRow(-1);
        let dateCell = row.insertCell(0);
        let descCell = row.insertCell(1);

        dateCell.innerHTML = dateEntry;
        descCell.innerHTML = descEntry;

        console.log(dateEntry);
        console.log(descCell)
        
    }

        
});  