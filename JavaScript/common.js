document.addEventListener('DOMContentLoaded', (event) => {
    // let modalForm = document.getElementById('modalForm');

    // let dateEntry = document.getElementById('dateEntry').value;

    // let descEntry = document.getElementById('descEntry').value;
    // let amountEntry = document.getElementById('amountEntry').value;
    // let incomeOrDebitEntry = document.getElementById('incomeOrDebitEntry').value;
    // let paymentMethodEntry = document.getElementById('paymentMethodEntry').value;

    // let addEntryButton = document.getElementById('addEntryButton');

    
    // function addNewRow(dateEntry, descEntry, amountEntry, incomeOrDebitEntry, paymentMethodEntry) {
    //     let expensesTable = document.getElementById('expensesTable');
    //     // adding empty first row
    //     let row = expensesTable.insertRow(0);
    //     // insert new cells at positions of the "new" tr element
    //     let dateCell = row.insertCell(0);
    //     let descCell = row.insertCell(1);
    //     let amountCell = row.insertCell(2);
    //     let incomeOrDebitCell = row.insertCell(3);
    //     let paymentMethodCell = row.insertCell(4);

    //     // adding data to cells
    //     dateCell.innerHTML = dateEntry;
    //     descCell.innerHTML = descEntry;
    //     amountCell.innerHTML = amountEntry;
    //     incomeOrDebitCell.innerHTML = incomeOrDebitEntry;
    //     paymentMethodCell.innerHTML = paymentMethodEntry;

    // };
    document.getElementById('addEntryButton').onclick = function() {
        let table = document.getElementById('expensesTable');
        let row = table.insertRow(-1);
        let dateCell = row.insertCell(0);
        let descCell = row.insertCell(1);

        let dateEntry = document.getElementById('dateEntry');

        dateCell.innerHTML = dateEntry
        descCell.innerHTML = document.getElementById('descEntry').value;

        console.log(dateEntry);
        
    }

        
});