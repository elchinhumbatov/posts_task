import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {};
  company: {};
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  load = true;
  user: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      fetch(`https://jsonplaceholder.typicode.com/users/${response.id}`)
        .then(user => user.json())
        .then((json) => {
          this.user = json;
          this.load = false;
          return this.user;
        });
    });
  }

}
