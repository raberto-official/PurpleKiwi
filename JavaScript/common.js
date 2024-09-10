document.addEventListener('DOMContentLoaded', (event) => {
    let modalForm = document.getElementById('modalForm').value;
    let dateEntry = document.getElementById('dateEntry').value;
    let descEntry = document.getElementById('descEntry').value;
    let amountEntry = document.getElementById('amountEntry').value;
    let incomeOrDebitEntry = document.getElementById('incomeOrDebitEntry').value;
    let paymentMethodEntry = document.getElementById('paymentMethodEntry').value;
    let expensesTable = document.getElementById('expensesTable');

    const newEntryRowData = {date: dateEntry, description: descEntry, amount: amountEntry, incomeOrDebit: incomeOrDebitEntry, paymentMethod: paymentMethodEntry};
    
    function addNewRow(newEntryRowData) {
        expensesTable.insertRow(newEntryRowData);
    };

    addEntryButton.addEventListener('click', () => {
        addNewRow(newEntryRowData);
    });
});