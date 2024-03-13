interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alphonce',
  lastName: 'Odhiambo',
  age: 29,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Kelvin',
  lastName: 'Oyowe',
  age: 28,
  location: 'Kisumu'
};

const studentsList = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
const th3: HTMLTableHeaderCellElement = row.insertCell(2);
const th4: HTMLTableHeaderCellElement = row.insertCell(3);

th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Last Name</b>");
th3.innerHTML = ("<b>Age</b>");
th4.innerHTML = ("<b>Location</b>");

const body: HTMLTableSectionElement = table.createTBody();
studentsList.forEach((student) => {
  const newRow: HTMLTableRowElement = body.insertRow();
  const firstNameCell: HTMLTableCellElement = newRow.insertCell(0);
  const lastNameCell: HTMLTableCellElement = newRow.insertCell(1);
  const ageCell: HTMLTableCellElement = newRow.insertCell(2);
  const locationCell: HTMLTableCellElement = newRow.insertCell(3);

  firstNameCell.innerHTML = student.firstName;
  lastNameCell.innerHTML = student.lastName;
  ageCell.innerHTML = String(student.age);
  locationCell.innerHTML = student.location;
});
