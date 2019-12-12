import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'education',
  component: EducationComponent
},
{
  path:'experience',
  component: ExperienceComponent
},
{
  path:'skills',
  component: SkillsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
