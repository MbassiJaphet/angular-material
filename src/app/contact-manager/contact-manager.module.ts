import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';



@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ContactManagerRoutingModule,
  ],
  providers: [
    UserService,
  ]
})
export class ContactManagerModule { }
