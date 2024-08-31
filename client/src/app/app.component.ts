import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Test MVC';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5041/testmvc/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
