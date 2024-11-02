import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Post } from '../../../post.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.html',
  styleUrls: ['./add-post-dialog.css']
})

export class AddPostDialogComponent implements OnInit {
  @Output() postAdded = new EventEmitter<Post>(); // Emitir o novo post
  newPostContent: string = '';
  selectedImage: File | null = null;
  imagePreview: string | null = null;

  constructor(private serverService: ServerService,
    public dialogRef: MatDialogRef<AddPostDialogComponent>) {}
  
  ngOnInit() {}

  addPost() {
    if (!this.newPostContent.trim()) return;
  
    const newPost: Post = {
      perfil: "data:image/jpeg;base64,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",
      autor: "Vitória | Gustavo | Bruno",
      conteudo: this.newPostContent,
      imagem: this.imagePreview,
      liked: false
    };
  
    // Adiciona o post ao localStorage
    const existingPosts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]'); // Obtém os posts existentes
    existingPosts.push(newPost); // Adiciona post à lista
    this.serverService.savePosts(existingPosts); // Salva posts atualizados no 
  
    this.clearForm();
    this.postAdded.emit(newPost);
    this.dialogRef.close();
  }
  


  clearForm() {
    this.newPostContent = '';
    this.selectedImage = null;
    this.imagePreview = null;
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }
}
