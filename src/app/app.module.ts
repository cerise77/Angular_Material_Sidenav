import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';


import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CompanySize }   from './companySize.component';
import { Industries }   from './industries.component';
import { Intangibles }   from './intangibles.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpService }   from './http.service';


const appRoutes: Routes =[
    { path: '', component: CompanySize},
    { path: 'industries', component: Industries},
    { path: 'intangibles', component: Intangibles},
    { path: '**', component: NotFoundComponent }
];

//

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule,BrowserAnimationsModule, MatSidenavModule,
                    MatButtonModule, MatToolbarModule, MatIconModule, MatListModule],
    declarations: [
                    AppComponent, NotFoundComponent,
                    CompanySize, Industries, Intangibles
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
