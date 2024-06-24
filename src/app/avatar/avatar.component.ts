import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() imageUrl: string | null = null;
  @Input() disabled: boolean = false;
  @Output() photoUploaded = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput!: ElementRef;

  onUploadClick(event: Event) {
    event.stopPropagation();
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    // Conect Keystone DB
  }
}
