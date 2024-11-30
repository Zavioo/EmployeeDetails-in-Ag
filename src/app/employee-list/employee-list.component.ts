import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  name: string;
  contactNo: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent {

  employees: Employee[] = [];
  newEmployee: Employee = { name: '', contactNo: '', email: '', address: '' };
  isModalOpen: boolean = false;

  addEmployee() {
    this.employees.push({ ...this.newEmployee }); // spread operator to create a new object
    this.newEmployee = { name: '', contactNo: '', email: '', address: '' }; // Reset form
    this.isModalOpen = false; // Close modal
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
