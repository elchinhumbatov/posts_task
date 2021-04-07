import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalToggle = false;
  comments: [] = [];

  constructor() { }

  ngOnInit(): void {
  }
  showModal(postId): void {
    this.modalToggle = !this.modalToggle;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.comments = json;
        return this.comments;
      });
  }
  closeModal(e): void {
    if (e.target.id === 'modal') {
      this.modalToggle = !this.modalToggle;
      this.comments = [];
    }
  }
  // @HostListener('document:keydown.escape', ['onKeydownHandler($event)']) onKeydownHandler(event: KeyboardEvent): void {
  //   this.closeModal('a');
  // }
}
