import Office from './Office.js';
import Admin from './Admin.js';
import Employee from './Employee.js';



const office=new Office();

office.addEmployee(new Employee("A"));
office.addEmployee(new Admin("B"));

office.createRoom("R1");
office.createRoom("R2");

console.log(office.scheduleMeeting("R1",9,10));
console.log(office.scheduleMeeting("R1",9.5,10.5));
console.log(office.scheduleMeeting("R2",9.5,10.5));
console.log(office.scheduleMeeting("R3",9.5,10.5));                
              
