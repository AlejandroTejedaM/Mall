import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    templateUrl: "./contador.component.html",
    styleUrl: "./contador.component.css"
})


export class ContadorComponent {
    cont: number = 0;

    incrementar(): void {
        this.cont ++;
    }

    decrementar(): void {
        this.cont --;
    }
}