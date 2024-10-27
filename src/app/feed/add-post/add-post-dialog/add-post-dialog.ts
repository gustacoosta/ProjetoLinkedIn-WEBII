import { Component } from '@angular/core';


@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.html',
  styleUrls: ['./add-post-dialog.css']
})
export class AddPostDialogComponent {
  selectedImage: File | null = null;
  imagePreview: string | null = null; 

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string; // Armazena a URL da imagem para visualização
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }
}
