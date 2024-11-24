import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  @Input({required: true})
  label: string = "";
  imagenBase64?: string;

  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    })
  }

  cambiarImagen(event: Event) {
    const element = event.target as HTMLInputElement;
    const file: File = (element.files as FileList)[0];
    if (file) {
      this.toBase64(file)
        .then((value: string) => this.imagenBase64 = value)
        .catch(error => console.error(error));
      this.archivoSeleccionado.emit(file);
    }
  }

}
