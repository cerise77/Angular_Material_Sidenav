import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <mat-toolbar color="primary">
    	<button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
    </mat-toolbar>

    <mat-drawer-container>
    <mat-drawer #snav [mode]="'side'">
      <mat-nav-list>
          <a mat-list-item [routerLink]="''"> Company Sizes </a>
          <a mat-list-item [routerLink]="'/industries'"> Industries </a>
          <a mat-list-item [routerLink]="'/intangibles'"> Intangibles </a>
      </mat-nav-list>
    </mat-drawer>
    <router-outlet></router-outlet>
                 `,
    styleUrls: ['./css/main.component.css']
})
export class AppComponent {}
