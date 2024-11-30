import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from "./employee-list/employee-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, RouterLink, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee';

}
