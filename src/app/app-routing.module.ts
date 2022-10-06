import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostAddComponent } from './components/post-add/post-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'add', component: PostAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
