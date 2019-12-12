import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

import { AlertModule } from 'ngx-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    FooterComponent,
    ContactComponent,  
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot() 
  ],
  providers: [],
  //in the bootstrap array what should be displayed is loaded
  bootstrap: [AppComponent]
})
export class AppModule { }
