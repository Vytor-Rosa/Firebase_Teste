import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { SenhaComponent } from './senha/senha.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    SenhaComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: "", component: EmailComponent},
      {path: "senha", component: SenhaComponent},
      {path: "main", component: MainComponent}
    ]),
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
