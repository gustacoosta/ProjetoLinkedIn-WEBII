import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  constructor(public dialog: MatDialog) {}

  openAddPostDialog(): void {
    this.dialog.open(AddPostDialogComponent, {
      width: '90%',

    });
  }
}
