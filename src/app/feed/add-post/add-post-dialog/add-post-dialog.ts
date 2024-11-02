import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Post } from '../../../post.model';

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

  constructor(private serverService: ServerService) {}

  ngOnInit() {}

  addPost() {
    if (!this.newPostContent.trim()) return;
  
    const newPost: Post = {
      perfil: "https://exemplo.com/imagem-perfil.jpg",
      autor: "Seu Nome",
      conteudo: this.newPostContent,
      imagem: this.imagePreview,
      liked: false
    };
  
    // Adiciona o novo post diretamente ao localStorage
    const existingPosts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]'); // Obtém os posts existentes
    existingPosts.push(newPost); // Adiciona o novo post à lista existente
    this.serverService.savePosts(existingPosts); // Salva os posts atualizados no localStorage
  
    this.clearForm();
    this.postAdded.emit(newPost); // Emite o novo post
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
