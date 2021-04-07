import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @ViewChild(ModalComponent) modal;
  posts: [] = [];
  page = 1;
  modalToggle = false;
  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.loadPosts().subscribe((response) => {
      this.posts = response;
    });
  }
  showModal(postId): void {
    this.modal.showModal(postId);
  }
}
