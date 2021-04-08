import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  comments: [] = [];
  constructor( @Inject(MAT_DIALOG_DATA) public postId: any ) { }

  ngOnInit(): void {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.postId.postId}/comments`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.comments = json;
        return this.comments;
      });
  }
}
