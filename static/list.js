 
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "/employees", false);
xhttp.send();

const employees = JSON.parse(xhttp.responseText);
for (let employee of employees) { 
	let e = `
					<tr>
					  <td>${employee.name}</td>
					  <td>${employee.emp_id}</td>
					</tr>
			`
	document.getElementById('employees').innerHTML += e;
}