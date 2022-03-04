var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value + document.getElementById("lastName").value;
    formData["mobileNumber"] = document.getElementById("mobileNumber").value;
    formData["dob"] = document.getElementById("dob").value
    formData["married"] = document.getElementById("yes").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.mobileNumber;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.married;
    cell4 = newRow.insertCell(4);
		cell4.innerHTML = data.city;    
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    // document.getElementById("lastName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mobileNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("married").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.mobileNumber;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.married;
    selectedRow.cells[4].innerHTML = formData.city;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("mobileNumber").value = '';
    document.getElementById("pan").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("married").value = '';
    document.getElementById("doa").value = '';
    document.getElementById("address").value = '';
    document.getElementById("city").value = '';
    document.getElementById("state").value = '';
    document.getElementById("country").value = '';
    document.getElementById("pincode").value = '';
    selectedRow = null;
}
function ageCalculator() {  
  var userinput = document.getElementById("dob").value;  
  var dob = new Date(userinput);  
  if(dob==null || dob=='') {  
    // document.getElementById("message").innerHTML = "**Choose a date please!";    
    return false;   
  } else {  
    
  
  var month_diff = Date.now() - dob.getTime();  
    
  
  var age_dt = new Date(month_diff);   
    
    
  var year = age_dt.getUTCFullYear();  
    
  
  var age = Math.abs(year - 1970);  
    
  
  return document.getElementById("result").innerHTML =    
           "Age is: " + age + " years. ";  
  }  
}
