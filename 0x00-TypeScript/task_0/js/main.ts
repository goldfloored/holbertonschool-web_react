interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentA: Student = {
	firstName: 'Diego',
	lastName: 'Tardio',
	age: 23,
	location: 'Stamford'
}

const studentB: Student = {
	firstName: 'Aaliyah',
	lastName: 'Rodriguez',
	age: 22,
	location: 'Fairfield'
}

const studentsList: Array<Student> = [studentA, studentB];
const table: HTMLTableElement = document.createElement('table');
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
	const newRow: HTMLTableRowElement = tBody.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})

document.body.appendChild(table);