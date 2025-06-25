import Employee from "./Employee.js";

class Admin extends Employee {
  constructor(name) {
    super(name);
    this.role = 'Admin';
  }
}

export default Admin;