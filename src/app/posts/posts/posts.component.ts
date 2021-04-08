import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { MyDataService } from '../../services/my-data.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() userId = 'custom';
  // @ViewChild(ModalComponent) modal;
  posts = [];
  filteredPosts = [];
  page = 1;
  search = '';
  checked = true;
  itemsPerPage = 10;
  constructor(private myDataService: MyDataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.myDataService.loadPosts().subscribe((response) => {
      if (this.userId !== 'custom') {
        this.posts = response.filter((post) => {
          this.itemsPerPage = 5;
          return post.userId === this.userId;
        });
      } else {
        this.posts = response;
      }
    });
  }
  openDialog(postId): any {
    this.dialog.open(ModalComponent, {
      data: {
        postId
      }
    });
  }
}
